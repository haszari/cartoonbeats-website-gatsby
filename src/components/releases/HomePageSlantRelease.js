import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import ListenLinks from "./ListenLinks"

import "./HomePageSlantRelease.scss"


function HomePageSlantRelease({ title, artist, coverImage, listenLinks, linkToPath }) {
  function MaybeLinkToRelease({ children }) {
    if (! linkToPath) {
      return children;
    }
  
    return (
      <Link to={`${linkToPath}`} className="Release-link">
        {children}
      </Link>
    )
  }
  
  return (
    <div className="Release HomePageSlantRelease">
      <div className="Release-slant"></div>
      <div className="Release-content">
          <div className="Release-info">
            <MaybeLinkToRelease> 
              <div className="Release-info-title">
                {title}</div>
            </MaybeLinkToRelease>
            <div className="Release-info-artist">{artist}</div>
            <ListenLinks links={listenLinks} />
          </div>
          <MaybeLinkToRelease>
            <div className="Release-cover">
              { coverImage && <GatsbyImage 
                image={coverImage} 
                alt={title}
              /> }
            </div>
          </MaybeLinkToRelease>
      </div>
    </div>
  )
}

export default HomePageSlantRelease;
