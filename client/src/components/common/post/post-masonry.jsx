import React from 'react'
import Post from './single-post'

const PostMasonry = ({posts, columns, tagsOnTop}) => /**/ {

    return (
        <section className="masonry_post_container">
            {posts.map((post, index) => 
                <Post {...{post, index, tagsOnTop, key: index} } />
            )}
        </section>
    )
}
export default PostMasonry


