import React from "react";
import logo from "../assets/image.png";
import format from "../assets/copy.png";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <div className="m-5 p-2 bg-white rounded-2xl flex flex-col items-center">
      <Link to="/">
        <img src={logo} width="75px" title="Go back to dashboard" />
      </Link>
      <div className="m-5 ">
        <img src={format} width="50px" title="Templates" />
        <p className="text-sm">Templates</p>
      </div>
    </div>
  );
};

export default SideNavBar;
