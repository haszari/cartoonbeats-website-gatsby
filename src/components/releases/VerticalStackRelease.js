import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import ListenLinks from "./ListenLinks"

import "./VerticalStackRelease.scss"


function VerticalStackRelease({ title, artist, coverImage, listenLinks, linkToPath }) {
  return (
    <div className="Release VerticalStackRelease">
      <div className="Release-content">
        <div className="Release-info">
          <div className="Release-info-title">{title}</div>
          <div className="Release-info-artist">{artist}</div>
          <ListenLinks links={listenLinks} />
        </div>
        <div className="Release-cover">
          { coverImage && <GatsbyImage 
            image={coverImage} 
            alt={title}
            /> }
        </div>
      </div>
    </div>
  )
}

export default VerticalStackRelease;
