import HeroVid from "./HeroVid.scss";
import React from "react";

const HeroVid = () => {
    return (
          <main className="hero">
        <div className="hero__video-wrapper">
          <video className="hero__video" poster="#" controls></video>
        </div>
        <h3 className="hero__caption"></h3>
        <p className="hero__description"></p>
      </main>

    )
};

export default HeroVid;
