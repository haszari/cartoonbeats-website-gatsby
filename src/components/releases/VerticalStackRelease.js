import * as React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import ListenIcons from "./ListenIcons"
import ListenButtons from "./ListenButtons"

import "./VerticalStackRelease.scss"


function VerticalStackRelease({ title, artist, coverImage, listenLinks, blurb }) {
  return (
    <div className="Release VerticalStackRelease">
      <div className="Release-content">
        <div className="Release-info">
          <div className="Release-info-title">{title}</div>
          <div className="Release-info-artist">{artist}</div>
          <ListenIcons links={listenLinks} />
        </div>
        <div className="Release-cover">
          { coverImage && <GatsbyImage 
            image={coverImage} 
            alt={title}
            /> }
        </div>
        <ListenButtons links={listenLinks} />
        {blurb && (<div className="Release-blurb">{blurb}</div>)}
      </div>
    </div>
  )
}

export default VerticalStackRelease;
