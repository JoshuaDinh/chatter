import React from "react";
import "./sidebar.css";
import SettingsIcon from "@material-ui/icons/Settings";
import ChatIcon from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setToggleSearch } from "../../actions/toggleSearch";

const Sidebar = ({ setToggleSearch }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-search" onClick={setToggleSearch}>
          <SearchIcon className="sidebar-icon" />
        </div>
        <NavLink
          to="/messenger"
          activeClassName="isActive"
          className="sidebar-link"
        >
          <ChatIcon className="sidebar-icon" />
        </NavLink>
        <NavLink
          to="/settings"
          activeClassName="isActive"
          className="sidebar-link"
        >
          <SettingsIcon className="sidebar-icon" />
        </NavLink>
        <NavLink
          to="/logout"
          activeClassName="isActive"
          className="sidebar-link"
        >
          <ExitToAppIcon className="sidebar-icon" />
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { toggle: state.toggleSearch.toggle };
};

export default connect(mapStateToProps, { setToggleSearch })(Sidebar);
