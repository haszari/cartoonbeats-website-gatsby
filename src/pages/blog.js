import * as React from "react"


import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import "./fonts.scss"
import "./index.scss"

const BlogIndexPage = ({data}) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout siteTitle={data.site.siteMetadata.title}>
      <div>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const featuredImg = getImage(post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData) || null

          return (
            <div key={post.fields.slug}>
              <Link to={`/blog${post.fields.slug}`} itemProp="url">
                {featuredImg ? (<GatsbyImage image={featuredImg} />) : <div className="PostGrid-featuredImage-placeholder"/>}
                <h2><span itemProp="headline">{title}</span></h2>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndexPage

export const Head = () => <title>Blog | Cartoon Beats Reality</title>


export const query = graphql`{
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
}`;

