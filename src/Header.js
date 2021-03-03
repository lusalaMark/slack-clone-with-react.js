import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { AccessTime, HelpOutline } from "@material-ui/icons";
//import AccessTimeIcon from "@material-ui/icons/AccessTimeIcon";
function Header() {
  return (
    <div className="header">
      <div className="header__left ">
        {/*Avatar for logged in user */}
        <Avatar className="header__avatar" alt="Mark" src="" />
        {/*Time Icon*/}
        <AccessTime />
      </div>
      <div className="header__search">
        {/*Search icon*/}
        <SearchIcon />
        {/*input*/}
        <input placeholder="what do you want" />
      </div>
      <div className="header__right">
        {/*help icon*/}
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
