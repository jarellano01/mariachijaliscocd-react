/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("regenerator-runtime/runtime")

const theme = {
  fontFamily: "Roboto",
  color: "#212121",
}
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Mariachi Jalisco",
    siteUrl: 'https://mariachijaliscocd.com',
    description: `
        Mariachi Jalisco is a professional musical ensemble formed by young and talented musicians ready to make your next event one of a kind!

        We have a wide variety of music included in our set lists. Ranging from traditional rancheras and sones to modern Latin hits and even the all time favorite “Baby Shark” and Disney’s “Un Poco Loco”. With our wide variety of song choices we’ll be sure to please your guests and make your event an unforgettable experience. 

        You can find us performing at Los Tres Hermanos Restaurant in San Fernando every Friday and Saturday night. We are also available for hire for any type of events before and after our show times at Los Tres Hermanos.

        If you are hiring Mariachi Jalisco for concerts and show events please be sure to ask about our Grupo de Gala (a large group that consists 8-13 musicians). We also have event packages available with fun and bright folklorico dancers and a professional sound system. 

        Please be sure to choose Mariachi Jalisco for your next event. We’ll be sure to bring a fun, cultural and professional experience to your next special gathering. 
        `,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mariachi Jalisco de Carlos Daniel`,
        description: `Mariachi Jalisco de Carlos Daniel Paraguirre. Ready to serve your next event.`,
        short_name: `Mariachi Jalisco CD`,
        start_url: `/`,
        icon: "favicon.png",
        background_color: `black`,
        display: `standalone`,
        theme_color: `black`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-jss`,
      options: { theme },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-144250697-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-robots-txt'
  ],
}
