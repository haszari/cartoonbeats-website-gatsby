import * as React from "react"


import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import ReleaseList from '../components/releases';

import "./fonts.scss"
import "./index.scss"
import "../fontello/css/fontawesome-musicstores.css"

const MainPage = ({data}) => {
  const imageFiles = data.allFile.nodes;

  const releasesWithImages = data.allReleasesYaml.nodes
    .sort((a, b) => (b.catalogueNumber.localeCompare(a.catalogueNumber)))
    .map(releaseInfo => {
      const imageNode = imageFiles.find(
        img => img.relativePath === releaseInfo.cover
      );
      const image = getImage(imageNode);

      return { ...releaseInfo, image };
    });

  return (
    <Layout siteTitle={data.site.siteMetadata.title}>
      <ReleaseList
        releases={releasesWithImages}
      />
    </Layout>
  )
}

export default MainPage

export const Head = () => <title>Cartoon Beats Reality</title>


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
        gatsbyImageData(width: 400, placeholder: BLURRED)
      }
    }
  }
}`;

