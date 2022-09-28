import {Link, graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import {BlogPostByIdQuery} from '../../gatsby-graphql'

import Seo from '../components/SEO'

const BlogPostTemplate = ({previous, next, post}: BlogPostByIdQuery) => {
  const featuredImage = {
    data: post?.featuredImage?.node?.localFile?.childImageSharp
      ?.gatsbyImageData,
    alt: post?.featuredImage?.node?.altText || ``,
  }

  return (
    <>
      <Seo title={post?.title} description={post.excerpt} />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{parse(post.realization.title)}</h1>

          <p>{post.date}</p>

          {/* if we have a featured image for this post let's display it */}
          {featuredImage?.data && (
            <GatsbyImage
              image={featuredImage.data}
              alt={featuredImage.alt}
              style={{marginBottom: 50}}
            />
          )}
        </header>

        {!!post.realization.text && (
          <section itemProp="articleBody">
            {parse(post.realization.text)}
          </section>
        )}

        <hr />
      </article>

      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.uri} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.title)} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: {eq: $id}) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
      realization {
        title
        text
      }
    }
    previous: wpPost(id: {eq: $previousPostId}) {
      uri
      title
    }
    next: wpPost(id: {eq: $nextPostId}) {
      uri
      title
    }
  }
`
