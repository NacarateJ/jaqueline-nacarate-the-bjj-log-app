import "./HomePage.scss";
import React from "react";
import { useState } from "react";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import HomeLogin from "../../Components/HomeLogin/HomeLogin";

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
        <HomeLogin />
      </section>
    </main>
  );
};

export default HomePage;
