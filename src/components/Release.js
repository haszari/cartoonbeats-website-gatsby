import * as React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import "./Release.scss"


function Release({ title, artist, coverImage }) {
  return (
    <div className="Release">
      <div className="Release-info">
        <div className="Release-info-title">{title}</div>
        <div className="Release-info-artist">{artist}</div>
      </div>
      <div className="Release-cover">
        { coverImage && <GatsbyImage image={coverImage} /> }
      </div>
    </div>
  )
}

export default Release;
