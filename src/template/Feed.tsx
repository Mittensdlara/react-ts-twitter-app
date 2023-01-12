import React from "react";
import Post from "../component/Posts";
import FlipMove from "react-flip-move";
import MainLayout from "./MainLayout";
import TweetBox from '../component/TweetBox'
import "./Feed.css"


const Feed = () => {
  return (
   <MainLayout>
    <TweetBox />
    <div className="feed">  
       <div className="feed__header">
          <h2>Home</h2>
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
  </MainLayout>  
  );
}

export default Feed