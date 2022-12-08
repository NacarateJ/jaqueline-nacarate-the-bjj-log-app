import "./AddVideo.scss";
import React from "react";

const AddVideo = ({ handleSubmit, users }) => {
  return (
    <form
      className="add-form"
      onSubmit={handleSubmit}
      autoComplete="off"
      encType="multipart/form-data"
    >
      <h1>UPLOAD YOUR VIDEO</h1>
      <label htmlFor="techniqueName">
        Technique Name
        <input type="text" name="techniqueName" />
      </label>

      <label htmlFor="description">
        Description
        <input type="text" name="description" />
      </label>

      <label htmlFor="video">
        Video
        <input
          type="file"
          name="video"
          accept="video/*"
          // onChange={handleVideo}
        />
        <video></video>
      </label>

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

      <button type="submit">Add Video</button>
    </form>
  );
};

export default AddVideo;
