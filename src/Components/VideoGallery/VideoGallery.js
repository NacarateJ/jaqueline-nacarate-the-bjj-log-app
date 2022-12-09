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
}) => {
  const [isCancelShowValid, setIsCancelShowValid] = useState(false);

  const handleCancel = (event) => {
    event.preventDefault();
    setIsCancelShowValid(true);
  };

  return (
    <div className="container">
      {videos.map((video) => {
        return (
          <div key={video.id}>
            <form
              autoComplete="off"
              className="container__add-form"
              onSubmit={(event) => handleUpdate(event, video.id)}
            >
              <input
                type="text"
                name="techniqueName"
                defaultValue={video.technique_name}
                disabled={editVideoId !== video.id}
              />
              <input
                type="text"
                name="description"
                defaultValue={video.description}
                disabled={editVideoId !== video.id}
              />
              <input
                type="text"
                name="video"
                defaultValue={video.video}
                disabled={editVideoId !== video.id}
              />
              {editVideoId === video.id ? (
                <>
                  <button
            //         className={`update
            // ${isUpdateShowValid ? "" : "update--show"} `}
                    type="submit"
                  >
                    <RxUpdate />
                  </button>

                  <button
                    className={`cancel
            ${isCancelShowValid ? "" : "cancel--hide"} `}
                    type="text"
                    onClick={handleCancel}
                  >
                    <ImCancelCircle />
                  </button>
                </>
              ) : (
                <button
            //       className={`edit
            // ${isEditShowValid ? "" : "edit--show"} `}
                  type="button"
                  onClick={(event) => handleEdit(event, video.id)}
                >
                  <BiEditAlt />
                </button>
              )}
              <button onClick={(event) => handleDelete(event, video.id)}>
                <RiDeleteBin2Line />
              </button>
            </form>
          </div>
        );
      })}
    </div>

    // <section className="gallery">
    //   <div>
    //     <h3 className="gallery__title"> VIDEO GALLERY</h3>
    //   </div>

    //   <div className="gallery__wrapper">
    //     <div className="gallery__video-wrapper">
    //       <video className="gallery__video"></video>
    //     </div>

    //     <div className="gallery__text-wrapper">
    //       <p className="gallery__text"></p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default VideoGallery;
