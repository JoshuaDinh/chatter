import React, { useEffect } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import SearchInput from "../SearchInput/SearchInput";
import { connect } from "react-redux";
import { fetchDiscover } from "../../actions/discover";
import "./search.css";

const Search = ({ fetchDiscover, accounts }) => {
  useEffect(() => {
    fetchDiscover();
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

const mapStateToProps = (state) => {
  return {
    accounts: state.discover.accounts,
  };
};

export default connect(mapStateToProps, { fetchDiscover })(Search);
