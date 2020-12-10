import React, { useState } from 'react'; 
import Image from './images/yasmin.jpeg'

import './TweetBox.css'; 
import Post from './Post'

import { Avatar, Button } from '@material-ui/core'

const TweetBox = () => {
    const [ tweetMessage, setTweetMessage ] = useState(''); 
    const [ tweetImage, setTweetImage ] = useState(''); 

    console.log(tweetMessage, 'tweetMessage');
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={Image} />
                    <input value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)} placeholder="What's happening" type="text"/> 
                </div>
                <input value={tweetImage} onChange={e => e.target.value} className="tweetBox__imageInput" placeholder="Optional: Enter Image URL" type="text"/>
                <Button variant="outlined" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
        
    )
}

export default TweetBox;