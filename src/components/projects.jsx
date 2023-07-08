import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <ul className="border hidden absolute text-sm bg-primary group-hover:flex flex-col gap-5 top-11 text-secondary p-2" id="second_nav">
      <li className="hover:text-hoverColor" ><Link to="/newbie">Newbie</Link></li>
      <li className="hover:text-hoverColor" ><Link to="/junior">Junior</Link></li>
      <li className="hover:text-hoverColor" ><Link to="/intermediate">Intermediate</Link></li>
      <li className="hover:text-hoverColor" ><Link to="/advanced">Advanced</Link></li>
    </ul>
  );
};

export default Projects;
