import HeroVid from "./VideoGallery.scss";
import React from "react";

const VideoGallery = () => {
    return (
        <section class="gallery">
            
        <div>
          <h1 class="gallery__title"> Video Gallery</h1>
        </div>

        <div class="gallery__collection">
           <video className="gallery__video"></video>
           <video className="gallery__video"></video>
           <video className="gallery__video"></video>
           <video className="gallery__video"></video>
           <video className="gallery__video"></video>
           <video className="gallery__video"></video>
           <video className="gallery__video"></video>
           <video className="gallery__video"></video>
           <video className="gallery__video"></video>
        </div>
      </section>

    )
};

export default VideoGallery;
