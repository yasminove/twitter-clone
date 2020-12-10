import React from 'react'; 
import './Widgets.css';

import SearchIcon from '@material-ui/icons/Search'

import {  
    TwitterTimelineEmbed, 
    TwitterShareButton, 
    TwitterTweetEmbed
} from 'react-twitter-embed';

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />  
                <input placeholder="Search Twitter" type="text" /> 
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"804413175122706432"}/>
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="HillisYasmin"
                    options={{height: 400}}
                />
                <TwitterShareButton 
                    url={"https://facebook.com/YasminHillis"}
                    options={{text: "yasmin is awesome", via:"HillisYasmin"}}
                />
            </div>
        </div>
       
    )
}

export default Widgets;