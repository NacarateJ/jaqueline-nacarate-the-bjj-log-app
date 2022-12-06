import "./Header.scss";
import React from "react";
import {  GrMenu } from 'react-icons/gr';

const Header = () => {
    return (
        <div className="header">
        <h1 className="header__title">The BJJ LogApp</h1>
         <div className="header__bars">
          <GrMenu />
        </div>
        </div>
    )
}

export default Header;