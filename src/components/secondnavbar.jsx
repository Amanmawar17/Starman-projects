import { Link } from "react-router-dom";


const Secondnavbar = () => {
  return (
    <div className="bg-primary text-secondary">
        <hr className="text-white" />
        <div className="p-2">
          <ol className="flex justify-evenly text-center">
            <li>
              <Link to="/newbie">Newbie</Link>
            </li>
            <li>
              <Link to="/junior">Junior</Link>
            </li>
            <li>
              <Link to="/intermediate">Intermediate</Link>
            </li>
            <li>
              <Link to="/advanced">Advanced</Link>
            </li>
          </ol>
        </div>
        <hr className="text-white" />
        </div>
  );
};

export default Secondnavbar;
