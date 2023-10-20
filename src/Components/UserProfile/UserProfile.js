import "./UserProfile.scss";
import Photo from "../../Assets/Images/user.jpg";
import WhiteBelt from "../../Assets/Images/whiteBelt.jpg";
import BlueBelt from "../../Assets/Images/blueBelt.jpg";
import PurpleBelt from "../../Assets/Images/purpleBelt.jpg";
import BrownBelt from "../../Assets/Images/brownBelt.jpg";
import BlackBelt from "../../Assets/Images/blackBelt.jpg";
import React, { useState, useEffect, useMemo } from "react";
import { RxUpdate } from "react-icons/rx";
import { ImCancelCircle } from "react-icons/im";


const UserProfile = ({
  users,
  editUserId,
  handleEdit,
  handleUpdate,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [belt, setBelt] = useState(localStorage.getItem("belt") || "");
  const [borderColor, setBorderColor] = useState(
    localStorage.getItem("borderColor") || ""
  );
  const [showForms, setShowForms] = useState(false);
  const [editing, setEditing] = useState(false);

  const beltOptions = useMemo(() => {
    return {
      White: "whiteBelt.jpg",
      Blue: "blueBelt.jpg",
      Purple: "purpleBelt.jpg",
      Brown: "brownBelt.jpg",
      Black: "blackBelt.jpg",
    };
  }, []);

  const colors = ["White", "Blue", "Purple", "Brown", "Black"];

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
    const form = event.target.closest("form");
    const formData = new FormData(form);
    handleUpdate(formData, userId);
  };

  return (
    <div className="users">
      {users &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <form className="users__details-form" autoComplete="off">
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
                    src={
                      belt === "White"
                        ? WhiteBelt
                        : belt === "Blue"
                        ? BlueBelt
                        : belt === "Purple"
                        ? PurpleBelt
                        : belt === "Brown"
                        ? BrownBelt
                        : BlackBelt
                    }
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

                      <div>
                        <button
                          className="users__update"
                          type="submit"
                          onClick={(event) => {
                            handleUpdateClick(event, user.id);
                          }}
                        >
                          <RxUpdate className="users__but-icon" />
                        </button>

                        <button
                          className="users__cancel"
                          type="button"
                          onClick={() => setShowForms(false)}
                        >
                          <ImCancelCircle className="users__but-icon" />
                        </button>
                      </div>
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
