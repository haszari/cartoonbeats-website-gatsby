import React from "react"

import { StaticImage } from "gatsby-plugin-image";

export default function Layout({ siteTitle, children }) {
  return (
    <div>
      <div className="Header">
        <StaticImage
          className="SiteLogo"
          src="../../images/site-logo.png"
          alt="site logo"
        />
        <div className="SiteTitle">{siteTitle}</div>
      </div>
      <div className="PageContent">
        {children}
      </div>
      {/* Footer soon? */}
    </div>
  )
}