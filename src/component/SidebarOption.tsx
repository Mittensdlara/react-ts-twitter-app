import React from "react";

// import "./SidebarOption.css";



function SidebarOption({ Icon, text, active } : { Icon: any, text: any, active: any}) {
  return (
    <div className={`text-center flex cursor-pointer hover:bg-[#e8f5fe] hover:text-twitter-color hover:rounded-3xl ${active && "color-twitter-color"}`}>
      <Icon className="m-1"/>
      <h2 className="font-semibold mx-8 mb-5 ">{text}</h2>
    </div>
  );
}

export default SidebarOption;
