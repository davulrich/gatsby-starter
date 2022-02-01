const path = require(`path`)

// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)

exports.createPages = async (gatsbyUtilities) => {
  // Query our posts from the GraphQL server
  const posts = await getPosts(gatsbyUtilities)

  // If there are no posts in WordPress, don't do anything
  if (!posts.length) return

  // If there are posts, create pages for them
  await createIndividualBlogPostPages({posts, gatsbyUtilities})
}

/**
 * This function creates all the individual blog pages in this site
 */
const createIndividualBlogPostPages = async ({posts, gatsbyUtilities}) =>
  Promise.all(
    posts.map(({previous, post, next}) =>
      gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: post.uri,

        // use the blog post template as the page component
        component: path.resolve(`./src/templates/blog-post.tsx`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: post.id,

          // We also use the next and previous id's to query them and add links!
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      }),
    ),
  )

async function getPosts({graphql, reporter}) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: {fields: [date], order: DESC}) {
        edges {
          previous {
            id
          }

          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          post: node {
            id
            uri
          }

          next {
            id
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors,
    )
    return
  }

  return graphqlResult.data.allWpPost.edges
}
