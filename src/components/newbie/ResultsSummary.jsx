import React from "react";
import { BsChatDots, BsEye, BsLightning } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";

export default function ResultsSummary() {
  return (
    <div className="h-screen flex justify-center items-center bg-[#fff] overflow-scroll no-scrollbar">
      <div className="flex flex-col md:flex-row justify-center max-w-xs md:max-w-3xl items-center shadow-md">
        <div className="grid gap-1 md:gap-10 place-items-center p-6 rounded-3xl md:rounded-xl bg-gradient-to-b from-[#4e21ca] to-[#2e2be9] md:w-1/2 text-center text-[#c8c7ff] font-medium">
          <h3 className="text-base">Your Result</h3>
          <div className="flex flex-col justify-center items-center h-24 w-24 md:h-40 md:w-40 bg-[#2421ca] rounded-full place-items-center shadow-inner ">
            <h1 className="text-3xl md:text-6xl text-[#fff] font-bold p-2 md:p-4">76</h1>
            <span className="text-sm">of 100</span>
          </div>
          <div className="text-center">
            <h3 className="text-2xl text-[#fff] font-semibold p-2 md:p-4 ">
              Great
            </h3>
            <p className="text-sm md:text-lg ">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="grid gap-4 webkit-fill-available mb-2 align-middle p-2 mx-2 md:p-5 md:w-1/2 text-base font-medium md:rounded-xl text-start">
          <h3 className="text-[#303b5a]">Summary</h3>
          <div className="text-[#ff5757] bg-[#ff5757]/10 flex items-center justify-between p-2 rounded-md">
            <div className="flex items-center">
              <BsLightning className="mr-2" />
              <h3>Reaction</h3>{" "}
            </div>
            <div>
              <span className="text-[#303b5a]">80</span> / 100
            </div>
          </div>
          <div className="text-[#ffb01f] bg-[#ffb01f]/10 flex items-center justify-between p-2 rounded-md md:my-4">
            <div className="flex items-center">
              <FaBrain  className="mr-2" /> <h3>Reaction</h3>
            </div>
            <div>
              <span className="text-[#303b5a]">92</span> / 100
            </div>
          </div>
          <div className="text-[#00bd91] bg-[#00bd91]/10 flex items-center justify-between p-2 rounded-md">
            <div className="flex items-center">
              <BsChatDots  className="mr-2" /> <h3>Reaction</h3>
            </div>
            <div>
              <span className="text-[#303b5a]">61</span> / 100
            </div>
          </div>
          <div className="text-[#1125d4] bg-[#1125d4]/10 flex items-center justify-between p-2 rounded-md md:my-4">
            <div className="flex items-center">
              <BsEye  className="mr-2" /> <h3>Reaction</h3>
            </div>
            <div>
              <span className="text-[#303b5a]">72</span> / 100
            </div>
          </div>
          <button className="bg-[#303b5a] p-3 rounded-3xl">Continue</button>
        </div>
      </div>
    </div>
  );
}
