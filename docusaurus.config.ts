import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const LINE_URL = 'https://line.me/R/ti/p/YOUR_LINE_ID'; // 後で差し替え

const config: Config = {
  title: '縁 enishi',
  tagline: 'Being を起点に、Inside-Out で生きるためのナレッジベース',
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
    lineUrl: LINE_URL,
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
          href: LINE_URL,
          label: '📩 LINE で相談する',
          position: 'right',
          className: 'navbar-line-btn',
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
            { label: 'LINE で相談する（無料）', href: LINE_URL },
            { label: '企業・業務委託のご相談', to: '/docs/サービス/企業向け業務委託' },
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
