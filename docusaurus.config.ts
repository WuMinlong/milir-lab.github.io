import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MiLiR Lab',
  // tagline: 'Apply what you learn',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://milir-lab.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MiLiR-Lab', // Usually your GitHub org/user name.
  projectName: 'milir-lab.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // i18n configuration for multi-language support
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
      },
      'en': {
        label: 'English',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'docs',
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/MiLiR-Lab/milir-lab.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MiLiR-Lab/milir-lab.github.io/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
  },
  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['zh', 'en'],
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/',
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // i18n support for the navbar
    navbar: {
      title: '',
      logo: {
        alt: 'MiLiR Lab Logo',
        src: 'img/logo.svg',
      },
      items: [
        // 语言切换器
        {
          type: 'localeDropdown',
          position: 'right',
        },
        // 其他导航项
        {
          type: 'dropdown',
          sidebarId: 'docusSidebar',
          position: 'left',
          label: '网站开发',
          items: [
            {
              type: 'doc',
              label: '文档开发',
              docId: 'tools/docusaurus/README',
            },
            {
              type: 'doc',
              label: 'Git 使用',
              docId: 'tools/git/README',
            },
          ],
        },
        {
          type: 'dropdown',
          sidebarId: 'docusSidebar',
          position: 'left',
          label: 'ROS 开发',
          items: [
            {
              type: 'doc',
              label: 'ROS1 开发',
              docId: 'ros/ros1/README',
            },
            {
              type: 'doc',
              label: 'ROS2 开发',
              docId: 'ros/ros2/README',
            },
          ],
        },
        {
          type: 'html',
          position: 'right',
          value: `<a href="/join-us" class="navbar__item navbar__link nav-icon-join" aria-label="加入我们"><img src="/img/join-us.svg" alt="加入我们" style="height:20px;vertical-align:middle;margin-right:8px;"/><span class="nav-item-text">加入我们</span></a>`,
        },
      ],
    },
  footer: {
    style: 'dark',
    links: [],  // 清空默认链接
    copyright: `© ${new Date().getFullYear()} MiLiR Lab. Built with Docusaurus.`,
  },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
