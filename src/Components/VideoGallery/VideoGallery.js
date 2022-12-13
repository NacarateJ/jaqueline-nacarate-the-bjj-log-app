import "./VideoGallery.scss";
import React from "react";

const VideoGallery = ({
  videos,
  handleChange,
}) => {
  return (
    <>
      <h3 className="gallery__title"> VIDEO GALLERY</h3>

      <div className="gallery">
        {videos.map((video) => {
          return (
            <div
              key={video.id}
              onClick={() => {
                handleChange(video);
              }}
            >
              <form
                className="gallery__form"
                autoComplete="off"
              >
                <div className="gallery__collection">
                  <video
                    className="gallery__videos"
                    src={video.video}
                  ></video>
        
                    <textarea
                      className="gallery__info"
                      type="text"
                      name="techniqueName"
                      rows="1"
                      cols="30"
                      defaultValue={video.technique_name}
                    ></textarea>
                </div>
              </form>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VideoGallery;
