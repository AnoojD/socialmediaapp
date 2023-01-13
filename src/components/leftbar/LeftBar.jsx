import React from 'react'
import "./leftbar.scss"
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Games from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div class = "leftBar">
        <div className = "container">
            <div className = "menu">
                <div className = "user">
                    <img src= {currentUser.profilePic}/>
                    <span>{currentUser.name}</span>
                </div>
                <div className="item">
                    <img src={Friends} alt="" />
                    <span> Friends </span>
                </div>
                <div className="item">
                    <img src={Groups} alt="" />
                    <span> Groups </span>
                </div>
                <div className="item">
                    <img src={Memories} alt="" />
                    <span> Memories </span>
                </div>
            </div>
            <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Games} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>

        </div>
    </div>
  )
}

export default LeftBar