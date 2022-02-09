/*
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `At Home Middle School`,
    titleTemplate: `At Home Middle School`,
    author: {
      name: `Melissa Brown`,
      summary: `SimpleDzn web development.`,
    },
    description: `At Home Middle School offers free online education for students in grades 6-8 with classes in math, language arts, social studies, science, Spanish, coding, and chess.  The site is always free to use and there is nothing to buy.  There are no fees, ads, affiliate links, or subscriptions. At Home Middle School pulls together resources from sites like TedEd, CK-12, Khan Academy and Crash Course, and organizes it into 180 daily homeschool lessons.  `,
    url: `https://athomemiddleschool.com`,
    logo: `/logo.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-css-customs`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: .1, // Percentage of an element's area that needs to be visible to launch animation}
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/content/events/`,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Event`, // a fixed string
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/content/articles/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1080,
              quality: 100,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `At Home Middle School`,
        short_name: `AtHomeMiddleSchool`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
