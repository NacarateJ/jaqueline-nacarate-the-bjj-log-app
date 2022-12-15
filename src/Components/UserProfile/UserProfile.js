import "./UserProfile.scss";
import React from "react";
import Photo from "../../Assets/Images/user.jpg";
// import WhiteB from "../../Assets/Images/whiteBelt.jpg";
// import BlueB from "../../Assets/Images/blueBelt.jpg";
// import PurpleB from "../../Assets/Images/purpleBelt.jpg";
// import BrownB from "../../Assets/Images/brownBelt.jpg";
// import BlackB from "../../Assets/Images/blackBelt.jpg";
import { useState } from "react";

const UserProfile = ({
  handleUpload,
  // users,
  // editUserId,
  // handleEdit,
  // handleUpdate,
  // handleDelete,
}) => {
  const [selectedOption, setSelectedOption] = useState("blue");
  const [belt, setBelt] = useState("blueBelt.jpg");

  const handleBelt = (event) => {
    setSelectedOption(event.target.value);

    if (event.target.value === "white") {
      setBelt("whiteBelt.jpg");
    } else if (event.target.value === "blue") {
      setBelt("blueBelt.jpg");
    } else if (event.target.value === "purple") {
      setBelt("purpleBelt.jpg");
    } else if (event.target.value === "brown") {
      setBelt("brownBelt.jpg");
    } else if (event.target.value === "black") {
      setBelt("blackBelt.jpg");
    }
  };

  const colors = ["white", "blue", "purple", "brown", "black"];
  const [borderColor, setBorderColor] = useState("blue");

  const handleColorChange = (event) => {
    setBorderColor(event.target.value);
  };

  return (
    <div className="users">
      {/* {users.map((user) => {
        return (
          <div key={user.id}>
            <form
              className="users__details-form"
              autoComplete="off"
              onSubmit={(event) => handleUpdate(event, user.id)}
            >
              <div className="users__avatar">
                <img
                  className="users__photo"
                  src={Photo}
                  alt="Woman smiling holding 2 gold medals"
                ></img>
              </div>

              <div className="users__information">
                <textarea
                  className="users__name"
                  type="text"
                  name="userName"
                  rows="1"
                  cols="30"
                  value={user.name}
                  onChange={(event) =>
                  setUsers({ ...user, name: event.target.value })
                  }
                ></textarea>

                <textarea
                  className="users__email"
                  type="text"
                  name="userEmail"
                  rows="1"
                  cols="30"
                  value={user.email}
                ></textarea>

                <img
                  className="users__belt"
                  src={Belt}
                  alt="Jiu Jitsu blue belt"
                ></img>
              </div>
            </form>
          </div>
        );
      })} */}

      {/* ______________________________________________ */}

      <div className="users__details">
        <div className="users__avatar">
          <img
            className="users__photo"
            src={Photo}
            style={{ border: `5px solid ${borderColor}` }}
            alt="Woman smiling holding 2 gold medals"
          ></img>
        </div>

        <div className="users__information">
          <p className="users__name">Jaqueline Nacarate</p>

          <img
            className="users__belt"
            src={require(`../../Assets/Images/${belt}`)}
            alt="Selected belt"
          ></img>

          {/* <label for="belts">Selet your belt</label> */}
          <select
            className="users__edit-profile"
          defaultValue={"blue"}
            onChange={(event) => {
              handleBelt(event);
              handleColorChange(event);
            }}
          >
            <option value="">Select your belt</option>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
            <option value="white">White</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="brown">Brown</option>
            <option value="black">Black</option>
          </select>
        </div>
      </div>

      {/* <button className="users__edit-profile">Edit profile</button> */}
      <div className="user__upload-video-container">
        <button
          className="users__upload-video"
          type="text"
          onClick={handleUpload}
        >
          Upload a new video
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
