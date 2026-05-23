import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useEffect, useRef } from 'react';
import katex from 'katex';

// ─── KaTeX helper ────────────────────────────────────────────
function k(tex) {
  return katex.renderToString(tex, { displayMode: true, throwOnError: false });
}

// ─── GHOST POOL ──────────────────────────────────────────────
function buildPool(base) {
  return [
    { type: 'figure', src: `${base}img/Newton.png`,          label: 'Newton' },
    { type: 'figure', src: `${base}img/Euler.png`,           label: 'Euler' },
    { type: 'figure', src: `${base}img/Gauss.png`,           label: 'Gauss' },
    { type: 'figure', src: `${base}img/Reimann.png`,         label: 'Riemann' },
    { type: 'figure', src: `${base}img/Jacob_Bernoulli.png`, label: 'Bernoulli' },
    { type: 'figure', src: `${base}img/Weierstrass.png`,     label: 'Weierstrass' },
    { type: 'figure', src: `${base}img/Leibniz.png`,         label: 'Leibniz' },
    { type: 'figure', src: `${base}img/Lagrange.png`,        label: 'Lagrange' },

    { type: 'formula', html: k(String.raw`e^{i\pi} + 1 = 0`) },
    { type: 'formula', html: k(String.raw`\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}`) },
    { type: 'formula', html: k(String.raw`\zeta(s) = \sum_{n=1}^{\infty} \frac{1}{n^s}`) },
    { type: 'formula', html: k(String.raw`\nabla^2 \varphi = 0`) },
    { type: 'formula', html: k(String.raw`ds^2 = -c^2 dt^2 + dx^2`) },
    { type: 'formula', html: k(String.raw`f(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}`) },

    // Normal distribution bell curve
    { type: 'svg', svg: `<svg width="200" height="90" viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline
        points="0,88 10,88 20,87 30,85 40,80 50,70 60,54 70,35 80,18 90,9 100,6 110,9 120,18 130,35 140,54 150,70 160,80 170,85 180,87 190,88 200,88"
        stroke="rgba(255,255,255,0.75)" stroke-width="2" fill="none" stroke-linejoin="round"/>
      <line x1="0" y1="88" x2="200" y2="88" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
    </svg>` },

    // Unit circle
    { type: 'svg', svg: `<svg width="120" height="120" viewBox="-1.4 -1.4 2.8 2.8" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="1" stroke="rgba(255,255,255,0.55)" stroke-width="0.06" fill="none"/>
      <line x1="-1.3" y1="0" x2="1.3" y2="0" stroke="rgba(255,255,255,0.3)" stroke-width="0.04"/>
      <line x1="0" y1="-1.3" x2="0" y2="1.3" stroke="rgba(255,255,255,0.3)" stroke-width="0.04"/>
      <line x1="0" y1="0" x2="0.707" y2="-0.707" stroke="rgba(255,180,255,0.8)" stroke-width="0.06"/>
      <circle cx="0.707" cy="-0.707" r="0.08" fill="rgba(255,255,255,0.9)"/>
    </svg>` },
  ];
}

// ─── SPAWN ZONES ─────────────────────────────────────────────
// Zones are inset so figures (up to 260px wide, ~300px tall)
// never go outside the hero frame. left is between 15%–80%,
// top is between 10%–75% so edges stay inside.
const ZONES = [
  { top: '15%', left: '15%' },
  { top: '15%', left: '75%' },
  { top: '50%', left: '12%' },
  { top: '55%', left: '72%' },
  { top: '12%', left: '44%' },
  { top: '50%', left: '44%' },
  { top: '28%', left: '62%' },
  { top: '65%', left: '28%' },
  { top: '35%', left: '78%' },
  { top: '70%', left: '58%' },
];

// ─── TIMING — tweak these freely ─────────────────────────────
const MAX_ACTIVE  = 5;      // max ghosts on screen at once
const MIN_STAY_MS = 2500;   // faster: was 4000
const MAX_STAY_MS = 5500;   // faster: was 9000
const MIN_GAP_MS  = 800;    // faster: was 1200
const MAX_GAP_MS  = 2000;   // faster: was 3500
const FADE_MS     = 1800;   // must match CSS transition duration

// ─── FORMULA SIZE — change this one value to scale all formulas
const FORMULA_FONT_SIZE = '2.4rem';  // bigger: was effectively ~1rem

function useGhostLayer(layerRef, pool) {
  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const usedZones   = new Set();
    const usedItems   = new Set();
    const activeSlots = [];
    let stopped = false;

    function buildEl(item) {
      const el = document.createElement('div');
      el.className = styles.ghost;

      if (item.type === 'figure') {
        el.classList.add(styles.ghostFigure);
        const img = document.createElement('img');
        img.src   = item.src;
        img.alt   = item.label;
        img.style.width   = '100%';
        img.style.display = 'block';
        el.appendChild(img);

      } else if (item.type === 'formula') {
        el.classList.add(styles.ghostFormula);
        el.style.fontSize = FORMULA_FONT_SIZE;
        el.innerHTML = item.html;

      } else if (item.type === 'svg') {
        el.classList.add(styles.ghostSvg);
        el.innerHTML = item.svg;
      }

      return el;
    }

    function spawnGhost() {
      if (stopped) return;
      if (activeSlots.length >= MAX_ACTIVE) return;

      const availableZones = ZONES.map((_, i) => i).filter(i => !usedZones.has(i));
      if (!availableZones.length) return;

      const availableItems = pool.map((_, i) => i).filter(i => !usedItems.has(i));
      if (!availableItems.length) return;

      const zoneIdx = availableZones[Math.floor(Math.random() * availableZones.length)];
      const itemIdx = availableItems[Math.floor(Math.random() * availableItems.length)];
      const zone    = ZONES[zoneIdx];
      const item    = pool[itemIdx];

      const el = buildEl(item);
      el.style.top       = zone.top;
      el.style.left      = zone.left;
      el.style.transform = 'translate(-50%, -50%) scale(0.94)';
      layer.appendChild(el);

      usedZones.add(zoneIdx);
      usedItems.add(itemIdx);
      activeSlots.push({ el, zoneIdx, itemIdx });

      requestAnimationFrame(() => {
        el.style.opacity   = (0.13 + Math.random() * 0.18).toFixed(2);
        el.style.transform = 'translate(-50%, -50%) scale(1)';
      });

      const stayMs = MIN_STAY_MS + Math.random() * (MAX_STAY_MS - MIN_STAY_MS);
      setTimeout(() => {
        el.style.opacity   = '0';
        el.style.transform = 'translate(-50%, -50%) scale(1.05)';
        setTimeout(() => {
          el.remove();
          usedZones.delete(zoneIdx);
          usedItems.delete(itemIdx);
          const i = activeSlots.findIndex(s => s.el === el);
          if (i !== -1) activeSlots.splice(i, 1);
        }, FADE_MS + 100);
      }, stayMs);
    }

    function tick() {
      if (stopped) return;
      spawnGhost();
      const gap = MIN_GAP_MS + Math.random() * (MAX_GAP_MS - MIN_GAP_MS);
      setTimeout(tick, gap);
    }

    setTimeout(() => tick(), 200);
    setTimeout(() => tick(), 1000);
    setTimeout(() => tick(), 1800);

    return () => { stopped = true; };
  }, []);
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl  = useBaseUrl('/');
  const layerRef = useRef(null);
  const pool     = buildPool(baseUrl);
  useGhostLayer(layerRef, pool);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div ref={layerRef} className={styles.ghostLayer} />
      <div className="container">
        <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/About">
            What is this?
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}