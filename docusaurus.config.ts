import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // 【关键：基础配置】
  title: '嵌入式AI',
  tagline: '让嵌入式开发更简单',
  favicon: 'img/favicon.ico',

  // 【关键：GitHub Pages 路径，只准出现这一次】
  url: 'https://viviwong.github.io',
  baseUrl: '/',
  organizationName: 'viviwong',
  projectName: 'viviwong.github.io',

  // 【核心重点：外部样式表注入】
  // 如果这里还是加载不到，请检查你的开发服务器是否需要重启
  stylesheets: [
    {
      'https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css',
      // 加入这个 Inter 字体，它是目前最顶级的 UI 字体
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
      
    },
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