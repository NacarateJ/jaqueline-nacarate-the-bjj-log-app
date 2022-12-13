import "./HeroVid.scss";
import React from "react";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin2Line } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const HeroVid = ({
  video,
  setHeroVideo,
  editVideoId,
  handleEdit,
  handleUpdate,
  handleDelete,
}) => {
  const [isCancelShowValid, setIsCancelShowValid] = useState(false);



  const handleCancel = (event) => {
    event.preventDefault();
    setIsCancelShowValid(true);
  };

  // const handleTest = (event) => {
  //   console.log(event);
  // }



  // const handleClick = (event) => {
  //   setHeroVideo({
  //     ...video,
  //     technique_name: event.target.value,
  //     description: event.target.value,
  //   }); 
  // }

  return (
    <main className="hero">
      <div className="hero__video-wrapper">
        <video className="hero__video" src={video.video} controls></video>
      </div>
      <form
        className="hero__form"
        autoComplete="off"
        onSubmit={(event) => handleUpdate(event, video.id)}
      >
        <textarea
          className="hero__info"
          type="text"
          name="techniqueName"
          rows="1"
          cols="30"
          value={video.technique_name}
          onChange={setHeroVideo}
        ></textarea>

        <textarea
          className="hero__info"
          type="text"
          name="description"
          rows="5"
          cols="30"
          value={video.description}
          onChange={setHeroVideo}
        ></textarea>

        <div className="hero__buttons">
          {editVideoId === video.id ? (
            <>
              <button
                className="update"
                //         className={`update
                // ${isUpdateShowValid ? "" : "update--show"} `}
                type="submit"
              >
                <RxUpdate className="hero__but-icon" />
              </button>

              <button
                className={`cancel
            ${isCancelShowValid ? "" : "cancel--hide"} `}
                type="text"
                onClick={handleCancel}
              >
                <ImCancelCircle className="hero__but-icon" />
              </button>
            </>
          ) : (
            <button
              className="edit"
              //       className={`edit
              // ${isEditShowValid ? "" : "edit--show"} `}
              type="button"
              onClick={(event) => handleEdit(event, video.id)}
            >
              <BiEditAlt className="hero__but-icon" />
            </button>
          )}

          <button
            className="delete"
            onClick={(event) => handleDelete(event, video.id)}
          >
            <RiDeleteBin2Line className="hero__but-icon" />
          </button>
        </div>
      </form>
    </main>
  );
};

export default HeroVid;
