import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { divIcon } from "leaflet";

import IptrackerD from "/iptracker/iptracker-bg-desktop.png";
import IptrackerM from "/iptracker/pattern-bg-mobile.png";
import loc from "/iptracker/icon-location.svg";
import { FaSearch } from "react-icons/fa";

const customIcon = new divIcon({ html:`${loc}` });

function Ipform({ onHandleSearch, onSetIpAddress }) {
  function handleFormSubmit(e) {
    e.preventDefault();
    onHandleSearch();
  }
  return (
    <form
      action="submit"
      className="flex w-80 my-4"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        className="w-full p-3 rounded-ss-2xl rounded-es-2xl focus:outline-dashed"
        onInput={(e) => onSetIpAddress(e.target.value)}
      />
      <button
        type="submit"
        className="flex bg-[#000] text-secondary h-12 w-12 rounded-se-2xl rounded-ee-2xl"
      >
        <FaSearch className="m-auto" />
      </button>
    </form>
  );
}

function Details({ ipDetails }) {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center p-6 max-w-3xl bg-secondary rounded-2xl z-10">
      <div className="grid gap-5 mx-8">
        <h3 className="font-medium text-xl">IP Address</h3>
        <h3>{ipDetails.ip}</h3>
      </div>
      <hr className="rotate-90 text-[#777676]" />
      <div className="grid gap-5 mx-8">
        <h3 className="font-medium text-xl">Location</h3>
        <h3>{`${ipDetails.location.city}, ${ipDetails.location.region}`}</h3>
      </div>
      <hr className="rotate-90" />
      <div className="grid gap-5 mx-8">
        <h3 className="font-medium text-xl">Time zone</h3>
        <h3>UTC {ipDetails.location.timezone}</h3>
      </div>
      <hr className="rotate-90" />
      <div className="grid gap-5 mx-8">
        <h3 className="font-medium text-xl">ISP</h3>
        <h3>{ipDetails.isp}</h3>
      </div>
    </div>
  );
}
function Map({ coordinates }) {
  return (
    <MapContainer center={[70.04915, -418.09462]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates} icon={customIcon}>
        <Popup>This is the location.</Popup>
      </Marker>
      <RecenterAutomatically coordinates={coordinates} />
    </MapContainer>
  );
}

const RecenterAutomatically = ({ coordinates }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(coordinates);
  }, [coordinates, map]);
  return null;
};

export default function IpTracker() {
  const [ipAddress, setIpAddress] = useState("");
  const [ipDetails, setIpDetails] = useState({
    ip: "",
    isp: "",
    location: {
      city: "",
      region: "",
      timezone: "",
    },
  });

  const [coordinates, setCoordinates] = useState([70.04915, -418.09462]);

  function handleSearch() {
    axios({
      method: "get",
      url: import.meta.env.REACT_APP_API_URL + ipAddress,
    })
      .then((res) => {
        setIpDetails(res.data);
        setCoordinates([res.data.location.lat, res.data.location.lng]);
      })
      .catch((e) => alert("Invalid IP!!!"));
  }

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="h-screen relative">
      <div className="h-1/4">
        <img src={IptrackerD} alt="bg" className="webkit-fill-available hidden md:block" />
        <img src={IptrackerM} alt="bg" className="webkit-fill-available block md:hidden" />
      </div>
      <div className="absolute top-0 left-1/4 grid place-items-center my-8">
        <h1 className="text-3xl text-secondary font-medium">
          IP Address Tracker
        </h1>
        <Ipform onHandleSearch={handleSearch} onSetIpAddress={setIpAddress} />
        <Details ipDetails={ipDetails} />
      </div>
      <div className="h-3/4">
      <Map coordinates={coordinates} />
      </div>
    </div>
  );
}
