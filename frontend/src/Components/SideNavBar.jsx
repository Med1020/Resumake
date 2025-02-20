import logo from "../assets/image.png";

import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <Link to="/">
      <div className="m-5 p-2 bg-white rounded-2xl flex flex-col items-center">
        <img src={logo} width="75px" title="Go back to dashboard" />
        {/* <div className="m-5 cursor-pointer" onClick={handleOpenTemplates}>
        <img src={format} width="50px" title="Templates" />
        <p className="text-sm">Templates</p>
      </div> */}
      </div>
    </Link>
  );
};

export default SideNavBar;
