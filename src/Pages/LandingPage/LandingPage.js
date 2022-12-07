import "./LandingPage.scss";
import React from "react";
import { useEffect, useState } from "react";
import LandingHeader from "../../Components/LandingHeader/LandingHeader";
import LandingLogin from "../../Components/LandingLogin/LandingLogin";

const LandingPage = () => {
  const [isLandingShowValid, setIsLandingShowValid] = useState(true);
  const [isLoginHideValid, setIsLoginHideValid] = useState(false);

  const handleSignIn = (event) => {
    event.preventDefault();
    setIsLandingShowValid(false);
    setIsLoginHideValid(true);
  };

  return (
    <main className="landing">
      <section
        className={`landing__header
            ${isLandingShowValid ? "" : "landing__header--hide"} `}
      >
        <LandingHeader handleSignIn={handleSignIn} />
      </section>

      <section
        className={`landing__login 
            ${!isLoginHideValid ? "" : "landing__login--show"} `}
      >
        <LandingLogin />
      </section>
    </main>
  );
};

export default LandingPage;
