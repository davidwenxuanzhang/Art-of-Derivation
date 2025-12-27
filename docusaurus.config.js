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
  baseUrl: '/Art-of-Derivations/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'davidwenxuanzhang', // Usually your GitHub org/user name.
  projectName: 'Art-of-Derivations', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/davidwenxuanzhang/Art-of-Derivations',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateAuthor: true,
				  showLastUpdateTime: true,
        },
        blog: false,
			theme: {
				customCss: './src/css/custom.css',
			},
		}),
	],
],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
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
          label: 'Start',     // 导航栏显示的名称
          to: '/docs/Introduction',  // 链接到的文档页面
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
               to: '/docs/Mathematics/Calculus',  // 链接到微积分主页
              label: 'Calculus',
            },
            // 可以添加更多数学子项
          ],
        },
          {
          type: 'dropdown',  // 下拉菜单类型
          label: 'Notes in Class',     // 导航栏显示的名称
          items: [
            {
               to: '/docs/Notes-in-Class/Multivariable',  // 链接到代数主页
              label: 'Multivariable Calculus',
            },
            
            // 可以添加更多数学子项
          ],
        },
          
          {
            href: 'https://github.com/davidwenxuanzhang/Art-of-Derivations',
            label: 'GitHub',
            position: 'right',
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