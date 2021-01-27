const { createFilePath } = require(`gatsby-source-filesystem`)

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
}
