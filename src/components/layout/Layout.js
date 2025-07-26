import React from "react"
import classnames from 'classnames';

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";


export default function Layout({ siteTitle, children, smallHeader = false }) {
  const headerClasses = classnames([
    'Header',
    smallHeader ? 'Header-small' : null,
  ]);

  return (
    <div>
      <div className={headerClasses}>
        <Link to="/">
          <StaticImage
            className="SiteLogo"
            src="../../images/site-logo.png"
            placeholder="none"
            alt="mixer logo"
          />
        </Link>
        <Link to="/">
          <div className="SiteTitle">{siteTitle}</div>
        </Link>
      </div>
      <div className="PageContent">
        {children}
      </div>
      <div className="Footer">
        {/* <div className="Footer-slant"></div> */}
        <Link to="/">
          <StaticImage
            className="SiteLogo"
            src="../../images/site-logo.png"
            placeholder="none"
            alt="mixer logo"
          />
        </Link>
        <div className="Menu">
          <Link to="/">Music</Link>
          <Link to="/2025/twisted-frequency-moments/">Blog</Link>
        </div>
      </div>
    </div>
  )
}