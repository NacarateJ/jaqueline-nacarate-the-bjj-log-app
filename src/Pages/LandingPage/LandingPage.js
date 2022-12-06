import "./LandingPage.scss";
import React from "react";
// import Image from "../../Assets/Images/timothy-eberly-7MRajrPiTqw-unsplash.jpg";

const LandingPage = () => {
    
    return (
      <div className="landing">
        <div className="landing__img">
          <div className="landing__text">
            {/* <img
          className="hero__img"
          src={Image}
          alt="Black and white photo of 2 men in a Jiu-Jitsu fight"
        ></img> */}
            <h1 className="landing__caption">
              Keep track of your training to level up your game.
            </h1>
            <button className="landing__button">
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
}

export default LandingPage;