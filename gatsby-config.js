/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://sidwachche.netlify.app',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;
module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl,
    title: "Sid Wachche Portfolio",
    titleTemplate: "%s - by Sid Wachche",
    description:
      "Sid Wachche Portfolio. Siddhaling Wachche.",
    url: "https://sidwachche.netlify.app", // No trailing slash allowed!
    image: "/img/primary.webp", // Path to your image you placed in the 'static' folder
    twitterUsername: "@sidwachche",
  },
  plugins: [
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-advanced-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-preload-fonts",
    // "gatsby-plugin-webpack-bundle-analyzer",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
],
}
