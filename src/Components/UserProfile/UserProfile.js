import "./UserProfile.scss";
import React from "react";
import Photo from "../../Assets/Images/user.jpg"
import Belt from "../../Assets/Images/blueBelt.jpg"

const UserProfile = ({ handleUpload }) => {
  return (
    <div className="users">
      <div className="users__details">
        <div className="users__avatar">
          <img
            className="users__photo"
            src={Photo}
            alt="Woman smiling holding 2 gold medals"
          ></img>
        </div>

        <div className="users__information">
          <p className="users__name">Jaqueline Nacarate</p>
          <img
            className="users__belt"
            src={Belt}
            alt="Jiu Jitsu blue belt"
          ></img>
        </div>
      </div>

      <button className="users__edit-profile">Edit profile</button>

      <div className="user__upload-video-container">
        <button
          className="users__upload-video"
          type="text"
          onClick={handleUpload}
        >
          Upload a new video
        </button>
      </div>
    </div>
  );
};


export default UserProfile;
