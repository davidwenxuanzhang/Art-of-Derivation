// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Art of Derivation',
  tagline: 'All Things Are Derivable',
  favicon: 'img/icon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://davidwenxuanzhang.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Art-of-Derivation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'davidwenxuanzhang', // Usually your GitHub org/user name.
  projectName: 'Art-of-Derivation', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
    },
  ],
 presets: [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        sidebarPath: './sidebars.js',
        sidebarCollapsible: true,
        editUrl:
          'https://github.com/davidwenxuanzhang/Art-of-Derivation/blob/main/',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
      blog: false,
      theme: {
        customCss: './src/css/custom.css',
      },
      sitemap: {
        changefreq: 'weekly',
        priority: 0.5,
      },
    }),
  ],
],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],

  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
  {
    name: 'google-site-verification',
    content: '_vwebILJo8zQCRt8T4zUHWGDMvo1uIfPCnszN3hbFXY',
  },
],
      favicon: 'img/icon.ico',
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
      sidebar: {
        hideable: true,           
        autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Art of Derivation',
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon.png',
          srcDark: 'img/icon-dark.png',
        },
        items: [
          { 
          label: 'About',     // 导航栏显示的名称
          to: '/docs/About',  // 链接到的文档页面
        },
          {
          type: 'dropdown',  // 下拉菜单类型
          label: 'Mathematics',     // 导航栏显示的名称
          items: [
            {
               to: '/docs/Mathematics/Algebra',  // 链接到代数主页
              label: 'Algebra',
            },
            {
               to: '/docs/Mathematics/Geometry',  // 链接到几何主页
              label: 'Geometry',
            },
            {
               to: '/docs/Mathematics/Trigonometry',  // 链接到三角函数主页
              label: 'Trigonometry',
            },
                        {
               to: '/docs/Mathematics/Calculus',  // 链接到微积分主页
              label: 'Calculus',
            },
            // 可以添加更多子项
          ],
        },

            {
          type: 'dropdown',  // 下拉菜单类型
          label: 'Statistics',     // 导航栏显示的名称
          items: [
            {
               to: '/docs/Statistics/Probability-Theory',  // 链接到概率论主页
              label: 'Probability Theory',
            },
            {
               to: '/docs/Statistics/Regression-Analysis',  // 链接到回归分析主页
              label: 'Regression Analysis',
            },
            
            // 可以添加更多子项
          ],
        },
            {
          type: 'dropdown',  // 下拉菜单类型
          label: 'Physics',     // 导航栏显示的名称
          items: [
            {
               to: '/docs/Physics/Mechanics',  // 链接到力学主页
              label: 'Mechanics',
            },
            {
               to: '/docs/Physics/Electromagnetism',  // 链接到电磁学主页
              label: 'Electromagnetism',
            },
            
            // 可以添加更多子项
          ],
        },
          { type: 'search', position: 'right' },
          {
            href: 'https://github.com/davidwenxuanzhang/Art-of-Derivation',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `<i>“Mathematics is the queen of the sciences.” — Carl Friedrich Gauss</i> <br/> Copyright © ${new Date().getFullYear()} <strong>Art of Derivation</strong>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;