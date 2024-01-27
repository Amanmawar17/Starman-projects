import { NavLink, Outlet } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import Projects from "./Projects";
import Footer from "../Footer";

export default function Navbar() {
  return (
    <>
      <nav
        role="navigation"
        className="sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-30 z-10 mx-auto"
      >
        <div className=" rounded-lg p-2 md:p-4 text-secondary">
          <div className="flex justify-between items-center max-w-5xl m-auto flex-col sm:flex-row">
            <span className="text-4xl text-accentColor font-bold">
              Starman-Projects
            </span>
            <div className="flex justify-center items-center text-lg">
              <li className="flex items-center hover:text-hoverColor">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="flex flex-col justify-center items-center hover:text-hoverColor group px-4">
                Projects
                <Projects />
              </li>
              <li className="flex items-center hover:text-hoverColor pr-4">
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li className="flex items-center hover:text-hoverColor">
                <a
                  href="https://github.com/Amanmawar17/frontend-projects"
                  target="_blank" rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
