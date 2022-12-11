import "../HomeLogin/HomeLogin.scss";
import React from "react";
import { Link } from "react-router-dom";

const AddVideo = ({ handleSubmit, handleVideo, users }) => {
  return (
    <div className="form">
      <div className="form__container-add">
        <form
          className="form__form"
          onSubmit={handleSubmit}
          autoComplete="off"
          encType="multipart/form-data"
        >
          <br />
          <h1 className="form__text">Upload your video</h1>

          <label className="form__label" htmlFor="techniqueName">
            Technique Name
          </label>
          <textarea
            className="form__box"
            type="text"
            name="techniqueName"
            rows="1"
            cols="30"
          ></textarea>
          <br />
          <label className="form__label" htmlFor="description">
            Description
          </label>
          <textarea
            className="form__box"
            type="text"
            name="description"
            rows="5"
            cols="30"
          ></textarea>
          <br />

            <input
              type="file"
              name="video"
              accept="video/*"
              onChange={handleVideo}
            />

          {/* <video></video> */}

          {/* <label htmlFor="userID">
        Users:
        <select name="userID">
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </label> */}
          <br />
          <button className="form__btn" type="submit">
            Add Video
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default AddVideo;
