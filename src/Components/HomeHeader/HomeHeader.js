import "./HomeHeader.scss";
import React from "react";


const HomeHeader = ({ handleSignIn }) => {
  return (
    <div className="home-header">
      <h1 className="home-header__caption">
        Keep track of your training to level up your game.
      </h1>
      <button className="home-header__button" onClick={handleSignIn}>
        Login
      </button>
    </div>
  );
};

export default HomeHeader;