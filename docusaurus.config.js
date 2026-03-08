// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EVENT-DRIVEN-MICROSERVICES',
  tagline: 'Documentation for AI projects',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jacksteve-code.github.io',
  // Set the /<baseUrl>/ for your project. For GitHub pages, it is often '/projectName/'
  baseUrl: '/EVENT-DRIVEN-MICROSERVICES/', 

  // GitHub pages deployment config.
  organizationName: 'jacksteve-code', 
  projectName: 'EVENT-DRIVEN-MICROSERVICES', 
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // ── ONLY THIS SECTION WAS ADDED ──
  markdown: {
    format: 'detect',   // .md → pure Markdown (CommonMark), .mdx → full MDX
  },
  // ─────────────────────────────────

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Makes docs the homepage
          sidebarPath: './sidebars.js',
          // This line helps remove the sidebar from the UI layout
          numberPrefixParser: false,
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
      // Hides the sidebar sitewide
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        title: '',
        logo: {
          alt: '',
          src: 'img/logo.svg', 
        },
        items: [], // No extra links in navbar
      },
      footer: {
        style: 'dark',
        links: [], 
        copyright: `Copyright © ${new Date().getFullYear()} EVENT-DRIVEN-MICROSERVICES.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;