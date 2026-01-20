import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import katex from 'katex';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx(styles.mathLayer, 'mathLayer')}>
        <img alt="" src={useBaseUrl('/img/Newton.png')} className={clsx(styles.mathFigure, 'mathFigure')} />
        <img alt="" src={useBaseUrl('/img/Euler.png')} className={clsx(styles.mathFigure, 'mathFigure')} />
        <img alt="" src={useBaseUrl('/img/Gauss.png')} className={clsx(styles.mathFigure, 'mathFigure')} />
        <img alt="" src={useBaseUrl('/img/Reimann.png')} className={clsx(styles.mathFigure, 'mathFigure')} />
        <img alt="" src={useBaseUrl('/img/Jacob_Bernoulli.png')} className={clsx(styles.mathFigure, 'mathFigure')} />
        <img alt="" src={useBaseUrl('/img/Weierstrass.png')} className={clsx(styles.mathFigure, 'mathFigure')} />
        <img alt="" src={useBaseUrl('/img/Leibniz.png')} className={clsx(styles.mathFigure, 'mathFigure')} />
        <img alt="" src={useBaseUrl('/img/Lagrange.png')} className={clsx(styles.mathFigure, 'mathFigure')} />
      </div>
      <div className={styles.formulaLayer}>
        <div className={styles.formulaFigure} dangerouslySetInnerHTML={{__html: katex.renderToString(String.raw`e^{i\pi}+1=0`, {
          displayMode: true,
          throwOnError: false,
            }),
          }}
        />
      </div>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
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
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
