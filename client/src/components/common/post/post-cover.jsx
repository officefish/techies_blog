import React from 'react'

const PostCover = ({src, alt}) => {
  return (
    <div className="masonry_post_cover">
        <img
        src={src} 
        alt={alt}/>
    </div>
  )
}

export default PostCover