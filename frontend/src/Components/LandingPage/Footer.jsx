import { AiOutlineLinkedin } from "react-icons/ai";
import { GrGithub } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-gray-500 flex flex-col">
      <div className="flex gap-4 p-4">
        <button className="cursor-pointer">
          <a
            href="https://www.linkedin.com/in/medha-moorching-576107171/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin size={24} />
          </a>
        </button>
        <button className="cursor-pointer">
          <a
            href="https://github.com/Med1020"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrGithub size={24} />
          </a>
        </button>
        <button className="cursor-pointer">
          <Link
            to="#"
            onClick={(e) => {
              window.location.href = "mailto:medhamoorching@gmail.com";
              e.preventDefault();
            }}
          >
            <MdOutlineEmail size={24} />
          </Link>
        </button>
      </div>
    
    </div>
  );
};

export default Footer;
