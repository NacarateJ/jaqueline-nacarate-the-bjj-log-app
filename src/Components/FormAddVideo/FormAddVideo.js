import "../../Styles/FormsLoginAdd.scss";
import { IoMdCloseCircle } from "react-icons/io";
import React, { useRef } from "react";

const FormAddVideo = ({
  handleSubmit,
  handleVideo,
  videoRef,
  setIsUserShowValid,
  setIsUploadHideValid,
  // setShowNewPost,
  // setPosts,
  // users,
}) => {

  const formRef = useRef(null);
  
  const handleCloseForm = (event) => {
    event.preventDefault();
    videoRef.current.src = "";
    videoRef.current.style.display = "none";
    setIsUserShowValid(true);
    setIsUploadHideValid(false);
    formRef.current.reset();
  };

  return (
    <>
      <div className="form">
        <div className="form__container-add">
          <button
            className="form__btn-x"
            type="submit"
            onClick={handleCloseForm}
          >
            <IoMdCloseCircle className="form__btn-x-icon" />
          </button>

          <form
            ref={formRef}
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

            <label className="form__label-file" htmlFor="inputVideo">
              Choose File
            </label>
            <input
              id="inputVideo"
              type="file"
              name="video"
              accept="video/*"
              onChange={handleVideo}
              value={""}
            />

            <video className="form__new-video" ref={videoRef}></video>

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
            <button
              // onClick={(event) => {
              //   setShowNewPost(event);
              //   setPosts(event);
              // }}
              className="form__btn"
              type="submit"
            >
              Add Video
            </button>
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default FormAddVideo;
