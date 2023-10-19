import React, { useRef, useState } from "react";
import "./SearchBar.scss";
import { RxMagnifyingGlass } from "react-icons/rx";



const SearchBar = ({ videos, setSearchResults }) => {
  const inputRef = useRef(null);
  const [isInputVisible, setInputVisible] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = inputRef.current.value.toLowerCase();

    if (!query) {
      setSearchResults(videos);
    } else {
      const searchResultsArr = videos.filter((video) =>
        video.technique_name.toLowerCase().includes(query)
      );
      setSearchResults(searchResultsArr);
    }

    inputRef.current.value = "";
    setInputVisible(false);
  };

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <div className="search">
      {isInputVisible && (
        <form className="search__form" onSubmit={handleSearch}>
          <input
            ref={inputRef}
            className="search__input"
            placeholder="Search technique name"
            type="text"
            id="search"
          />
        </form>
      )}
      <button className="search__button" onClick={toggleInputVisibility}>
        <RxMagnifyingGlass />
      </button>
    </div>
  );
};

export default SearchBar;
