import * as React from "react"


import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { VerticalStackRelease } from "../../components/releases"

import "../../fontello/css/fontawesome-musicstores.css"

const Page = ({data}) => {
  const releaseInfo = data.releasesYaml;
  const imageFiles = data.allFile.nodes;

  // Find the cover image and convert to a Gatsby image.
  // Might want to move this to a utility module (pasted from index page).
  const imageNode = imageFiles.find(
    img => img.relativePath === releaseInfo.cover
  );
  releaseInfo.image = getImage(imageNode);

  return (
    <Layout siteTitle={data.site.siteMetadata.title} smallHeader={true}>
      <VerticalStackRelease
        key={releaseInfo.id}
        coverImage={releaseInfo.image} 
        title={releaseInfo.title}
        artist={releaseInfo.artist}
        listenLinks={releaseInfo.listenLinks}
        blurb={releaseInfo.blurb}
      />
    </Layout>
  )
}

export default Page;

export const Head = ({ data: { releasesYaml: post } }) => {
  return (
    <Seo
      title={`${post.artist} - ${post.title}`}
      description={post.blurb || ''}
    />
  )
}

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
    blurb
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
  # We query ALL images, and then filter to this release's image in component above. 
  # This might be wasteful?
  allFile(filter: {sourceInstanceName: {eq: "images"}}) {
    nodes {
      relativePath
      childImageSharp {
        gatsbyImageData(width: 600, placeholder: BLURRED)
      }
    }
  }
}`;