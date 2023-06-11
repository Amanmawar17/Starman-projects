import React from "react";
import { useEffect, useState } from "react";


// function divider(){
//   if
// }
// function handleClick(){
//   return 
// }


const Advicegen = () => {
  const [advice, setAdvice] = useState("");
  const [isDevice, setDevice] = useState(window.innerWidth < 600)

  const updateMedia = () => {
    setDevice(window.innerWidth < 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-[#1f2632] h-screen text-center">
      <div className="flex flex-col justify-evenly items-center bg-[#323a49] h-64 rounded-lg shadow-xl overflow-hidden">
        <h1 className="text-sm font-semibold text-[#52ffa8]">
          Advice #{advice.id}
        </h1>
          <p className="text-xl text-[#cee3e9] font-sans font-bold ">
            "{advice.advice}"
          </p>
          {isDevice ? (<span className="mobile">
            <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
                <g transform="translate(138)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
          </span>) : (<span className="desktop">
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                <g transform="translate(212)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
          </span>)}
      </div>
      <button className="relative rounded-full bg-[#52ffa8] bottom-8 w-16 h-16 overflow-hidden" onClick={handleClick}>
        <svg
          className="m-auto"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  );
};

export default Advicegen;
