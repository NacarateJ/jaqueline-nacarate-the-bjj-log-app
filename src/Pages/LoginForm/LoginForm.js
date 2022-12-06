import "./LoginForm.scss";
import React from "react";
import Image from "../../Assets/Images/timothy-eberly-7MRajrPiTqw-unsplash.jpg";

const LoginForm = () => {
  return (
    <div className="login">
      <div className="login__image">
        {/* <img
          className="login__image-large"
          src={Image}
          alt="Black and white photo of 2 men in a Jiu-Jitsu fight"
        /> */}
      <div className="login__form-container">
        <form className="login__form">
          <h1 className="login__text">Log In</h1>
          <label className="login__label">Username</label>
          <input
          type="text" 
          className="login__box">
          </input>
          <br/>
          <label className="login__label">Password</label>
          <input 
          type="password" 
          className="login__box">
          </input>
          <br/>
           <input
            className="login__btn"
            type="submit"
            value="Login"
          ></input>
        </form>
      </div>
      </div>
    </div>
  );
};

export default LoginForm;
