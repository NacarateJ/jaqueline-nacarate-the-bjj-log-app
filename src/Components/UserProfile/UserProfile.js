import "./UserProfile.scss";
import Photo from "../../Assets/Images/user.jpg";
import React, { useState, useEffect } from "react";


const UserProfile = ({
  users,
  editUserId,
  handleEdit,
  handleUpdate,
  // handleDelete,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [belt, setBelt] = useState(localStorage.getItem("belt") || "");
  const [showForms, setShowForms] = useState(false);
  const [editing, setEditing] = useState(false);

  const beltOptions = {
    White: "whiteBelt.jpg",
    Blue: "blueBelt.jpg",
    Purple: "purpleBelt.jpg",
    Brown: "brownBelt.jpg",
    Black: "blackBelt.jpg",
  };

  const colors = ["White", "Blue", "Purple", "Brown", "Black"];

  const [borderColor, setBorderColor] = useState(
    localStorage.getItem("borderColor") || ""
  );

 const handleBelt = (event) => {
   setSelectedOption(event.target.value);

   if (event.target.value in beltOptions) {
     setBelt(beltOptions[event.target.value]);
     setBorderColor(event.target.value);
   }
 };

 useEffect(() => {
   if (belt !== "") {
     localStorage.setItem("belt", belt);
     setBorderColor(Object.keys(beltOptions).find((key) => beltOptions[key] === belt));
   }
 }, [belt, beltOptions]);

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
          return (
            <div key={user.id}>
              <form
                className="users__details-form"
                autoComplete="off"
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
                    readOnly={!editing}
                    className="users__name"
                    type="text"
                    name="userName"
                    defaultValue={user.name}
                    rows="1"
                    cols="30"
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
                    ></textarea>
                  )}

                  <img
                    className="users__belt"
                    src={require(`../../Assets/Images/${belt}`)}
                    alt="Selected belt color"
                  ></img>

                  {editUserId === user.id && showForms && (
                    <>
                      <select
                        readOnly={!editing}
                        className="users__edit-profile"
                        name="userBeltColor"
                        onChange={(event) => {
                          handleBelt(event);
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

                      <button
                        className="users__update"
                        type="submit"
                        onClick={(event) => {
                          handleUpdateClick(event, user.id);
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
