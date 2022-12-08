import "./ProfilePage.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserProfile from "../../Components/UserProfile/UserProfile";
import AddVideo from "../../Components/AddVideo/AddVideo";
import HeroVid from "../../Components/HeroVid/HeroVid";
import VideoGallery from "../../Components/VideoGallery/VideoGallery";
// import { useParams } from "react-router-dom";

const BACK_END = process.env.REACT_APP_BACKEND_URL;

const ProfilePage = () => {
  const [isUserShowValid, setIsUserShowValid] = useState(true);
  const [isUploadHideValid, setIsUploadHideValid] = useState(false);

  const handleUpload = (event) => {
    event.preventDefault();
    setIsUserShowValid(false);
    setIsUploadHideValid(true);
  };

  const [videos, setVideos] = useState([]);
  // const [newVideo, setnewVideo] = useState(null);
  const [editVideoId, setEditVideoId] = useState(null);
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data } = await axios.get(`${BACK_END}/videos`);
      setVideos(data);
    };
    // console.log(data);

    // const fetchUsers = async () => {
    //   const { data } = await axios.get(`${BACK_END}/users`);
    //   setUsers(data);
    // };

    fetchVideos();
    // fetchUsers();
  }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const newVideo = {
  //     technique_name: event.target.techniqueName.value,
  //     description: event.target.description.value,
  //     video: event.target.video.value,
  //     user_id: event.target.userId.value,
  //   };

  //   axios.post(`${BACK_END}/videos`, newVideo).then((response) => {
  //     setVideos([...videos, response.data]);
  //   });
  //   event.target.reset();
  // };

  // ----------------------------------------------------------------------------

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newVideo = {
      technique_name: event.target.techniqueName.value,
      description: event.target.description.value,
      video: event.target.video.value,
      user_id: "2c0d90bd-558e-4991-b31a-7d55e162a45d",
    };

    const formData = new FormData();
     formData.append("technique_name", newVideo.technique_name);
     formData.append("description", newVideo.description);
     formData.append("video", newVideo.video);
     formData.append("user_id", newVideo.user_id);

    try {
      const response = await axios.post(
        `${BACK_END}/videos`,
        formData,
        {
          headers: {
            "Content-Type": `multipart/form-data`,
          },
        }).then((response) => {
          setVideos([...videos, response.data]);
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
// --------------------------------------------------------------------------------

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  // const formData = new FormData();
  //  formData.append("technique_name", newVideo.technique_name);
  //  formData.append("description", newVideo.description);
  //  formData.append("video", newVideo);
  //  formData.append("user_id", newVideo.userId);

  //  try {
  //   await axios.post(`${BACK_END}/videos`, formData, {
  //     headers: {
  //       "Content-Type": `multipart/form-data`,
  //     },
  //   });
    
  //  } catch (error) {
  //   console.log(error);
  //   window.alert(error);
  //  }
  // }


  const handleEdit = (event, videoId) => {
    event.preventDefault();
    setEditVideoId(videoId);
  };

  const handleUpdate = (event, videoId) => {
    event.preventDefault();
    const values = {
      technique_name: event.target.techniqueName.value,
      description: event.target.description.value,
      video: event.target.video.value,
    };
    axios.patch(`${BACK_END}/videos/${videoId}`, values).then((response) => {
      const updatedVideos = videos.map((video) =>
        video.id === response.data.id ? response.data : video
      );
      setVideos(updatedVideos);
      setEditVideoId(null);
    });
  };

  const handleDelete = async (event, videoId) => {
    event.preventDefault();
    const {
      data: { deletedVideoId },
    } = await axios.delete(`${BACK_END}/videos/${videoId}`);
    setVideos(videos.filter((video) => video.id !== deletedVideoId));
  };

  return (
    <div className="container">
      <section
        className={`user
            ${isUserShowValid ? "" : "user--hide"} `}
      >
        <div className="profile">
          <UserProfile />
        </div>

        <button type="text" onClick={handleUpload}>
          UPLOAD
        </button>

        <div className="videos">
          <HeroVid />
          <VideoGallery
            videos={videos}
            handleEdit={handleEdit}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            editVideoId={editVideoId}
          />
        </div>
      </section>

      <section
        className={`upload 
            ${!isUploadHideValid ? "" : "upload--show"} `}
      >
        <div>
          <AddVideo
            handleSubmit={handleSubmit}
            // users={users}
          />
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
