import "./NavBar.scss";
import React from "react";
import { GrMenu } from "react-icons/gr";
import Logo from "../../Assets/Logo/TheBjjLogAppLogo4.jpg";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={Logo}></img>
      <div className="navbar__bars">
        <GrMenu />
      </div>
    </div>
  );
};

export default NavBar;
