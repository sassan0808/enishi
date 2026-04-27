import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const LINE_PERSONAL = 'https://line.me/R/ti/p/YOUR_LINE_ID_PERSONAL'; // 個人向け（後で差し替え）
const LINE_BIZ = 'https://line.me/R/ti/p/YOUR_LINE_ID_BIZ'; // 経営者向け（後で差し替え）

const config: Config = {
  title: '縁 enishi',
  tagline: '「なぜ」から始まる、Inside-Out へのパラダイムシフト支援',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://enishi.vercel.app',
  baseUrl: '/',

  organizationName: 'sassan0808',
  projectName: 'enishi',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  customFields: {
    linePersonal: LINE_PERSONAL,
    lineBiz: LINE_BIZ,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '縁 enishi',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'コンセプト',
        },
        {
          to: '/docs/フレームワーク/量子力学とBeing',
          label: 'フレームワーク',
          position: 'left',
        },
        {
          to: '/docs/サービス/個別相談',
          label: 'サービス',
          position: 'left',
        },
        {
          href: LINE_PERSONAL,
          label: '個人の方',
          position: 'right',
          className: 'navbar-line-btn',
        },
        {
          href: LINE_BIZ,
          label: '経営者の方',
          position: 'right',
          className: 'navbar-line-btn navbar-line-btn--biz',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'コンテンツ',
          items: [
            { label: 'コンセプト', to: '/docs/コンセプト/Inside-Outとは' },
            { label: 'フレームワーク', to: '/docs/フレームワーク/量子力学とBeing' },
            { label: 'サービス', to: '/docs/サービス/個別相談' },
          ],
        },
        {
          title: 'つながる',
          items: [
            { label: '📩 個人の方はこちら（LINE）', href: LINE_PERSONAL },
            { label: '📩 経営者・法人の方はこちら（LINE）', href: LINE_BIZ },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} 縁 enishi`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
