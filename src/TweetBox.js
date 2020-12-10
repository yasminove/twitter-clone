import React, { useState } from 'react'; 
import Image from './images/yasmin.jpeg'

import './TweetBox.css'; 
import Post from './Post'
import db from './firebase'

import { Avatar, Button } from '@material-ui/core'


 
const TweetBox = () => {
    const [ tweetMessage, setTweetMessage ] = useState(''); 
    const [ tweetImage, setTweetImage ] = useState(''); 

    console.log(tweetMessage, 'tweetMessage');
    console.log(tweetImage, 'tweetImage');
    const sendTweet = e => {
        e.preventDefault(); 
        db.collection('posts').add({
            displayName: 'Yasmin Hillis',
            username : 'yasminhillis',
            verified: true,
            image: tweetImage,
            avatar: 'https://avatars0.githubusercontent.com/u/30685524?s=460&u=fb45f5dc18c7fc8537141e118f0bedb2c5af4348&v=4',
            text: tweetMessage
        })
        setTweetMessage("");
        setTweetImage("")
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={Image} />
                    <input value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)} placeholder="What's happening" type="text"/> 
                </div>
                <input value={tweetImage} onChange={e => setTweetImage(e.target.value)} className="tweetBox__imageInput" placeholder="Optional: Enter Image URL" type="text"/>
                <Button type="submit" onClick={sendTweet} variant="outlined" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
        
    )
}

export default TweetBox;