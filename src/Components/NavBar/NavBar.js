import "./NavBar.scss";
import React from "react";
import { connect } from "react-redux";
import { GrMenu } from "react-icons/gr";
import Logo from "../../Assets/Logo/TheBjjLogAppLogo4.jpg";
import SearchBar from "../SearchBar/SearchBar"

const NavBar = ({ videos, setSearchResults }) => {
  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        alt="App logo: jiu-jitsu fighters"
        src={Logo}
      />
      <SearchBar videos={videos} setSearchResults={setSearchResults} />
      <div className="navbar__bars">
        <GrMenu />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchResults: (results) => {
      dispatch({ type: "SET_SEARCH_RESULTS", payload: results });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
