import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox'; 
import Post from './Post'
import './Feed.css';
import Image from './images/yasmin.jpeg'
import db from './firebase'

const Feed = () => {

  const [ post, setPost ] = useState([])
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPost(snapshot.docs.map(doc => doc.data())
      )
    })
  }, [])

  console.log(post, 'post');


    return (
      <div className='feed'>
        <div className='feed__header'>
          <h2>Home</h2> 
          </div>
         <TweetBox />
         {
           post.map(post => (
            <Post 
            displayName = {post.displayName}
            username = {post.username}
            verified = {post.verified}
            image= {post.image}
            avatar= {post.avatar}
            text= {post.text}
           />
           ))
         }
        
         <Post 
          displayName = "John Doe"
          username = "johndoe"
          verified = {false}
          text="yasmin hillis joined twitter"
         
         />
        </div>

    );  
};

export default Feed;
