import React from 'react'; 
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
const Post = ({ 
    displayName, 
    username, 
    timestamp, 
    verified, 
    text, 
    image, 
    avatar
 }) => {
    return (
        <div className="post">
            <div className="post__avatar">
               <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
            </div>

            <div className="post__header">
                <div className="post__headerText">
                    <h3>Yasmin Hillis <span>
                        <VerifiedUserIcon /> @yasminhillis
                    </span></h3>
                    
                </div>
            </div>

            <div className="post_headerDescription">
                <p>I challenge you to build a twitte clone</p>
            </div>
        </div>
    )
}

export default Post;