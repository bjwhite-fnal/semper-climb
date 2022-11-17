module.exports = {
  siteMetadata: {
    title: `semper-climb`,
    siteUrl: `https://www.semperclimb.com`
  },
  plugins: ["gatsby-plugin-sharp", "gatsby-plugin-image", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};
