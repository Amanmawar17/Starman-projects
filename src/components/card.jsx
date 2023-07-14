import { Link } from "react-router-dom";

import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Card(props) {
  return (
    <section className="my-4 px-10">
      <div className="grid grid-cols-1 gap-3 grid-flow-row md:grid-cols-2 lg:grid-cols-3">
      {props.details.map((value) => {
        return (
            <div className="flex justify-evenly px-4 my-3" key={value.id}>
              <div className="bg-card max-w-xs rounded overflow-hidden shadow-2xl">
                <img
                  className="w-full object-cover h-48"
                  src={value.img}
                  alt={value.title + " " + "image"}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    <h2 className="hover:text-2xl pointer-link">
                      {value.title}
                    </h2>
                    <ul className="flex mt-2">
                      <li>
                        <a href={value.code} target="_blank">
                          <FaGithub />
                        </a>
                      </li>
                      <li className="ml-2">
                        <a href={value.preview} target="_blank">
                          <BsGlobe />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-400 text-base">{value.desc}</p>
                </div>
              </div>
            </div>
        );
      })}
      </div>
    </section>
  );
}
