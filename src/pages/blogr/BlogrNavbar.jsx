import { useState } from "react";
import logo from "/blogr/logo.svg";

import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const BlogrNavbar = () => {
  const [Clicked, setClicked] = useState(false);

  function toggleFunction() {
    return setClicked(!Clicked);
  }
  return (
    <>
      <div
        id="navbar"
        className="sticky top-0 px-8 lg:px-20 py-6 bg-gradient-to-tl from-[#ff8f70] to-[#ff3d54] z-40"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex justify-between items-center w-full lg:w-40">
            <img src={logo} alt="" />
            <button
              className="block lg:hidden text-primary"
              onClick={toggleFunction}
            >
              {Clicked ? <FaBarsStaggered /> : <AiOutlineClose />}
            </button>
          </div>

          <div
            id="links"
            className={`${
              Clicked ? "hidden" : "block"
            } w-full flex flex-col lg:flex-row justify-between items-center lg:ml-4`}
          >
            <ul className="flex flex-col lg:flex-row justify-center items-center ">
              <li className="group hover:underline text-[#c8c8cb] hover:text-primary font-medium">
                Product
                <ul className="hidden absolute group-hover:grid p-4 bg-primary rounded-lg font-light">
                  <li className="text-[#25252d] hover:font-bold">Overview</li>
                  <li className="text-[#25252d] hover:font-bold">Pricing</li>
                  <li className="text-[#25252d] hover:font-bold">
                    Marketplace
                  </li>
                  <li className="text-[#25252d] hover:font-bold">Features</li>
                  <li className="text-[#25252d] hover:font-bold">
                    Integration
                  </li>
                </ul>
              </li>
              <li className="group hover:underline text-[#c8c8cb] hover:text-primary font-medium mx-10">
                <a>Company</a>
                <ul className="hidden absolute group-hover:grid p-4 bg-primary rounded-lg font-light">
                  <li className="text-[#25252d] hover:font-bold">About</li>
                  <li className="text-[#25252d] hover:font-bold">Team</li>
                  <li className="text-[#25252d] hover:font-bold">Blog</li>
                  <li className="text-[#25252d] hover:font-bold">Careers</li>
                </ul>
              </li>
              <li className="group hover:underline text-[#c8c8cb] hover:text-primary font-medium">
                Connect
                <ul className="hidden absolute group-hover:grid p-4 bg-primary rounded-lg font-light">
                  <li className="text-[#25252d] hover:font-bold">Contact</li>
                  <li className="text-[#25252d] hover:font-bold">Newsletter</li>
                  <li className="text-[#25252d] hover:font-bold">Linkedin</li>
                </ul>
              </li>
            </ul>
            <div
              className={`${
                Clicked ? "hidden" : "block"
              } font-medium flex flex-col lg:flex-row justify-center items-center`}
            >
              <button className="text-primary">Login</button>
              <button className="ml-4 text-[#fff] rounded-3xl w-28 py-1 hover:bg-[#ff525d] bg-[#ff8f70]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogrNavbar;
