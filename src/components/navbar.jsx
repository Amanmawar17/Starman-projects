import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import Projects from "./projects";

function Navbar() {
  return (<>
    <nav className="sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-100 z-10 mx-auto h-16">
      <div className=" rounded-lg p-4">
        <div className="flex justify-between items-center max-w-5xl m-auto">
          <span className="text-3xl text-accentColor font-bold">
            Aman mawar
          </span>
          <div className="flex justify-center items-center">
            <li className="flex items-center hover:text-hoverColor active:underline">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="flex items-center hover:text-hoverColor px-4">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="flex flex-col justify-center items-center hover:text-hoverColor  group me-4">
              Projects
              <Projects/>            
            </li>
            <li className="flex items-center hover:text-hoverColor">
              <FaGithub />
            </li>
          </div>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
}

export default Navbar;
