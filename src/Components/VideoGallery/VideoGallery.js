import "./VideoGallery.scss";
import React from "react";

const VideoGallery = () => {
  return (
    <section className="gallery">
      <div>
        <h3 className="gallery__title"> VIDEO GALLERY</h3>
      </div>

      <div className="gallery__wrapper">
        <div className="gallery__video-wrapper">
          <video className="gallery__video"></video>
        </div>

        <div className="gallery__text-wrapper">
          <p className="gallery__text"></p>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
