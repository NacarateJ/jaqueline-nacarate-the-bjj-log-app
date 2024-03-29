import "./HeroVid.scss";
import React from "react";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin2Line } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";

const HeroVid = ({
  video,
  setHeroVideo,
  editVideoId,
  handleEdit,
  handleUpdate,
  handleDelete,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleUpdateClick = (event, videoId) => {
    event.preventDefault();
    const form = event.target.closest("form");
    const formData = new FormData(form);
    handleUpdate(formData, videoId);
  };

  return (
    <main className="hero">
      <div className="hero__video-wrapper">
        <video className="hero__video" src={video.video} controls></video>
      </div>
      <form
        className="hero__form"
        autoComplete="off"
      >
        <textarea
          readOnly={!editing}
          className="hero__info-tec"
          type="text"
          name="techniqueName"
          rows="1"
          cols="30"
          value={video.technique_name}
          onChange={(event) =>
            setHeroVideo({ ...video, technique_name: event.target.value })
          }
        ></textarea>

        <textarea
          readOnly={!editing}
          className="hero__info"
          type="text"
          name="description"
          rows="5"
          cols="30"
          value={video.description}
          onChange={(event) =>
            setHeroVideo({ ...video, description: event.target.value })
          }
        ></textarea>

        <div className="hero__buttons">
          {editVideoId === video.id && isEditMode ? (
            <>
              <button
                className="update"
                type="submit"
                onClick={(event) => {
                  handleUpdateClick(event, video.id);
                }}
              >
                <RxUpdate className="hero__but-icon" />
              </button>

              <button
                className="cancel"
                type="button"
                onClick={() => {
                  setIsEditMode(false);
                }}
              >
                <ImCancelCircle className="hero__but-icon" />
              </button>

              <button
                className="delete"
                type="button"
                onClick={(event) => handleDelete(event, video.id)}
              >
                <RiDeleteBin2Line className="hero__but-icon" />
              </button>
            </>
          ) : (
            <>
              <button
                className="edit"
                type="button"
                onClick={(event) => {
                  handleEdit(event, video.id);
                  setEditing(true);
                  setIsEditMode(true);
                }}
              >
                <BiEditAlt className="hero__but-icon" />
              </button>

              <button
                className="delete"
                onClick={(event) => handleDelete(event, video.id)}
              >
                <RiDeleteBin2Line className="hero__but-icon" />
              </button>
            </>
          )}
        </div>
      </form>
    </main>
  );
};

export default HeroVid;
