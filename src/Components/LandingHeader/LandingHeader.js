import "./LandingHeader.scss";
import React from "react";


const LandingHeader = ({ handleSignIn }) => {
  return (
    <div className="landing-header">
      <h1 className="landing-header__caption">
        Keep track of your training to level up your game.
      </h1>
      <button className="landing-header__button" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
};

export default LandingHeader;