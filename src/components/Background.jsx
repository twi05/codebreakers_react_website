import React from "react";
import bgvideo from "./bgVideo.mp4";
import "./background.css";

function Background() {
  return (
    <>
    
    <div className="main-vid">
      <div className="bg-video">
        <video src={bgvideo} autoPlay type="video/mp4"></video>
      </div>
    </div>
    <div className="gradient-bg">
      

    </div></>
  );
}
export default Background;