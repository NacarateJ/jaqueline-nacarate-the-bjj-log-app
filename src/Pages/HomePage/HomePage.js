import "./HomePage.scss";
import React from "react";
// import React, { useState } from "react";
import HeroVid from "../../Components/HeroVid/HeroVid";
import VideoGallery from "../../Components/VideoGallery/VideoGallery";
import UserProfile from "../../Components/UserProfile/UserProfile";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// render components here

const BACK_END = process.env.REACT_APP_BACKEND_URL;

const HomePage = () => {
  // const [heroVideo, setHeroVideo] = useState({});
  // const [galleryVideos, setGalleryVideos] = useState([]);

  return (
    <section className="home">
      <div className="profile">
        <UserProfile />
      </div>

      <div className="videos">
        <HeroVid />
        <VideoGallery />
      </div>
    </section>
  );
};

export default HomePage;
