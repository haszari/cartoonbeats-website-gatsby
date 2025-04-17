import * as React from "react"

import "./GenreTag.scss"


export default function GenreTagWithCount({ tagText, tagCount }) {
  const popularity = tagCount > 0 ? Math.log(tagCount) : 0;
  const style = {
    fontSize: 0.5 * (popularity + 1) + 'em',
  };

  return (
    <div className="GenreTag" style={style}>
      {tagText}
      <span className="GenreTag-count">{tagCount > 1 ? tagCount : ''}</span>
    </div>
  );
}
