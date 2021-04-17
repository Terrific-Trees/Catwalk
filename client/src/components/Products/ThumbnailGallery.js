import React from 'react';

 var ThumbnailGallery = (props) => {
  return (
    <div className="thumbnail">
      <img src={props.image} width="25" height="50" border="1px" onClick={props.click}/>
    </div>
  )
}

export default ThumbnailGallery;