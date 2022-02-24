/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // pathPrefix: "/",
  siteMetadata: {
    title: `PJP Economics`,
    description: `PJP Economics - Consulting, Economic Impact Analysis, Project Management and Program Evaluation.`,
    url: `https://www.pjpeconomics.com`, // No trailing slash allowed!
    // image: "/snape.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
    // twitterUsername: "@occlumency",
  },
  plugins: [`gatsby-plugin-react-helmet`],
}
