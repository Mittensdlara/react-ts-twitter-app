import React from "react";
import Post from "../Posts";
import FlipMove from "react-flip-move";

import TweetBox from '../TweetBox'



const Feed = () => {
  return (
   
    
    <div className="feed max-w-lg"> 
    <div className="border-slate-500 ">
      <h1 className="font-bold">Bobur</h1>
      <span className="antialiased ">1,070 Tweets</span>
    </div> 
      <TweetBox />
       <div className="feed__header sticky t-0 bg-twitter-background rounded  ">
          <h2 className="font-bold">Home</h2>
       </div>

     

  <FlipMove>
      <Post
        key="1"
        displayName="del"
        username= "poo"
        verified="{post.verified}"
        text="Hi this is me "
        avatar="{post.avatar}"
        image="{post.image}"
      />
    
    </FlipMove>
    </div>

  );
}

export default Feed