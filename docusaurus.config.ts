import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '嵌入式AI',
  tagline: '让嵌入式开发更简单',
  favicon: 'img/favicon.ico',

  url: 'https://viviwong.github.io',
  baseUrl: '/',
  organizationName: 'viviwong',
  projectName: 'viviwong.github.io',

  // 【已修正：stylesheets 语法错误】
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
  ],

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: '嵌入式AI',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: '讲义'},
        {to: '/blog', label: '博客', position: 'left'},
        // 【新增：链接到你的静态 HTML 页面】
        {
          to: '/web/01-Embedded_Systems.html', 
          label: '网页知识', 
          position: 'left'
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} KDL, Inc. 叩丁狼嵌入式AI讲义.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;