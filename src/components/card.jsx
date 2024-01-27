import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Card(value) {
  const {id, img, title, code, preview, desc} = value.details;
  return (
    <div
      className="flex justify-evenly px-4 my-3 text-secondary hover:scale-110 transition-all"
      key={id}
    >
      <div className="bg-card max-w-xs rounded overflow-hidden shadow-2xl">
        <img
          className="w-full object-cover h-48"
          src={img}
          alt={title + "'s" + "image"}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <h2 className="">{title}</h2>
            <ul className="flex mt-2">
              <li>
                <a href={code} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              </li>
              <li className="ml-2">
                <a href={preview} target="_blank" rel="noreferrer">
                  <BsGlobe />
                </a>
              </li>
            </ul>
          </div>
          <p className="text-gray-400 text-base">{desc}</p>
        </div>
      </div>
    </div>
  );
}

