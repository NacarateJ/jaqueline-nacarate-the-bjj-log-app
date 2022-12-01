import "./HomePage.scss";
import HeroImg from "../../Components/HeroImg/HeroImg";
import LoginForm from "../../Components/LoginForm/LoginForm";
import React, { useState } from "react";


const HomePage = () => {

    return (
      <section className="container">
      
          {/* <HeroImg handleLoginClick={handleLoginClick} /> */}
       

       
          <LoginForm />
   
      </section>
    );

} 

export default HomePage;