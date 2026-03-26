import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // 1. 站点基础信息
  title: '嵌入式AI', 
  tagline: '让嵌入式开发更简单', 
  favicon: 'img/favicon.ico',

  // 2. GitHub Pages 发布配置 (严禁重复定义)
  url: 'https://viviwong.github.io',
  baseUrl: '/',
  organizationName: 'viviwong',
  projectName: 'viviwong.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // 3. 外部样式库 (确保图标正常显示)
  stylesheets: [
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css',
      type: 'text/css',
    },
  ],

  // 4. 报错处理与实验性功能
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  future: {
    v4: true, 
  },

  // 5. 语言设置
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
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    // 导航栏
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
    // 页脚
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: '讲义', to: '/docs/intro' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/viviwong' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KDL, Inc. 叩丁狼嵌入式AI讲义.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;