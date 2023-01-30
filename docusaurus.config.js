// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const url = 'https://jonbenery.github.io';
const homePage = 'https://github.com/jonbenery/weblog';

const pagePlugins = ['openApi']

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JonBen',
  tagline: '万物皆有裂痕，那是光照进来的地方',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: url,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jonben', // Usually your GitHub org/user name.
  projectName: 'weblog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    ...pagePlugins.map(page => {
      return [
        '@docusaurus/plugin-content-docs',
        {
          id: page,
          path: `./pages/${page}`,
          routeBasePath: page,
          sidebarPath: require.resolve(`./pages/${page}/sidebars.js`),
          editUrl: homePage,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        }
      ]
    })
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./docs/sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: homePage,
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All our posts',
          blogSidebarCount: 'ALL',
          // postsPerPage: 'ALL',
          // blogDescription: 'A Docusaurus powered blog!',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: homePage,
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
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '零下6℃',
        logo: {
          alt: 'no pains no gains',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          {
            to:'/blog',
            label: '博客', 
            position: 'left'
          },
          {
            to:'/openApi',
            label: 'openApi', 
            position: 'left'
          },
          {
            href: homePage,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '文档',
                to: '/docs',
              },
            ],
          },
          {
            title: '博客',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              }              
            ],
          },
          {
            title: '联系方式',
            items: [
              {
                label: '邮箱： 592926483@qq.com',
                href: 'mailto:592926483@qq.com'
              },
              {
                label: 'GitHub',
                href: homePage,
              },
            ],
          },
        ],
        copyright: `AGPL-3.0 Licensed | Copyright © ${new Date().getFullYear()} weblog, Inc. Built with Jonben.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
