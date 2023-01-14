import React from 'react';
import Sidebar from "./Sidebar"
import Widgets from './Widgets';
import Feed from './Feed';


function MainLayout() {
  return (
   <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-1'>
   <div><Sidebar /></div>  
      <div><Feed /></div> 
      <div><Widgets /></div> 
   </div>
    
  )
}


export default MainLayout
