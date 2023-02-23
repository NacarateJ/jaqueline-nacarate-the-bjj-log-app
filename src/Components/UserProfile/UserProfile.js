import "./UserProfile.scss";
import React from "react";
import Photo from "../../Assets/Images/user.jpg";
import { useState } from "react";

const UserProfile = ({
  handleUpload,
  setUsers,
  users,
  editUserId,
  handleEdit,
  handleUpdate,
  // handleDelete,
}) => {
  const [selectedOption, setSelectedOption] = useState("Blue");
  const [belt, setBelt] = useState("blueBelt.jpg");
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleBelt = (event) => {
    setSelectedOption(event.target.value);

    if (event.target.value === "White") {
      setBelt("whiteBelt.jpg");
    } else if (event.target.value === "Blue") {
      setBelt("blueBelt.jpg");
    } else if (event.target.value === "Purple") {
      setBelt("purpleBelt.jpg");
    } else if (event.target.value === "Brown") {
      setBelt("brownBelt.jpg");
    } else if (event.target.value === "Black") {
      setBelt("blackBelt.jpg");
    }
  };

  const colors = ["White", "Blue", "Purple", "Brown", "Black"];
  const [borderColor, setBorderColor] = useState("Blue");

  const handleColorChange = (event) => {
    setBorderColor(event.target.value);
  };

  const handleEditClick = (event) => {
    event.preventDefault();
    setShowEmailForm(true);
  };

  const handleUpdateClick = (event) => {
    event.preventDefault();
    setShowEmailForm(false);
  };

  return (
    <div className="users">
      {users &&
        users.map((user) => {
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
                    style={{ border: `5px solid ${borderColor}` }}
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
                  {showEmailForm ? (
                    <textarea
                      className="users__email"
                      type="text"
                      name="userEmail"
                      rows="1"
                      cols="30"
                      value={user.email}
                      onChange={(event) =>
                        setUsers({ ...user, email: event.target.value })
                      }
                    ></textarea>
                  ) : (
                    <></>
                    // <div className="user__email">{user.email}</div>
                  )}

                  <img
                    className="users__belt"
                    src={require(`../../Assets/Images/${belt}`)}
                    alt="Selected belt color"
                  ></img>

                  {editUserId === user.id ? (
                    <>
                      <select
                        className="users__edit-profile"
                        defaultValue={"Blue"}
                        onChange={(event) => {
                          handleBelt(event);
                          handleColorChange(event);
                        }}
                      >
                        <option defaultValue="Select your belt">
                          Select your belt
                        </option>
                        {colors.map((color) => (
                          <option key={color} value={color}>
                            {color}
                          </option>
                        ))}
                      </select>
                      {showEmailForm && (
                        <button
                          className="users__update"
                          type="submit"
                          onClick={handleUpdateClick}
                        >
                          Update
                        </button>
                      )}
                    </>
                  ) : (
                    <button
                      className="users__edit-but"
                      type="button"
                      onClick={(event) => {
                        handleEdit(event, user.id);
                        handleEditClick(event);
                      }}
                    >
                      Edit Profile
                    </button>
                  )}
                </div>
              </form>
            </div>
          );
        })}
                  <button
                    className="users__upload-video"
                    type="text"
                    onClick={handleUpload}
                  >
                    Upload a new video
                  </button>
      
    </div>
  );
};

export default UserProfile;
