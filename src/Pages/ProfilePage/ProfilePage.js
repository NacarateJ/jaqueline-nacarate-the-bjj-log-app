import "./ProfilePage.scss";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Alerts from "../../Components/Alerts/Alerts";
// import UserProfile from "../../Components/UserProfile/UserProfile";`
import Users from "../Users/Users";
import FormAddVideo from "../../Components/FormAddVideo/FormAddVideo";
import HeroVid from "../../Components/HeroVid/HeroVid";
import VideoGallery from "../../Components/VideoGallery/VideoGallery";
import { useParams, useNavigate } from "react-router-dom";

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

  // State to show new posts
  const [message, setMessage] = useState("");
  // const [posts, setPosts] = useState([]);
  // const [showNewPost, setShowNewPost] = useState(false);

  // State for users
  // const [users, setUsers] = useState([]);

  const videoRef = useRef();

  const navigate = useNavigate();


  // function refreshPage() {
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 3000);
  // }

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
    setVideos(videos);
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
          // setVideos([...videos, response.data]);
          // setHeroVideo([...videos, response.data]);
        });

      setMessage("Video loaded!");

      // setPosts();

      // setShowNewPost(true);

      // refreshPage();

      setIsUserShowValid(true);
      setIsUploadHideValid(false);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.log(error);
      setMessage("Error loading video.");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  // useEffect(() => {
  //   const loadPosts = async () => {
  //     try {
  //       const reload = await axios.get(`${BACK_END}/videos`);

  //       setPosts(reload.data);
  //     } catch (error) {
  //       if (error.response) {
  //         return setMessage(error.response.data.error);
  //       }

  //       setMessage("Ops, something went wrong. Please try again");
  //     }
  //   };
  //   loadPosts();
  // }, []);

  const handleUpdate = (event, videoId) => {
    event.preventDefault();
    const values = {
      technique_name: event.target.techniqueName.value,
      description: event.target.description.value,
    };

    axios.patch(`${BACK_END}/videos/${videoId}`, values).then((response) => {
      const updatedVideos = videos.map((video) =>
        video.id === response.data.id ? response.data : video
      );
      
      setVideos(updatedVideos);
      setEditVideoId(null);
    });
    setMessage("Saving your changes...");

    setMessage("Saved!");

    // refreshPage();

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleDelete = async (event, videoId) => {
    event.preventDefault();
    const {
      data: { deletedVideoId },
    } = await axios.delete(`${BACK_END}/videos/${videoId}`);
    setVideos(videos.filter((video) => video.id !== deletedVideoId));

    // refreshPage();

    navigate("/profile");

    // setMessage("Video deleted!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="container">
      <Alerts message={message} setMessage={setMessage} tipo="erro" />

      {/* User profile page with video gallery */}
      <section
        className={`user
            ${isUserShowValid ? "" : "user--hide"} `}
      >
        <div className="head">
          <div>
            <Users />
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

        <VideoGallery videos={videos} handleChange={handleChange} />
      </section>

      {/* Upload form to upload new video */}
      <section
        className={`upload 
            ${!isUploadHideValid ? "" : "upload--show"} `}
      >
        <div>
          {/* {showNewPost && ( */}
          <FormAddVideo
            handleSubmit={handleSubmit}
            handleVideo={handleVideo}
            videoRef={videoRef}
            setIsUserShowValid={setIsUserShowValid}
            setIsUploadHideValid={setIsUploadHideValid}
            // users={users}
            // setShowNewPost={setShowNewPost}
            // setPosts={setPosts}
          />
          {/* // )} */}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
