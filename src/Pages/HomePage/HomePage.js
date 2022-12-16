import "./HomePage.scss";
import React from "react";
import { useState } from "react";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import FormLoginHome from "../../Components/FormLoginHome/FormLoginHome";

const HomePage = () => {
  const [isHeaderShowValid, setIsHeaderShowValid] = useState(true);
  const [isLoginHideValid, setIsLoginHideValid] = useState(false);

  const handleSignIn = (event) => {
    event.preventDefault();
    setIsHeaderShowValid(false);
    setIsLoginHideValid(true);
  };

  return (
    <main className="home">
      <section
        className={`home__header
            ${isHeaderShowValid ? "" : "home__header--hide"} `}
      >
        <HomeHeader handleSignIn={handleSignIn} />
      </section>

      <section
        className={`home__login 
            ${!isLoginHideValid ? "" : "home__login--show"} `}
      >
        <FormLoginHome />
      </section>
    </main>
  );
};

export default HomePage;
