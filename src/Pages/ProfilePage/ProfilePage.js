import "./ProfilePage.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserProfile from "../../Components/UserProfile/UserProfile";
import AddVideo from "../../Components/AddVideo/AddVideo";
import HeroVid from "../../Components/HeroVid/HeroVid";
import VideoGallery from "../../Components/VideoGallery/VideoGallery";
import { useParams } from "react-router-dom";

const BACK_END = process.env.REACT_APP_BACKEND_URL;

const ProfilePage = () => {
  const params = useParams();
  // States to hide and show user's profile page and form to upload new video
  const [isUserShowValid, setIsUserShowValid] = useState(true);
  const [isUploadHideValid, setIsUploadHideValid] = useState(false);

  // State to upload a new video
  const [uploadedVideo, setUploadedVideo] = useState(null);

  // State to edit videos
  const [editVideoId, setEditVideoId] = useState(null);

  // State for all the videos
  const [videos, setVideos] = useState([]);

  // State for hero video
  const [heroVideo, setHeroVideo] = useState();

  const [allVideos, setAllVideos] = useState([]);

  // State for users
  // const [users, setUsers] = useState([]);

  // Functio to hide and show user's profile page and form to upload new video
  const handleUpload = (event) => {
    event.preventDefault();
    setIsUserShowValid(false);
    setIsUploadHideValid(true);
  };

  // Function to upload new video
  const handleVideo = (event) => {
    console.log(event.target.files[0]);
    setUploadedVideo(event.target.files[0]);
  };

  // Function to edit videos
  const handleEdit = (event, videoId) => {
    event.preventDefault();
    setEditVideoId(videoId);
  };

  // Function to change hero video
    const handleChange = (hero) => {
      const videos = allVideos.filter((video) => video.id !== hero.id);
      setVideos(videos);
      setHeroVideo(hero);
  }

  // Getting hero video
  useEffect(() => {
    const videoId = params.videoId || "705b808f-d8a0-4713-a796-8653c5c5952b";

    const fetchVideos = async () => {
      try {
        const { data } = await axios.get(`${BACK_END}/videos`);
        const videos = data.filter((video) => video.id !== videoId);
        const heroVideo = data.find((video) => video.id === videoId);
        setAllVideos(data);
        setVideos(videos);
        setHeroVideo(heroVideo);
      } catch (error) {
        console.log("Error", error);
      }
    };

    // const fetchUsers = async () => {
    //   const { data } = await axios.get(`${BACK_END}/users`);
    //   setUsers(data);
    // };

    fetchVideos();
    // fetchUsers();
  }, [params.videoId]);

  console.log("videos", videos);


  // Posting new Video
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newVideo = {
      technique_name: event.target.techniqueName.value,
      description: event.target.description.value,
      video: uploadedVideo,
      user_id: "2c0d90bd-558e-4991-b31a-7d55e162a45d",
    };

    console.log(newVideo);
    const formData = new FormData();
    formData.append("technique_name", newVideo.technique_name);
    formData.append("description", newVideo.description);
    formData.append("video", newVideo.video);
    formData.append("user_id", newVideo.user_id);

    try {
      const response = await axios
        .post(`${BACK_END}/videos`, formData, {
          headers: {
            "Content-Type": `multipart/form-data`,
          },
        })
        .then((response) => {
          setVideos([...videos, response.data]);
        });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
      {/* User profile page with video gallery */}
      <section
        className={`user
            ${isUserShowValid ? "" : "user--hide"} `}
      >
        <div className="head">
          <UserProfile handleUpload={handleUpload} />

          {heroVideo && <HeroVid video={heroVideo} />}
        </div>

        <VideoGallery
          videos={videos}
          handleChange={handleChange}
          handleEdit={handleEdit}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          editVideoId={editVideoId}
        />
      </section>

      {/* Upload form to upload new video */}
      <section
        className={`upload 
            ${!isUploadHideValid ? "" : "upload--show"} `}
      >
        <div>
          <AddVideo
            handleSubmit={handleSubmit}
            handleVideo={handleVideo}
            // users={users}
          />
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
