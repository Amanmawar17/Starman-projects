import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import Projects from "./projects";

function Navbar() {
  return (<>
    <nav className="sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-100 z-10 mx-auto sm:h-16">
      <div className=" rounded-lg p-4">
        <div className="flex justify-between items-center max-w-5xl m-auto flex-col sm:flex-row">
          <span className="text-3xl text-accentColor font-bold">
            Starman-Projects
          </span>
          <div className="flex justify-center items-center text-lg">
            <li className="flex items-center hover:text-hoverColor">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="flex items-center hover:text-hoverColor px-4">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="flex flex-col justify-center items-center hover:text-hoverColor group pr-4">
              Projects
              <Projects/>            
            </li>
            <li className="flex items-center hover:text-hoverColor">
              <a href="https://github.com/Amanmawar17/frontend-projects" target="_blank"><FaGithub /></a>
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
