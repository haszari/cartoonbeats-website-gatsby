import * as React from "react"


import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import ReleaseList from '../components/releases';

import "./fonts.scss"
import "./index.scss"
import "../fontello/css/fontawesome-musicstores.css"

const BlogIndexPage = ({data}) => {
  return (
    <Layout siteTitle={data.site.siteMetadata.title}>
      Blog post list coming soon
    </Layout>
  )
}

export default BlogIndexPage

export const Head = () => <title>Cartoon Beats Reality - blog</title>


export const query = graphql`{
  site {
    siteMetadata {
      title
    }
  }
  allReleasesYaml {
    nodes {
      id
      catalogueNumber
      artist
      title
      cover
      releaseDate
      gatsbyPath(filePath: "/releases/{releasesYaml.title}")
      listenLinks {
        bandcamp
        apple
        youtube
        spotify
        amazon
        beatport
        soundcloud
      }
    }
  }
  allFile(filter: {sourceInstanceName: {eq: "images"}}) {
    nodes {
      relativePath
      childImageSharp {
        gatsbyImageData(width: 600, placeholder: BLURRED)
      }
    }
  }
}`;

