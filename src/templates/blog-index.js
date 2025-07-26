import * as React from "react"
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import "../pages/fonts.scss"
import "../pages/index.scss"

const BlogIndexTemplate = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  return (
    <Layout siteTitle={data.site.siteMetadata.title}>
      <div className="BlogGrid">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const featuredImg = getImage(post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData) || null

          return (
            <div className="BlogGrid-postCard" key={post.fields.slug}>
              <Link to={`/blog${post.fields.slug}`} itemProp="url">
                {featuredImg ? (<GatsbyImage image={featuredImg} />) : <div className="PostGrid-featuredImage-placeholder"/>}
                <h4><span itemProp="headline">{title}</span></h4>
              </Link>
            </div>
          )
        })}
      </div>
      
      {/* Pagination Navigation */}
      {numPages > 1 && (
        <nav className="pagination">
          <ul style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
            margin: '2rem 0',
            gap: '1rem'
          }}>
            {!isFirst && (
              <li>
                <Link to={prevPage} rel="prev">
                  ← Previous
                </Link>
              </li>
            )}
            
            {Array.from({ length: numPages }, (_, i) => (
              <li key={`pagination-number${i + 1}`}>
                <Link
                  to={i === 0 ? "/blog" : `/blog/p/${i + 1}`}
                  style={{
                    padding: '0.5rem 1rem',
                    textDecoration: 'none',
                    border: '1px solid #ccc',
                    backgroundColor: i + 1 === currentPage ? '#007acc' : 'transparent',
                    color: i + 1 === currentPage ? 'white' : 'inherit'
                  }}
                >
                  {i + 1}
                </Link>
              </li>
            ))}
            
            {!isLast && (
              <li>
                <Link to={nextPage} rel="next">
                  Next →
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </Layout>
  )
}

export default BlogIndexTemplate

export const Head = ({ pageContext }) => {
  const { currentPage } = pageContext
  const title = currentPage === 1 ? "Blog | Cartoon Beats Reality" : `Blog - Page ${currentPage} | Cartoon Beats Reality`
  return <title>{title}</title>
}

export const query = graphql`
  query BlogIndexQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 280, height: 280)
            }
          }
        }
      }
    }
  }
`
