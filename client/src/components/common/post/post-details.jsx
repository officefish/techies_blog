import React from 'react'

const PostDetails = ({author, authorId, dateTime, minutesToRead}) => {
  return (
    <section className="masonry_post_metadata">
        <div className="masonry_post_metadata_wrapper">
          <div className="masonry_post_metadata_liner">
            <img
              src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"
              alt="Avatar"
            />
            <div className='masonry_post_avatar_container'>
              <a href="" >
                {author}
              </a>
              <time className='masonry_post_time' dateTime={dateTime}>{dateTime}</time>
            </div>
          </div>
          <p>{minutesToRead} minutes read</p>
        </div>
    </section>
  )
}

export default PostDetails