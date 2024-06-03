import React from "react";
import image from "../assets/image.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../State/Slice/auth";

const TopNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.authSlice);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      dispatch(setIsLoggedIn(false));
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="flex justify-between">
      <div className="m-3 cursor-pointer">
        <Link to="\">
          <img src={image} width="50px" />
        </Link>
      </div>
      <button
        className="my-3 mx-5 px-5 rounded-lg text-white bg-black"
        onClick={handleLoginLogout}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default TopNav;
