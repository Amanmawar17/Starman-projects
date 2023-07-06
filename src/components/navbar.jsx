import React from "react";
import { NavLink } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import Projects from "./projects";

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-primary text-secondary backdrop-filter backdrop-blur-lg bg-opacity-30 max-w-5xl mx-auto">
      <div className=" rounded-lg px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-accentColor font-semibold">
            Aman mawar
          </span>
          <div className="flex justify-center items-center">
            <li className="flex items-center hover:text-hoverColor">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="flex items-center hover:text-hoverColor px-4">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="flex flex-col justify-center items-center hover:text-hoverColor group me-4">
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
  );
}

export default Navbar;
