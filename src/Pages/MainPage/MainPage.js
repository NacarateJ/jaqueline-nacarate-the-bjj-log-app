import "./MainPage.scss";
import React from "react";
// import Image from "../../Assets/Images/timothy-eberly-7MRajrPiTqw-unsplash.jpg";

const MainPage = () => {
    
    return (
      <div className="main">
        <div className="main__img">
          <div className="main__text">
            {/* <img
          className="hero__img"
          src={Image}
          alt="Black and white photo of 2 men in a Jiu-Jitsu fight"
        ></img> */}
            <h1 className="main__caption">
              Keep track of your training to level up your game.
            </h1>
            <button className="main__button">
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
}

export default MainPage;