const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
    // As the logic for creating slugs from file names can get tricky,
    // the gatsby-source-filesystem plugin ships with a function for creating slugs
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    console.log(`Created slug: ${slug}`)
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
    // {
    //   allMarkdownRemark {
    //   edges {
    //     node {
    //       fields {
    //         slug
    //       }
    //     }
    //   }
    // }
    // }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
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

  console.log(JSON.stringify(result, null, 4))

  // If you want to see all pages, just access a page that does not exist and
  // Gatsby will show you available pages for you
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug
      }
    })
  })
}
