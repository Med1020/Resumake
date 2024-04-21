import React from "react";
import image from "../assets/image.png";
import { Link, useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <div className="m-3 cursor-pointer">
        <Link to="\">
          <img src={image} width="50px" />
        </Link>
      </div>
      <button
        className="my-3 mx-5 px-5 rounded-lg text-white bg-black"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
};

export default TopNav;
