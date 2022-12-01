import "./LoginForm.scss";
import React from "react";
import Image from "../../Assets/Images/timothy-eberly-7MRajrPiTqw-unsplash.jpg";

const LoginForm = () => {
  return (
    <div className="login">
      <div>
        <img
          className="login__image"
          src={Image}
          alt="Black and white photo of 2 men in a Jiu-Jitsu fight"
        />
      </div>
      <div className="login__form-container">
        <form className="login__form">
          <h1 className="login__text">Log In</h1>
          <label className="login__label">Username</label>
          <input type="text" name="username" className="login__box" />
          <br/>
          <label className="login__label">Password</label>
          <input type="password" name="password" className="login__box" />
          <br/>
          <input type="submit" name="LOGIN" className="login__btn" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
