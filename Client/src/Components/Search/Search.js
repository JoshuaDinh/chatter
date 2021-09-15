import React, { useState, useEffect } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import SearchInput from "../SearchInput/SearchInput";
import axios from "axios";
import "./search.css";

const Search = ({ request, exit }) => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(request);
      setAccounts(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="search">
      <SearchInput exit={exit} />
      <div className="search-grid">
        {accounts.map((account) => {
          return <ProfileCard account={account} />;
        })}
      </div>
    </div>
  );
};

export default Search;
