import React from 'react'
import { Avatar } from "@mui/material";
import imgLights from "./images/imgLights.jpg";
import "./Sidebar.css"


function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sideebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={imgLights} alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Burak Sag</h2>
        <h4>iburaksag@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,442</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactJs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar