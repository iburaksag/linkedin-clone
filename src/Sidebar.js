import React from 'react'
import { Avatar } from "@mui/material";
import imgLights from "./images/imgLights.jpg";
import "./Sidebar.css"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Sidebar() {
    const user = useSelector(selectUser); //get user from redux store

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
        <Avatar src={user.photoUrl} className="sidebar__avatar"> 
        {user.displayName[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
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