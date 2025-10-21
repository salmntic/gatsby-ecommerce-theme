module.exports = {
  siteMetadata: {
    title: `Gatsby TÉQOURT Ecommerce Theme`,
    siteUrl: `https://jamm.matter.design`,
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        collectionTypes: [`product`, `article`, `user`],
        queryLimit: 1000,
      },
    },
  ],
};
