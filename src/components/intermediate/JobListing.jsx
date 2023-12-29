import React from "react";
import { useState, useEffect } from "react";
import jobs from "../../data/job_data.json";
import desktop from "/filter_job/bg-header-desktop.svg";
import mobile from "/filter_job/bg-header-mobile.svg";

export default function JobListing() {
  const [clicked, setclicked] = useState(null);
  const filterAdded = () => {
    setclicked();
  };
  const filterRemoved = () => {
    setclicked(null);
  };


  return (
    <div className="overflow-y-scroll no-scrollbar bg-[#effafa]">
      <div className="bg-[#5ba4a4] w-full mb-8">
        <img src={desktop} alt="" className="hidden md:block" />
        <img src={mobile} alt="" className="md:hidden" />
      </div>
      {clicked && (
        <div>
          {clicked}
          <button className="" onClick={filterRemoved}>
            Remove
          </button>
        </div>
      )}
      <div className="grid place-content-center m-auto">
        {jobs.map((job) => {
          return (
            <div
              key={job.id}
              className="shadow-[#7b8e8e] shadow-md flex flex-col max-w-xs lg:max-w-5xl lg:flex-row justify-between items-start lg:items-center p-4 my-8 rounded-lg"
            >
              <div className="flex flex-col md:flex-row items-center relative ml-0 lg:ml-4 ">
                <div className="absolute -top-10 left-2 lg:static text-[#7b8e8e]">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="m-auto w-14 lg:w-20"
                  />
                </div>
                <div className="grid gap-2 place-content-start my-1 mt-10 lg:mt-0 ml-4">
                  <div className=" font-semibold flex items-center">
                    <h3 className="text-[#5ba4a4]">{job.company}</h3>
                    {job.new ? (
                      <button
                        onClick={filterAdded}
                        className="p-2 mx-2 rounded-full bg-[#5ba4a4] text-[#eef6f6]"
                      >
                        NEW!
                      </button>
                    ) : (
                      ""
                    )}
                    {job.featured ? (
                      <>
                        <button
                          onClick={filterAdded}
                          className="p-2 rounded-full bg-[#2c3a3a] text-[#eef6f6]"
                        >
                          FEATURED
                        </button>
                        <hr className="aboslute rotate-90 left-0 text-[#5ba4a4]" />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="my-1">
                    <h3 className="text-[#2c3a3a]">{job.position}</h3>
                  </div>
                  <div className="text-[#7b8e8e] flex justify-start">
                    <p className="text-sm">{job.postedAt}</p>
                    <p className="text-sm mx-2">{job.contract}</p>
                    <p className="text-sm">{job.location}</p>
                  </div>
                </div>
              </div>
              <div className="lg:hidden w-full mt-4 px-4">
                <hr className="text-[#2c3a3a] " />
              </div>
              <div className="flex justify-start lg:justify-end flex-wrap lg:flex-nowrap items-center font-semibold ">
                <button
                  onClick={filterAdded}
                  className="bg-[#effafa] text-[#5ba4a4] p-2 m-1 lg:m-2"
                >
                  {job.role}
                </button>
                <button
                  onClick={filterAdded}
                  className="bg-[#effafa] text-[#5ba4a4] p-2 m-1 lg:m-2"
                >
                  {job.level}
                </button>
                {job.languages.map((language) => {
                  return (
                    <button
                      onClick={filterAdded}
                      className="bg-[#effafa] text-[#5ba4a4] p-2 m-1 lg:m-2"
                    >
                      {language}
                    </button>
                  );
                })}
                {job.tools.map((tool) => {
                  return (
                    <button
                      onClick={filterAdded}
                      className="bg-[#effafa] text-[#5ba4a4] p-2 m-1 lg:m-2"
                    >
                      {tool}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
