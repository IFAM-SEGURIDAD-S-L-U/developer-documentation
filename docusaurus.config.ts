import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IFAM',
  tagline: 'Líder en Seguridad',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-ifam-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IFAM-SEGURIDAD-S-L-U', // Usually your GitHub org/user name.
  projectName: 'CLOUD', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/IFAM-SEGURIDAD-S-L-U/CLOUD/tree/main/packages/create-docusaurus/templates/shared/',
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
            'https://github.com/IFAM-SEGURIDAD-S-L-U/CLOUD/tree/main/packages/create-docusaurus/templates/shared/',
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

  themeConfig: {
    // Replace with your project's social card
    image: 'img/ifam.svg',
    navbar: {
      logo: {
        alt: 'IFAM Logo',
        src: 'img/ifam.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          type: 'dropdown',
          label: 'Examples',
          position: 'left',
          items: [
            {
              label: 'Todo.md',
              to: '/docs/examples/todo',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'How-to',
          position: 'left',
          items: [
            {
              label: 'Todo.md',
              to: '/docs/how-to/todo',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Reference',
          position: 'left',
          items: [
            {
              label: 'API Desarrollador.md',
              to: '/docs/reference/developer-api',
            },
            {
              label: 'Todo.md',
              to: '/docs/reference/todo',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Tutorial',
          position: 'left',
          items: [
            {
              label: 'Todo.md',
              to: '/docs/tutorial/todo',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Tutorial Intro',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Empresa',
          items: [
            {
              label: 'Acerca de IFAM',
              href: 'https://ifam.es',
            },
            {
              label: 'Contacto',
              href: 'https://ifam.es/contacto',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/IFAM-SEGURIDAD-S-L-U/CLOUD',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IFAM Seguridad S.L.U.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;