import React from 'react'; 
import Image from './images/yasmin.jpeg'

import './TweetBox.css'; 
import Post from './Post'

import { Avatar, Button } from '@material-ui/core'

const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={Image} />
                    <input placeholder="What's happening" type="text"/> 
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional: Enter Image URL" type="text"/>
                <Button variant="outlined" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
        
    )
}

export default TweetBox;