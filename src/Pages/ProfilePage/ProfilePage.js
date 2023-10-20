import "./ProfilePage.scss";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Alerts from "../../Components/Alerts/Alerts";
import Users from "../Users/Users";
import FormAddVideo from "../../Components/FormAddVideo/FormAddVideo";
import HeroVid from "../../Components/HeroVid/HeroVid";
import VideoGallery from "../../Components/VideoGallery/VideoGallery";

const BACK_END = process.env.REACT_APP_BACKEND_URL;

const ProfilePage = ({ videos, searchResults, dispatch }) => {
  const params = useParams();
  const navigate = useNavigate();
  
  // States to hide and show user's profile page and form to upload new video
  const [isUserShowValid, setIsUserShowValid] = useState(true);
  const [isUploadHideValid, setIsUploadHideValid] = useState(false);

  // State to upload a new video
  const [uploadedVideo, setUploadedVideo] = useState(null);

  // State to edit videos
  const [editVideoId, setEditVideoId] = useState(null);

  // State for hero video
  const [heroVideo, setHeroVideo] = useState();

  const [allVideos, setAllVideos] = useState([]);

  // state to set Alert messages
  const [message, setMessage] = useState("");

  // State for users
  // const [users, setUsers] = useState([]);

  const videoRef = useRef();

  // Functio to hide and show user's profile page and form to upload new video
  const handleUpload = (event) => {
    event.preventDefault();
    setIsUserShowValid(false);
    setIsUploadHideValid(true);
  };

  // Function to upload new video
  const handleVideo = (event) => {
    if (event.target.files[0]) {
      videoRef.current.src = URL.createObjectURL(event.target.files[0]);
      videoRef.current.style.display = "block";
    } else {
      videoRef.current.src = "";
      videoRef.current.style.display = "none";
    }
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
    const selectedVideo = allVideos.find((video) => video.id === hero.id);
    dispatch({ type: "SET_VIDEOS", payload: videos });
    setHeroVideo(selectedVideo);
  };

  // Getting hero video
  useEffect(() => {
    const videoId = params.videoId || "bdc6bb69-e09c-498d-8abd-be2792504d00";

    const fetchVideos = async () => {
      try {
        const { data } = await axios.get(`${BACK_END}/videos`);
        const videos = data.filter((video) => video.id !== videoId);
        const heroVideo = data.find((video) => video.id === videoId);
        setAllVideos(data);
        dispatch({ type: "SET_VIDEOS", payload: videos });
        dispatch({ type: "SET_SEARCH_RESULTS", payload: videos });
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
  }, [params.videoId, dispatch]);

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

    setMessage("Loading...");

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
          console.log(response.data);
          navigate(`/profile/${response.data.id}`);
          videoRef.current.src = "";
          videoRef.current.style.display = "none";
          event.target.reset();
        });

      setMessage("Video loaded!");

      setIsUserShowValid(true);
      setIsUploadHideValid(false);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.log(error);
      setMessage(
        "Error loading video. Please check if you provided the Technique Name and the Description."
      );

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const handleUpdate = (formData, videoId) => {
    const values = {
      technique_name: formData.get("techniqueName"),
      description: formData.get("description"),
    };
    console.log(values);
    axios.patch(`${BACK_END}/videos/${videoId}`, values).then((response) => {
      const updatedVideos = videos.map((video) =>
        video.id === response.data.id ? response.data : video
      );

      dispatch({ type: "SET_VIDEOS", payload: updatedVideos });
      setEditVideoId(null);
    });

    setMessage("Saved!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleDelete = async (event, videoId) => {
    event.preventDefault();
    const {
      data: { deletedVideoId },
    } = await axios.delete(`${BACK_END}/videos/${videoId}`);
    dispatch({
      type: "SET_VIDEOS",
      payload: videos.filter((video) => video.id !== deletedVideoId),
    });

    navigate("/profile");

    setMessage("Video deleted!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="container">
      <Alerts message={message} />

      {/* User profile page with video gallery */}
      <section
        className={`user
            ${isUserShowValid ? "" : "user--hide"} `}
      >
        <div className="head">
          <div className="uper">
            <Users setMessage={setMessage} />
            <button
              className="upload-video-but"
              type="text"
              onClick={handleUpload}
            >
              Upload a new video
            </button>
          </div>

          {heroVideo && (
            <HeroVid
              video={heroVideo}
              setHeroVideo={setHeroVideo}
              handleEdit={handleEdit}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              editVideoId={editVideoId}
            />
          )}
        </div>

        <VideoGallery
          searchResults={searchResults}
          handleChange={handleChange}
        />
      </section>

      {/* Upload form to upload new video */}
      <section
        className={`upload 
            ${!isUploadHideValid ? "" : "upload--show"} `}
      >
        <div>
          <FormAddVideo
            handleSubmit={handleSubmit}
            handleVideo={handleVideo}
            videoRef={videoRef}
            setIsUserShowValid={setIsUserShowValid}
            setIsUploadHideValid={setIsUploadHideValid}
          />
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};

export default connect(mapStateToProps)(ProfilePage);
