import "./VideoGallery.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";


const VideoGallery = ({ searchResults, handleChange }) => {
  // new array to keep the elements returned from each video in the searchResults array
  const results = searchResults.map((video) => {
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
              <video className="gallery__videos" src={video.video}></video>
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
  });

  // if there are matching videos in searchResults, the content variable will be set to the results array.
  const content = results?.length ? (
    results
  ) : (
    // If there are no matching videos, the content variable will be set to the JSX markup with the "No Matching Videos" message.
    <article>
      <p>No Matching Videos</p>
    </article>
  );

  return (
    <>
      <h3 className="gallery__title"> VIDEO GALLERY</h3>

      <div className="gallery">{content}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
  };
};

export default connect(mapStateToProps)(VideoGallery);





