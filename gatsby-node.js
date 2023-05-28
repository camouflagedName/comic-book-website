/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const comicBooksAlt = [
  {
      title: "Odyssey of Izarynne Vol 0",
      short: "vol0",
      imgSrc: "vol0.png",
      price: 14.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
      title: "Odyssey of Izarynne Vol 1",
      short: "vol1",
      imgSrc: "vol1.png",
      price: 14.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
      title: "Odyssey of Izarynne Vol 2",
      short: "vol2",
      imgSrc: "vol1.png",
      price: 14.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }
];

const path = require('path');
const comicBooks = require(".\src\comicBooks.ts")


/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  comicBooks.forEach(comic => {
    createPage({
      path: `/comics/${comic.short}`,
      component: path.resolve('./src/templates/productPage.tsx'),
      context: {comic}
    })

  })

}
