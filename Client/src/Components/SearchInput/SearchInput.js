import React from "react";
import "./searchInput.css";
import SearchIcon from "@material-ui/icons/Search";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { setToggleSearch } from "../../actions/toggleSearch";
import { connect } from "react-redux";

const SearchInput = ({ setToggleSearch, exit }) => {
  return (
    <div className="search-input-container">
      <SearchIcon
        className="search-input-icon
      "
      />
      <input className="search-input" placeholder="Search for friends" />
      <CancelPresentationIcon
        className="search-input-close-icon"
        onClick={exit}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { toggle: state.toggleSearch.toggle };
};
export default connect(mapStateToProps, { setToggleSearch })(SearchInput);
