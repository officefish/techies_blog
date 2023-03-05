import React from 'react'
import Post from './post'

const PostMasonry = ({posts, columns, tagsOnTop}) => /**/ {

    return (
        <section className="masonry">
        {posts.map((post, index) => 
            <Post {...{post, index, tagsOnTop, key: index} } />
        )}
        </section>
    )
}
export default PostMasonry


