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
  scripts: [
    {
      src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
      async: true,
    },
  ],
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
          // --- 开启这两个开关 ---
          showLastUpdateAuthor: true,  // 显示最后修改人
          showLastUpdateTime: true,    // 显示最后修改时间
        },
        blog: {
          showReadingTime: true,
          // 博客也可以开启
          showLastUpdateTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // 【修正点 1：把 plugins 移到正确层级】
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'embedded',             
        path: 'embedded',           
        routeBasePath: 'embedded',
        // 告诉它使用哪个侧边栏文件，或者设为 false（如果不想要侧边栏）
        // 【关键修改】显式指定使用 sidebars.ts 里的哪个 key
        // 只需要指向侧边栏文件即可
        sidebarPath: require.resolve('./sidebars.ts'),
      },
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
        
        // 【修正点 2：对于多实例 Docs，建议使用 to 链接到文件夹下的首页】
        {to: '/embedded/', label: '嵌入式知识', position: 'left'},
        {
          type: 'dropdown',
          label: '🛠️ 实训工具箱',
          position: 'right',
          items: [
            {
              label: '🔌 Web 串口调试助手',
              // ✨ 关键修改：使用 href 强制跳转，不走 Docusaurus 内部路由
              href: '/tools/serial/index.html',
              // 💡 建议添加：在新窗口打开，方便学生对照教程操作
              target: '_blank', 
            },
            {
              label: '💡 LED 字模生成器',
              // ✨ 关键修改：同上
              href: '/tools/led/index.html',
              target: '_blank',
            },
          ],
        },
      ],
    },
    footer: {
  style: 'dark',
  copyright: `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <div>Copyright © ${new Date().getFullYear()} KDL, Inc. 叩丁狼嵌入式AI讲义.</div>
      <div id="busuanzi_container_site_pv" style="display: none; font-size: 0.9em; opacity: 0.8;">
        <i class="ri-line-chart-line" style="color: #2575fc; margin-right: 4px;"></i>
        本站总访问量 <span id="busuanzi_value_site_pv" style="font-weight: bold; color: var(--ifm-color-primary);"></span> 次
      </div>
    </div>
  `,
},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;