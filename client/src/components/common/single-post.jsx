import React from 'react'

const Post = ({post, index, tagsOnTop}) => {
  return (
    <div>
      <img src={`//localhost:8000/${post.media_url}`} alt={post.media_url} />
    </div>
  )
}

export default Post