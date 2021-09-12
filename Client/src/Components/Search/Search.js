import React, { useState, useEffect } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import SearchInput from "../SearchInput/SearchInput";
import axios from "axios";
import "./search.css";

const Search = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("api/user");
      setAccounts(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="search">
      <SearchInput />
      <div className="search-grid">
        {accounts.map((account) => {
          return <ProfileCard account={account} />;
        })}
      </div>
    </div>
  );
};

export default Search;
