import "./HomeLogin.scss";
import React from "react";
import { Link } from "react-router-dom";

const HomeLogin = () => {
  return (
    <div className="form-login">
      <div className="form__container">
        <form className="form__form">
          <h1 className="form__text">Log In</h1>
          <label className="form__label">Username</label>
          <input type="text" className="form__box"></input>
          <br />
          <label className="form__label">Password</label>
          <input type="password" className="form__box"></input>
          <br />
          <Link to="/profile">
            <button className="form__btn" type="submit" value="">
              LOGIN
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default HomeLogin;
