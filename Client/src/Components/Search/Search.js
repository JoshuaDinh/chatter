import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import SearchInput from "../SearchInput/SearchInput";
// import SearchList from "../SearchList/SearchList";

import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <SearchInput />
      <div className="search-grid">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
};

export default Search;
