import "./Header.scss";
import React from "react";
import { GrMenu } from "react-icons/gr";
import Logo from "../../Assets/Logo/TheBjjLogAppLogo4.jpg";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={Logo}></img>
      <div className="header__bars">
        <GrMenu />
      </div>
    </div>
  );
};

export default Header;
