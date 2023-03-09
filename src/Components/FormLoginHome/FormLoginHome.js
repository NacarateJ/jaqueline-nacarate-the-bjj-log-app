import "../../Styles/FormsLoginAdd.scss";
import React from "react";
import { Link } from "react-router-dom";

const FormLoginHome = () => {
  return (
    <>
        <form className="form">
          <h1 className="form__text">Log In</h1>
          <label className="form__label">Username</label>
          <input type="text" className="form__box"></input>
          <br />
          <label className="form__label">Password</label>
          <input type="password" className="form__box"></input>
          <br />
          <Link to={"/profile/bdc6bb69-e09c-498d-8abd-be2792504d00"}>
            <button className="form__btn" type="submit" value="">
              LOGIN
            </button>
          </Link>
        </form>
    </>
  );
};

export default FormLoginHome;
