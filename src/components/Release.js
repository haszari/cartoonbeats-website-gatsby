import * as React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import ListenLinks from "./ListenLinks"

import "./Release.scss"


function Release({ title, artist, coverImage, listenLinks }) {
  return (
    <div className="Release">
      <div className="Release-info">
        <div className="Release-info-title">{title}</div>
        <div className="Release-info-artist">{artist}</div>
        <ListenLinks links={listenLinks} />
      </div>
      <div className="Release-cover">
        { coverImage && <GatsbyImage image={coverImage} alt={title}/> }
      </div>
    </div>
  )
}

export default Release;
