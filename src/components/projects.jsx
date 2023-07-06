import React from "react";

const Projects = () => {
  return (
    <ul className="border hidden absolute text-sm bg-primary group-hover:flex flex-col gap-5 top-11 text-secondary p-2" id="second_nav">
      <li className="hover:text-hoverColor" >Newbie</li>
      <li className="hover:text-hoverColor" >Junior</li>
      <li className="hover:text-hoverColor" >Intermediate</li>
      <li className="hover:text-hoverColor" >Advanced</li>
    </ul>
  );
};

export default Projects;
