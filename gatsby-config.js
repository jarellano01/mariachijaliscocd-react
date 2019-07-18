/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const theme = {
    fontFamily: "Roboto",
    color: "#212121"
}
module.exports = {
  /* Your site config here */
    siteMetadata: {
        title: 'Mariachi Jalisco'
    },
    plugins: [
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-jss`,
            options: { theme }
        }
    ]
}
