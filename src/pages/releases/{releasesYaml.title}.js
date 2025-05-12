import * as React from "react"


import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"

// import "../fonts.scss"
// import "../index.scss"
import "../../fontello/css/fontawesome-musicstores.css"

const Page = ({data}) => {

  return (
    <Layout siteTitle={data.site.siteMetadata.title}>
      <h1>{data.releasesYaml.title}</h1>
    </Layout>
  )
}

export default Page;

export const query = graphql`query($id: String) {
  site {
    siteMetadata {
      title
    }
  }
  releasesYaml(id: { eq: $id }) {
    id
    catalogueNumber
    artist
    title
    cover
    releaseDate
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
}`;