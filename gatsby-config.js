require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: '',
    description: '',
    siteUrl: process.env.SITE_URL,
    image: 'src/assets/images/favicon.png',
    langs: ['en', 'cs'],
    defaultLangKey: 'cs',
  },
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-image`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-MWMVVLR',
        includeInDevelopment: true,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: 'cs',
        useLangKeyLayout: true,
        prefixDefault: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Starter',
        short_name: 'Starter',
        start_url: '/',
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        sitemap: `${process.env.SITE_URL}/sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL,
      },
    },
  ],
}
