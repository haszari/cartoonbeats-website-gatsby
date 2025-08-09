import * as React from "react"

import { graphql } from 'gatsby';

import Layout from "../components/layout"

import "./fonts.scss"
import "./index.scss"
import "../fontello/css/fontawesome-musicstores.css"

const HaszariPage = ({data}) => {
  const { socialLinks } = data.artistsYaml;
  const linkDisplayOrder = [
    "bluesky",
    "instagram",
    "youtube",
    "tiktok",
    "facebook",
    "mastodon",
    "bandcamp",
    "apple",
    "spotify",
    "beatport",
    "soundcloud",
  ];
  const links = linkDisplayOrder.map((key) => 
    (<a href={socialLinks[key]}>{key}</a>)
  )

  return (
    <Layout 
      pageTitle="Haszari"
      pageDescription="DJ, producer and sound artisan from Aotearoa"
      noHeader={true}
    >
      <h1>Haszari</h1>
      <p>My name is Rua. This is where I post and share things that inspire me, and stuff I’m thinking about. I DJ and make music as Haszari.</p>
      <p>I’m obsessed with the challenge of playing electronic music live.</p>
      <p>My original music is all about the space between sounds.</p>
      <p>You might classify it as tech-house, dub, ambient or breakbeat.</p>
      <p>When DJing, I weave through minimal, techno, and house – eclectic with a consistent groove. Never too serious to get down.</p>
      { links }
    </Layout>
  )
}

export default HaszariPage

// export const query = graphql`{
//   allReleasesYaml {
//     nodes {
//       catalogueNumber
//     }
//   }
// }`

export const pageQuery = graphql`query {
  artistsYaml(artist: { eq:"Haszari"}) {
    socialLinks {
      bluesky
      instagram
      youtube
      tiktok
      facebook
      mastodon
      gravatar
      twitterx
      tumblr
      threads
      linkedin
      bandcamp
      apple
      spotify
      beatport
      soundcloud
      mixcloud
    }
  }
}
`