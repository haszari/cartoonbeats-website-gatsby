import React from "react"
import classnames from 'classnames';

import { StaticImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../seo"

function HeaderMenu({ siteTitle, smallHeader = false }) {
  const classes = classnames([
    'Header-menuBar',
    smallHeader ? 'Header-menuBar-small' : null
  ]);
  
  return (
    <>
      <div className={classes}>
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
    </>
  )
}

function Header({ siteTitle, smallHeader = false }) {
  const headerClasses = "Header"
  return (
    <div className={headerClasses}>
      <HeaderMenu siteTitle={siteTitle} smallHeader={smallHeader} />
    </div>
  )
}

function FullBleedHeader({ siteTitle, headerImage = null }) {
  const headerClasses = "Header Header-fullBleedImage"
  return (
    <div className={headerClasses}>
      {headerImage && (<GatsbyImage image={headerImage} className="FullBleedImage" />)}
      <HeaderMenu siteTitle={siteTitle} smallHeader={true} />
    </div>
  )
}

export default function Layout({ 
  children, 
  smallHeader = false, 
  headerImage = null,
  pageTitle,
  pageDescription 
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const siteTitle = site.siteMetadata.title
  
  const header = headerImage ? 
    ( <FullBleedHeader siteTitle={siteTitle} headerImage={headerImage} /> ) :
    ( <Header siteTitle={siteTitle} smallHeader={smallHeader} /> );

  return (
    <>
      <Seo title={pageTitle} description={pageDescription} />
      {header}
      <div className="PageContent">
        {children}
      </div>
      <div className="Footer">
        <Link to="/">
          <StaticImage
            className="SiteLogo"
            src="../../images/site-logo.png"
            placeholder="none"
            alt="mixer logo"
          />
        </Link>
        <div className="Menu">
          <Link to="/blog">Blog</Link>
          <Link to="/">Music</Link>
        </div>
      </div>
    </>
  )
}