import "./VideoGallery.scss";
import { Link } from "react-router-dom";
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
              <form className="gallery__form" autoComplete="off">
                <div className="gallery__collection">
                  <Link to={`/profile/${video.id}`}>
                    <video
                      className="gallery__videos"
                      src={video.video}
                    ></video>
                  </Link>

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
