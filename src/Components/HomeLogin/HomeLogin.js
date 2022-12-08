import "./HomeLogin.scss";
import React from "react";
import { Link } from "react-router-dom";

const HomeLogin = () => {
  return (
    <div className="login">
      <div className="login__form-container">
        <form className="login__form">
          <h1 className="login__text">Log In</h1>
          <label className="login__label">Username</label>
          <input type="text" className="login__box"></input>
          <br />
          <label className="login__label">Password</label>
          <input type="password" className="login__box"></input>
          <br />
          <Link to="/profile">
            <button className="login__btn" type="submit" value="">
              LOGIN
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default HomeLogin;
