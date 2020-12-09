import React from 'react'; 
import './TweetBox.css'; 
import { Avatar, Button } from '@material-ui/core'

const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"/>
                    <input placeholder="What's happening" type="text"/>
                    {/* <input placeholder="Enter Image URL" type="text"/> */}
                </div>
                <Button variant="outlined">Tweet</Button>
            </form>
        </div>
        
    )
}

export default TweetBox;