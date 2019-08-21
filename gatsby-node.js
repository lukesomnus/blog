/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
//  implement Gatsby’s Node.js APIs to customize and extend default settings affecting the build process
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions
//   // 获取模板
//   const blogPostTemplate = path.resolve(`src/templates/post.js`)

//   const result = await graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `)
//   if (result.errors) {
//     console.log(result.errors)
//     throw new Error("Things broke, see console output above")
//   }

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.frontmatter.path,
//       component: blogPostTemplate,
//       context: {}, // additional data can be passed via context
//     })
//   })
// }

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` }) // 相当于pathname
    //  create additional fields on nodes
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// **Note:** The graphql function call returns a Promise
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}

// const axios = require("axios")

// const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`)

// const getPokemonData = names =>
//   Promise.all(
//     names.map(async name => {
//       const { data: pokemon } = await get(`/pokemon/${name}`)
//       return { ...pokemon }
//     })
//   )
// exports.createPages = async ({ actions: { createPage } }) => {
//   const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"])

//   // Create a page that lists Pokémon.
//   createPage({
//     path: `/poke`,
//     component: require.resolve("./src/templates/all-pokemon.js"),
//     context: { allPokemon },
//   })
// }
