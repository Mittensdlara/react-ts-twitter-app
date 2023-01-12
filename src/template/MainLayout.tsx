import React from 'react';
import Sidebar from "./Sidebar"
import Widgets from './Widgets';
import Feed from './Feed';


function MainLayout(props : any) {
  return (
   <div className={props.class}>
     <Sidebar />
      
      <Feed {...Feed}/>
      <Widgets />
   </div>
    
  )
}


export default MainLayout
