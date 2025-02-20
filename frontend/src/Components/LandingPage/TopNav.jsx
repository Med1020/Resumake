import image from "../../assets/image.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoginLogout } from "../../Redux/Slice/auth";
import { logoutAPI } from "../../Requests/apiServices";

const TopNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.authSlice);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      logoutAPI();
      dispatch(setLoginLogout(false));
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="flex justify-between py-4">
      <div className="m-3 cursor-pointer">
        <Link to="\">
          <img src={image} width="50px" />
        </Link>
      </div>

      <button
        className="my-4 px-10 rounded-lg text-white bg-black"
        onClick={handleLoginLogout}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default TopNav;
