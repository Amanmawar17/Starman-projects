import { AiFillHeart } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer role="contentinfo" className="border-t-2 border-secondary">
      <div className="flex justify-evenly items-center flex-col md:flex-row md:h-10 py-6">
        <h3 className="flex items-center">
          Made by
          <span className="hover:text-hoverColor hover:underline mx-2">
            <a href="https://amanmawar17.github.io/portfolio/" target="_blank" rel="noreferrer">
              Aman mawar
            </a>
          </span>
          <AiFillHeart className="text-accentColor hover:text-hoverColor" />
        </h3>
        <p className="text-lg mr-2">No &copy; copyright Issue :)</p>
        <ul className="flex justify-center items-baseline">
          Socials:
          <li className="mx-3 hover:text-hoverColor">
            <a
              href="https://www.linkedin.com/in/aman-mawar-2139161b1/"
              target="_blank"  rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="hover:text-hoverColor">
            <a href="https://github.com/Amanmawar17" target="_blank"  rel="noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
