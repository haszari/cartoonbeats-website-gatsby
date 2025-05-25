import React from "react"

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function Layout({ siteTitle, children }) {
  return (
    <div>
      <div className="Header">
        <Link to="/">
          <StaticImage
            className="SiteLogo"
            src="../../images/site-logo.png"
            placeholder="none"
            alt="mixer logo"
          />
        </Link>
          <div className="SiteTitle">{siteTitle}</div>
      </div>
      <div className="PageContent">
        {children}
      </div>
      <div className="Footer">
        <div className="Footer-slant"></div>
      </div>
    </div>
  )
}