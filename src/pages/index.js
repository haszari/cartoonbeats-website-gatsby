import * as React from "react"


import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image"

import ReleaseList from '../patterns/ReleaseList';

import "./index.scss"

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
    <main>
      <ReleaseList
        releases={releasesWithImages}
      />
    </main>
  )
}

export default MainPage

export const Head = () => <title>Cartoon Beats Reality</title>


export const query = graphql`{
  allReleasesYaml {
    nodes {
      id
      catalogueNumber
      artist
      title
      cover
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

