import "./HeroVid.scss";
import React from "react";

const HeroVid = ({ video }) => {
  return (
    <main className="hero">
            <div className="hero__video-wrapper">
              <video className="hero__video" src={video.video} controls></video>
            </div>

            <h3 className="hero__caption">{video.technique_name}</h3>
            <p className="hero__description">{video.description}</p>
    </main>
  );
};

export default HeroVid;
