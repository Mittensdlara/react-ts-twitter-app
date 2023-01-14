import * as React from 'react';
import SidebarOption from "../SidebarOption";
import Home from '@ant-design/icons/HomeOutlined'
import Explore from '@ant-design/icons/WindowsOutlined'
import Notification from  "@ant-design/icons/NotificationOutlined"
import Messages from  "@ant-design/icons/MessageOutlined"
import BookOutlined from  "@ant-design/icons/BookOutlined"
import UnorderedListOutlined from  "@ant-design/icons/UnorderedListOutlined"
import ProfileOutlined from  "@ant-design/icons/ProfileOutlined"
import More from  "@ant-design/icons/MoreOutlined"
import TwitterIcon from "@ant-design/icons/TwitterOutlined"

function Sidebar() {
  return (
    
    <div className=
    'border-solid border-1 border-twitter-background m-5 p-5 max-w-xs'
    >

          <TwitterIcon className='text-twitter-color text-4xl mb-1'/>
     
      <SidebarOption active Icon={Home} text="Home" />
      <SidebarOption active Icon={Explore} text="Explore" /> 
      <SidebarOption active Icon={Notification} text="Notification" /> 
      <SidebarOption active Icon={Messages} text="Messages" /> 
      <SidebarOption active Icon={BookOutlined} text="Bookmarks" /> 
      <SidebarOption active Icon={UnorderedListOutlined } text="Lists" /> 
      <SidebarOption active Icon={ProfileOutlined} text="Profile" /> 
      <SidebarOption active Icon={More} text="More" /> 

      <button className=
      "py-4 my-4 bg-twitter-color rounded-3xl w-full font-bold color"
      >
           Tweet
      </button>
      



    </div>
  )
}

export default Sidebar
