import React from 'react'
import PostCategories from './post-categories'
import PostCover from './post-cover'
import PostDetails from './post-details'
import PostHeading from './post-heading'

const Post = ({post, index, tagsOnTop}) => {
  return (
    <div className="masonry_post_wrapper">
      <div className="masonry_post_liner">
        <PostCover
            src={`//localhost:8000/${post.media_url}`} 
            alt={post.media_url}/>
        <PostCategories />
      <hr />
      <PostHeading title="Ho to Yawn in 7 Days" />
      <hr />
      <p className='masonry_post_summary'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni
        fugiat, odit incidunt necessitatibus aut nesciunt exercitationem aliquam
        id voluptatibus quisquam maiores officia sit amet accusantium aliquid
        quo obcaecati quasi.
      </p>
      <hr />
      <PostDetails author={"Fajrian Aidil Pratama"} authorId={1} dateTime={'28 Sep 2020'} minutesToRead={9} />
    </div>
  </div>
 )
}

export default Post