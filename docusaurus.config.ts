import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Марк Поляничко',
  tagline: 'Технологический лидер · CTO: развитие и внедрение технологий',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  // TODO: заменить на реальный домен сайта
  url: 'https://markpolyanichko.github.io',
  baseUrl: '/',

  organizationName: 'MarkPolyanichko',
  projectName: 'my-website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  stylesheets: [
    {href: 'https://fonts.googleapis.com', rel: 'preconnect'},
    {
      href: 'https://fonts.gstatic.com',
      rel: 'preconnect',
      crossorigin: 'anonymous',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap',
      rel: 'stylesheet',
    },
  ],

  presets: [
    [
      'classic',
      {
        // Демо-документация и блог шаблона отключены: сайт — персональная визитка.
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    metadata: [
      {
        name: 'keywords',
        content:
          'Марк Поляничко, технологический лидер, CTO, технический директор, платформы, финтех, EdTech, ИИ',
      },
    ],
    navbar: {
      title: 'Марк Поляничко',
      logo: {
        alt: 'Монограмма МП',
        src: 'img/favicon.svg',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Марк Поляничко`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
