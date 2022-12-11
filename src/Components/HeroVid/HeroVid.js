import "./HeroVid.scss";
import React from "react";

const HeroVid = ({ videos }) => {
    return (
      <main className="hero">
        <div className="hero__video-wrapper">
          <video className="hero__video" src={videos.videoId} controls></video>
        </div>
        <h3 className="hero__caption"></h3>
        <p className="hero__description"></p>
      </main>
    );
};

export default HeroVid;
