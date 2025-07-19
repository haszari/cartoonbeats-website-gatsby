import * as React from "react"

import HomePageSlantRelease from './HomePageSlantRelease';

import "./ReleaseList.scss"

// releases[]
// artist
// title
// image
function ReleaseList({ releases }) {
  const rows = releases.map(( releaseInfo ) => ( 
    <HomePageSlantRelease
      key={releaseInfo.id}
      coverImage={releaseInfo.image} 
      title={releaseInfo.title}
      artist={releaseInfo.artist}
      listenLinks={releaseInfo.listenLinks}
      linkToPath={releaseInfo.gatsbyPath}
    />
  ));

  return (
    <div className="ReleaseList">
      { rows }
    </div>
  )
}

export default ReleaseList;
