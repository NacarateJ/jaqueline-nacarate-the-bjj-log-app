import "./UserProfile.scss";
import React, { useState } from "react";

const UserProfile = ({
  users,
  setUsers,
  editUserId,
  handleEdit,
  handleUpdate,
  // handleDelete,
}) => {
  // const [selectedOption, setSelectedOption] = useState();
  // const [belt, setBelt] = useState("blueBelt.jpg");
  const [showForms, setShowForms] = useState(false);
  const [editing, setEditing] = useState(false);

  // const handleBelt = (event) => {
  //   setSelectedOption(event.target.value);

    //   if (event.target.value === "White") {
    //     setBelt("whiteBelt.jpg");
    //   } else if (event.target.value === "Blue") {
    //     setBelt("blueBelt.jpg");
    //   } else if (event.target.value === "Purple") {
    //     setBelt("purpleBelt.jpg");
    //   } else if (event.target.value === "Brown") {
    //     setBelt("brownBelt.jpg");
    //   } else if (event.target.value === "Black") {
    //     setBelt("blackBelt.jpg");
    //   }
  // };

  const colors = ["White", "Blue", "Purple", "Brown", "Black"];
  // const [borderColor, setBorderColor] = useState("Blue");

  // const handleColorChange = (event) => {
  //   setBorderColor(event.target.value);
  // };

  const handleEditClick = (event) => {
    event.preventDefault();
    setShowForms(true);
  };

  const handleUpdateClick = (event, userId) => {
    event.preventDefault();
    setShowForms(false);
     const formData = new FormData(event.target.form);
     handleUpdate(formData, userId);
  };

  return (
    <div className="users">
      {users &&
        users.map((user) => {
          // console.log(users)
          return (
            <div key={user.id}>
              <form
                className="users__details-form"
                autoComplete="off"
                // onSubmit={(event) => handleUpdate(event, user.id, setUsers)}
              >
                <div className="users__avatar">
                  <img
                    className="users__photo"
                    src={user.profile_image}
                    // style={{ border: `5px solid ${borderColor}` }}
                    alt="Woman smiling holding 2 gold medals"
                  ></img>
                </div>

                <div className="users__information">
                  <textarea
                    readOnly={!editing}
                    className="users__name"
                    type="text"
                    name="userName"
                    defaultValue={user.name}
                    rows="1"
                    cols="30"
                    // onChange={(event) =>
                    //   setUsers({ ...user, name: event.target.value })
                    // }
                  ></textarea>
                  {showForms && (
                    <textarea
                      readOnly={!editing}
                      className="users__email"
                      type="text"
                      name="userEmail"
                      defaultValue={user.email}
                      rows="1"
                      cols="30"
                      // onChange={(event) =>
                      //   setUsers({ ...user, email: event.target.value })
                      // }
                    ></textarea>
                  )}

                  {/* <img
                    className="users__belt"
                    src={require(`../../Assets/Images/${belt}`)}
                    alt="Selected belt color"
                  ></img> */}

                  {editUserId === user.id && showForms && (
                    <>
                      {/* <select
                        readOnly={!editing}
                        className="users__edit-profile"
                        // defaultValue={user.belt_color}
                        onChange={(event) => {
                          // handleBelt(event);
                          // handleColorChange(event);
                          // setUsers({ ...user, belt_color: event.target.value });
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
                      </select> */}

                      <textarea
                        readOnly={!editing}
                        className="users__edit-profile"
                        type="text"
                        name="userBeltColor"
                        defaultValue={user.belt_color}
                        placeholder="What's your belt color?"
                        rows="1"
                        cols="30"
                        // onChange={(event) =>
                        //   setUsers({ ...user, email: event.target.value })
                        // }
                      ></textarea>

                      <button
                        className="users__update"
                        type="submit"
                        onClick={(event) => {
                          handleUpdateClick(event);
                        }}
                      >
                        Update
                      </button>
                    </>
                  )}

                  {!showForms && (
                    <button
                      className="users__edit-but"
                      type="button"
                      onClick={(event) => {
                        handleEdit(event, user.id);
                        handleEditClick(event);
                        setEditing(!editing);
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
    </div>
  );
};

export default UserProfile;
