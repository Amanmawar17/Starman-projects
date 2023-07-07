import React from "react";
import { useState, useEffect } from "react";
import countries from "../../data/countries_data.json";

import { GrSearch } from "react-icons/gr";
import { BsArrow90DegLeft, BsMoonFill } from "react-icons/bs";

export default function Countries() {
  const [light, isSetLight] = useState();
  const [cardClick, isSetCardClick] = useState();
  const [search, isSetSearch] = useState();

  useEffect(()=>{
    // isSetlight = 
  })

  useEffect(()=>{

  })

  return (  
    <section className="h-full bg-[#202c37] flex-col">
      {/* header */}
      <div className=" flex justify-between items-center py-4 px-8 text-2xl bg-[#2b3945] text-[#ffffff]">
        <h1>Where in the world?</h1>
        <button className="flex items-center shadow-sm" onClick={light}>
          <BsMoonFill className="mr-2" /> Dark mode
        </button>
      </div>
      {/* search and filter */}
      <div className="flex justify-between items-center px-8">
        { isCarkClicked ? <div className="flex justify-between items-center">
          <div className=" text-[#ffffff] ml-2">
          <label
            className="flex items-center text-[#ffffff] bg-[#2b3945]"
          >
            <GrSearch className="mx-2 text-[#fff]" />
            <input
              className="bg-[#2b3945] p-2"
              id="search"
              type="search"
              placeholder=" Search your country"
            />
          </label>
        </div>
        <div className="text-[#ffffff] p-2 mr-2">
          <select name="continent" id="continent" className="bg-[#2b3945] p-2">
            <option value="">Filter by Region</option>
            <option value="Asia">Asia</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div> 
        </div>  
        :
        <div className="items-start px-8">
          <button>
            <BsArrow90DegLeft/>Back
          </button>
        </div>}
      </div>
      {/* countries card */}
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 text-[#ffffff] px-12 py-4">
        {countries.map((country) => {
          return (
            <div className="card bg-[#2b3945] shadow-xl max-w-[265px]" key={country.numericCode}>
                <img
                  className="object-fill h-1/2"
                  src={country.flags.svg}
                  alt={country.name + " " + "flag"}
                />

              <div className="card-body h-1/2 p-6 mt-2">
                <h3 className="mb-4 text-xl font-bold">{country.name}</h3>

                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
