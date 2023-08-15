import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { SearchWrapper } from "./Shared.styles";

const Searchbar = ({
  setSearchText,
  searchText,
  _filterProperties,
  _handleFilterOnEnter,
}) => {
  return (
    <SearchWrapper>
      <div>
        <HiLocationMarker size={"30"} color="#4066ff" />
        <input
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => _handleFilterOnEnter(e)}
          value={searchText}
          type="text"
          placeholder="Search by title/ city..."
        />
      </div>
      <button onClick={_filterProperties}>Search</button>
    </SearchWrapper>
  );
};

export default Searchbar;

export const SearchBarUI = () => {
  return (
    <SearchWrapper>
      <div>
        <HiLocationMarker size={"30"} color="#4066ff" />
        <input type="text" placeholder="Search by title/ city..." />
      </div>
      <button>Search</button>
    </SearchWrapper>
  );
};
