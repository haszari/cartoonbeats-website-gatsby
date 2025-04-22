import * as React from "react"

import Release from './Release';

import "./ReleaseList.scss"

// releases[]
// artist
// title
// image
function ReleaseList({ releases }) {
  const rows = releases.map(( releaseInfo ) => ( 
    <Release
      key={releaseInfo.id}
      coverImage={releaseInfo.image} 
      title={releaseInfo.title}
      artist={releaseInfo.artist}
      listenLinks={releaseInfo.listenLinks}
    />
  ));

  return (
    <div className="ReleaseList">
      { rows }
    </div>
  )
}

export default ReleaseList;
