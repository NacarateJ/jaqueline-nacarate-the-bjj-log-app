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

  // State for all the videos
  const [videos, setVideos] = useState([]);

  // State to edit videos
  const [editVideoId, setEditVideoId] = useState(null);


  // State for hero video
   const [videoDetails, setVideoDetails] = useState({});
   const [videoId, setVideoId] = useState();

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


// Getting all videos
  useEffect(() => {
    const videoId = params.videoId;

    const fetchVideos = async () => {
      try {
        const { data } = await axios.get(`${BACK_END}/videos`);
        const videos = data.filter((video) => video.id !== videoId);
        setVideos(videos);
      } catch (error) {
        console.log("Error", error);
      }
    };

    console.log("videos", videos);

    // const fetchUsers = async () => {
    //   const { data } = await axios.get(`${BACK_END}/users`);
    //   setUsers(data);
    // };

    fetchVideos();
    // fetchUsers();
  }, [params.videoId]);


  // useEffect(() => {
  //     if (params.videoId) {
  //       const videoId = params.videoId;
  //       setVideoId(params.videoId);
  //       heroVideoId(videoId);
  //     } else {
  //       const defaultVideoId = `${BACK_END}/videos/${videoId}`;
  //       setVideoId(defaultVideoId);
  //       heroVideoId(defaultVideoId);
  //     }


        // function heroVideoId(videoId) {
        // const heroVid = `${BACK_END}/videos/${videoId}`;
        // const fetchData = async () => {
        //   try {
        //     const { data } = await axios.get(heroVid);
        //     setVideoDetails(data);
        //   } catch (error) {
        //     console.log("Error", error)
        //   }
        // };
        // fetchData();
      // }

    
  // }, [params.videoId, videoId]);


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
        <div className="profile">
          <UserProfile />
        </div>

        <button type="text" onClick={handleUpload}>
          UPLOAD VIDEO
        </button>

        <div className="videos">
          <HeroVid 
          videos={videos}/>
          <VideoGallery
            videos={videos}
            handleEdit={handleEdit}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            editVideoId={editVideoId}
          />
        </div>
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
