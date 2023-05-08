// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Power',
  tagline: 'Complete AI Pack for WordPress',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://aipower.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aipowerorg', // Usually your GitHub org/user name.
  projectName: 'aipowerorg.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'deployment',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aipowerorg/aipowerorg.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aipowerorg/aipowerorg.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // Add your Google Analytics configuration here:
        gtag: {
          trackingID: 'G-D4CDTL01MK', // Replace 'G-XXXXXXXXXX' with your Google Analytics tracking ID.
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ai-power-social-card.jpg',
      navbar: {
        title: 'AI Power',
        logo: {
          alt: 'Complete AI Pack for WordPress',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {to: 'https://aipower.org/features/', label: 'Features', position: 'left'},
          {to: 'https://aipower.org/pricing/', label: 'Pricing', position: 'left'},
          {to: 'https://aipower.org/support/', label: 'Support', position: 'left'},
          {to: 'https://aipower.org/contact/', label: 'Contact', position: 'right'},
          {to: 'https://users.freemius.com', label: 'Sign In', position: 'right'},
          {
            href: 'https://github.com/aipowerorg/aipowerorg.github.io',
            label: 'GitHub',
            position: 'right',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/3GWp77JEM7',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/sengpt',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/aipowerorg/aipowerorg.github.io/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI Power`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
