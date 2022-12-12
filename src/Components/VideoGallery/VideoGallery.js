import "./VideoGallery.scss";
import React from "react";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin2Line } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";

const VideoGallery = ({
  videos,
  editVideoId,
  handleEdit,
  handleUpdate,
  handleDelete,
  handleChange,
}) => {
  const [isCancelShowValid, setIsCancelShowValid] = useState(false);

  const handleCancel = (event) => {
    event.preventDefault();
    setIsCancelShowValid(true);
  };

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
                onSubmit={(event) => handleUpdate(event, video.id)}
              >
                <div className="gallery__collection">
                  <video
                    className="gallery__videos"
                    src={video.video}
                    // controls
                  ></video>

                  {/* <input
                type="text"
                name="video"
                defaultValue={video.video}
                disabled={editVideoId !== video.id}
              /> */}

                  <div className="gallery__info-container">
                    <textarea
                      className="gallery__info"
                      type="text"
                      name="techniqueName"
                      rows="1"
                      cols="30"
                      defaultValue={video.technique_name}
                      disabled={editVideoId !== video.id}
                    ></textarea>

                    <textarea
                      className="gallery__info"
                      type="text"
                      name="description"
                      rows="5"
                      cols="30"
                      defaultValue={video.description}
                      disabled={editVideoId !== video.id}
                    ></textarea>
                  </div>

                  <div className="gallery__buttons">
                    {editVideoId === video.id ? (
                      <>
                        <button
                          className="update"
                          //         className={`update
                          // ${isUpdateShowValid ? "" : "update--show"} `}
                          type="submit"
                        >
                          <RxUpdate className="gallery__but-icon" />
                        </button>

                        <button
                          className={`cancel
            ${isCancelShowValid ? "" : "cancel--hide"} `}
                          type="text"
                          onClick={handleCancel}
                        >
                          <ImCancelCircle className="gallery__but-icon" />
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
                        <BiEditAlt className="gallery__but-icon" />
                      </button>
                    )}

                    <button
                      className="delete"
                      onClick={(event) => handleDelete(event, video.id)}
                    >
                      <RiDeleteBin2Line className="gallery__but-icon" />
                    </button>
                  </div>
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
