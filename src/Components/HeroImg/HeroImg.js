import "./HeroImg.scss";
import React from "react";
// import Image from "../../Assets/Images/timothy-eberly-7MRajrPiTqw-unsplash.jpg";

const HeroImg = ({handleLoginClick}) => {
    const handleClick = () => {
        handleLoginClick()
    }
    
    return (
      <div className="hero">
        <div className="hero__img">
          <div className="hero__text">
            {/* <img
          className="hero__img"
          src={Image}
          alt="Black and white photo of 2 men in a Jiu-Jitsu fight"
        ></img> */}
            <h1 className="hero__caption">
              Keep track of your training to level up your game.
            </h1>
            <button className="hero__button" onClick={handleClick}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
}

export default HeroImg;