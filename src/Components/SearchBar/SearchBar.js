import React from "react";
import { RxMagnifyingGlass } from "react-icons/rx";



const SearchBar = ({ videos, setSearchResults }) => {

  //  function to ignore the default action of the form subbmit event wich would be to reload the page
  const handleSearch = (event) => event.preventDefault();

 const handleSearchChange = (event) => {
   const query = event.target.value.toLowerCase();
   if (!query) {
     return setSearchResults(videos);
   }

  //  new array to keep the videos that includes the query
   const searchResultsArr = videos.filter(
     (video) => video.technique_name.toLowerCase().includes(query)
   );
   setSearchResults(searchResultsArr);
 };

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        className="search__input"
        placeholder="Search technique name"
        type="text"
        id="search"
        onChange={handleSearchChange}
      />
      <button className="search__button">
        <RxMagnifyingGlass />
      </button>
    </form>
  );
};

export default SearchBar;
