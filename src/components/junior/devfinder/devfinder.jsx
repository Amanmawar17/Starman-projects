import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import { BsFillMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa";

export default function DevFinder() {

  const [Darkmode, setDarkMode] = useState(true);

  const [user, setUser] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUserData("octocat");
  }, []);

  function handleSearch(username) {
    setLoading(true);
    setUser("");
    fetchUserData(username);
  }

  function fetchUserData(username) {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setLoading(false);
        setError(false);
        setUser(res.data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }

  function toggleDarkMode(){
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  function SearchForm({ handleSearch, hasError, hasLoading }) {
    const [username, setUsername] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      handleSearch(username);
    }
    return (
      <div className={`${Darkmode ? 'bg-[#1e2a47] text-[#fff] shadow-[#1e2a47]' : 'bg-[#fefefe] text-[#2b3442] shadow-[#fefefe]'} flex justify-between items-center  shadow-md rounded-lg my-4 w-full p-2`}>
        <div className="grid place-content-center m-auto">
          <FiSearch className={`${Darkmode ? 'text-[#0079ff]' : 'text-[#222731]'} h-9 w-9 `} />
        </div>
        <form
          id="github"
          action="submit"
          onSubmit={handleSubmit}
          className="flex justify-between items-center w-11/12"
        >
          <input
            className={`${Darkmode ? 'bg-[#1e2a47]' : 'bg-[#fefefe]'} p-2  w-full`}
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          {hasError && (
            <span className="text-[#f74646] font-bold">no result found</span>
          )}
          <button className={`${Darkmode ? 'bg-[#0079ff]' : 'bg-[#222731] text-[#fff]'} py-3 px-6 mx-1 rounded-lg`} disabled={hasLoading}>
            {hasLoading ? "searching" : "search"}
          </button>
        </form>
      </div>
    );
  }

  function Card({ userData, hasError, hasLoading }) {
    let {
      avatar_url,
      name,
      login,
      bio,
      date,
      following,
      followers,
      public_repos,
      location,
      company,
      twitter_username,
      html_url,
      blog,
    } = userData;

    return (
      <div className={` ${Darkmode ? 'shadow-[#1e2a47] bg-[#1e2a47]' : 'bg-[#fefefe] shadow-[#fefefe]'} p-3 md:p-6 w-full  shadow-md rounded-xl`}>
        {userData ? (
          <div className="grid place-content-center grid-cols-3">
            <div className="row-span-0 md:row-span-3 flex justify-center items-start">
              <img
                src={avatar_url}
                alt={{ name } + "image"}
                className="rounded-full w-32"
              />
            </div>
            <div className="col-span-2 place-self-center md:place-self-start">
              <h1>{name}</h1>
              <a href={html_url} target="blank">
                <h1 className="text-[#0079ff]">{`@${login}`}</h1>
              </a>
              <h1>{bio === null ? 'This profile has no bio' : bio}</h1>
            </div>
            <div className={`${Darkmode ? 'bg-[#141d2f]' : 'bg-[#f6f8ff]'} col-span-3 md:col-span-2 grid grid-cols-3 rounded-xl p-3 my-3`}>
              <ul>Repo<li>{public_repos}</li></ul>
              <ul>Followers<li>{followers}</li></ul>
              <ul>Following<li>{following}</li></ul>
            </div>
            <div className="col-span-3 md:col-span-2 grid grid-cols-2 gap-5">
              <p className="flex items-center"><HiLocationMarker className="mr-2"/><span> {location === null ? 'Not available' : location}</span></p>
              <p className="flex items-center"><AiOutlineTwitter className="mr-2" /><span>{twitter_username === null ? 'Not available' : company}</span></p>
              <a href={blog} target="blank">
                <p className="flex items-center"><BiLink className="mr-2" /><span>{blog === null ? 'Not available' : blog}</span></p>
              </a>
              <p className="flex items-center"><FaBuilding className="mr-2" /><span>{company === null ? 'Not available' : company}</span></p>
            </div>
          </div>
        ) : hasError ? (
          <div>
            <h1>We having an error here!!</h1>
          </div>
        ) : (
          hasLoading && <div>wait!</div>
        )}
      </div>
    );
  }

  return (
    <section className={`${Darkmode ? 'bg-[#141d2f] text-[#fff]' : 'bg-[#f6f8ff] text-[#2b3442]'} h-screen flex justify-center items-center font-medium `}>
      <div className="max-w-3xl lg:w-3/5">
        <div className="flex justify-between items-center p-2">
          <h1 className="text-4xl font-bold">Devfinder</h1>
          <button className="flex items-center" onClick={toggleDarkMode}>
          { Darkmode ? (<>Dark <BsFillMoonFill className="ml-2" /></>) : (<>Light <BsSunFill className="ml-2"/></>) }
          </button>
        </div>

        <SearchForm
          handleSearch={handleSearch}
          hasError={error}
          hasLoading={loading}
        />
        <Card userData={user} hasError={error} hasLoading={loading} />
      </div>
    </section>
  );
}
