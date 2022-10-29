// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Precessing',
  tagline:
    'Precessing, also known as p8g, is a general-purpose 2D graphics library.',
  url: 'https://bernhardfritz.github.io',
  baseUrl: '/p8g/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bernhardfritz', // Usually your GitHub org/user name.
  projectName: 'p8g', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/bernhardfritz/p8g/edit/master/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Precessing',
        logo: {
          alt: 'Precessing logo',
          src: 'img/logo-light.png',
          srcDark: 'img/logo-dark.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'get-started',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/examples',
            position: 'left',
            label: 'Examples',
            activeBaseRegex: '/examples',
          },
          {
            to: '/editor',
            position: 'left',
            label: 'Editor',
            activeBaseRegex: '/editor',
          },
          {
            href: 'https://github.com/bernhardfritz/p8g',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://discord.gg/B3vrdJcra6',
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Reference',
                to: '/docs/reference',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/B3vrdJcra6',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/bernhardfritz/p8g',
              },
            ],
          },
        ],
        copyright: `Made with ❤️ by Bernhard Fritz`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
      },
      algolia: {
        appId: 'S60BTHFQF0',
        apiKey: '39a9c9e02199c120400239b71a54c389',
        indexName: 'p8g',
      },
    }),

  plugins: [
    (context, options) => ({
      name: 'counter.dev',
      injectHtmlTags: ({ content }) => ({
        headTags: [
          {
            tagName: 'script',
            attributes: {
              src: 'https://cdn.counter.dev/script.js',
              'data-id': '65b03550-41cc-469f-a1e9-8dbd91e95974',
              'data-utcoffset': '2',
            },
          },
        ],
      }),
    }),
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'examples',
        path: 'examples',
        routeBasePath: 'examples',
        sidebarPath: require.resolve('./sidebarsExamples.js'),
        editUrl: 'https://github.com/bernhardfritz/p8g/edit/master/docs',
      },
    ],
    [
      path.resolve(__dirname, 'plugin-dynamic-routes'),
      {
        routes: [
          {
            path: '/editor',
            exact: false,
            component: '@site/src/components/Editor',
          },
        ],
      },
    ],
  ],
};

module.exports = config;
