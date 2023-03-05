import React from 'react'
import { Views, Comments, Likes } from '../../../assets/svg'


const PostActivities = () => {
  
    return (
    <div className="masonry_post_activities_container">    
        <div className="masonry_post_activities_item">
            <Views />
            <span>1.5k</span>
        </div>
        <div className="masonry_post_activities_item">
            <Comments />
            <span>4</span>
        </div>
        <div className="masonry_post_activities_item">
            <Likes />
            <span>19</span>
        </div>
       
    </div>)
}

export default PostActivities