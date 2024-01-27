import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <ul className="shadow-sm shadow-secondary rounded-md hidden absolute text-md group-hover:flex flex-col gap-5 top-20 sm:top-12 text-secondary p-2" id="second_nav">
      <li className="hover:text-hoverColor" ><Link to="/newbie">Newbie</Link></li>
      <li className="hover:text-hoverColor" ><Link to="/junior">Junior</Link></li>
      <li className="hover:text-hoverColor" ><Link to="/database">Database</Link></li>
      <li className="hover:text-hoverColor" ><Link to="/miscellaneous">Miscellaneous</Link></li>
    </ul>
  );
};

export default Projects;
