import React from 'react'

const PostHeading = ({title}) => {
  return (
    <title className="masonry_post_heading_container">
    <a href="#">
      <h2>
        {title}
      </h2>
    </a>
  </title>
  )
}

export default PostHeading