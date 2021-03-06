// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Precessing',
  tagline: 'Precessing, also known as p8g, is a general-purpose 2D graphics library.',
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
            docId: 'get-started/index',
            position: 'left',
            label: 'Docs',
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
        copyright: `Made with ?????? by Bernhard Fritz`,
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
        injectHtmlTags: ({content}) => ({
          headTags: [
            {
              tagName: 'script',
              innerHTML: 'if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"bernhardfritz",utcoffset:"2"}))};sessionStorage.setItem("_swa","1");',
            }
          ]
        })
      }),
    ],
};

module.exports = config;
