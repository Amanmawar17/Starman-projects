import React from "react";

import Iptracker from "/iptracker-bg-desktop.png";
import { FaSearch } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

export default function IpTracker() {
  return (
    <div className="h-screen relative">
      <div className="h-1/4">
        <img src={Iptracker} alt="bg" className="webkit-fill-available" />
      </div>
      <div className="map h-3/4 relative">
        <GrLocation className="absolute text-hoverColor h-24 w-24"/>
      </div>
      <div className="absolute top-0 left-1/2 right-1/2 flex flex-col justify-center items-center min-h-2/5">
        <h1>IP Address Tracker</h1>
        <form action="submit">
          <input type="text" />
          <button type="submit" className="">
            <FaSearch />
          </button>
        </form>
        <div className="flex md:flex-row flex-col justify-center items-center p-4">
          <div className="">
            <h3>IP Address</h3>
            <h3>123.123.123.12</h3>
          </div>
          <hr className="rotate-90" />
          <div>
            <h3>Location</h3>
            <h3>us america california</h3>
          </div>
          <hr className="rotate-90" />
          <div>
            <h3>Time zone</h3>
            <h3>us 1700</h3>
          </div>
          <hr className="rotate-90" />
          <div>
            <h3>ISP</h3>
            <h3>skdjfdsklaj</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
