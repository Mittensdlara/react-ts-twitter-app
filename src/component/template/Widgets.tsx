import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets flex-1">
      <div className="widgets__input flex items-center max-w-xs bg-twitter-background p-10
        rounded-xl mt-10 ml-20
      ">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" className="bg-twitter-background" />
      </div>

      <div className="widgets__widgetContainer mt-15 ml-20 p-20 bg">
        <h2 className="font-bold text-xl">You might like</h2>
        
        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

       
      </div>
    </div>
  );
}

export default Widgets;
