import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

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
          label: '読む',
        },
        {
          href: 'https://kokone-journal-git-main-sassan0808-gmailcoms-projects.vercel.app/advanced-fortune',
          label: '🔢 369数秘を試す',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} 縁 enishi`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
