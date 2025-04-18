import * as React from "react"

import "./ListenLinks.scss"

function ListenLinks({ links }) {
  let listenElements = [];
  
  if (links.spotify) {
    listenElements.push( 
      (<a key="spotify" href={links.spotify}><span className="icon-spotify"></span></a>)
    );
  }
  if (links.apple) {
    listenElements.push( 
      (<a key="apple" href={links.apple}><span className="icon-apple"></span></a>)
    );
  }
  if (links.amazon) {
    listenElements.push( 
      (<a key="amazon" href={links.amazon}><span className="icon-amazon"></span></a>)
    );
  }
  
  // let appleMusic = links.appleMusic ? 
  //    (<a key="appleMusic" href={links.appleMusic}><span className="icon-apple"></span></a>) : undefined;
  // let googlePlay = links.googlePlay ? 
  //    (<a key="googlePlay" href={links.googlePlay}><span className="icon-google"></span></a>) : undefined;
  // let spotify = links.spotify ? 
  //    (<a key="spotify" href={links.spotify}><span className="icon-spotify"></span></a>) : undefined;
  
  // if (listenElements.length < 1) {
  //   listenElements.push(('out soon'));
  // }
  
  return (
    <div className="ListenLinks">
      {listenElements}
    </div>
  );
}

export default ListenLinks;