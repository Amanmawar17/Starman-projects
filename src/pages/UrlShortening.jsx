import React from "react";

import { FaBars } from "react-icons/fa";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { BsPinterest, BsInstagram } from "react-icons/bs";
import logo from "/urlshort/logo.svg";
import illust from "/urlshort/illustration-working.svg";
import brand from "/urlshort/icon-brand-recognition.svg";
import detail from "/urlshort/icon-detailed-records.svg";
import fully from "/urlshort/icon-fully-customizable.svg";
import boostm from "/urlshort/bg-boost-mobile.svg";
import boostd from "/urlshort/bg-boost-desktop.svg";

export default function UrlShortening() {
  return (
    <div className="bg-[#ffffff]">
      <div className="">
        {/* Nav section */}
        <div
          id="navbar"
          className="flex justify-between items-center py-2 px-20"
        >
          <img src={logo} alt="logo" className="py-4" />
          <div className="flex justify-start items-center mr-auto group-peer">
            <ul className="flex justify-center items-center ml-4 text-[#9e9aa7] text-xl font-medium">
              <li className="hover:text-[#35323e]">Features</li>
              <li className="mx-3 hover:text-[#35323e]">Pricing</li>
              <li className="hover:text-[#35323e]">Resources</li>
            </ul>
          </div>
          <div className="flex justify-end font-medium mx-4 group-peer">
            <button className="text-[#9e9aa7] mr-2">Login</button>
            <button className="p-2 rounded-2xl bg-[#2acfcf]">Sign Up</button>
          </div>
          <div className="w-20 sm:hidden">
            <FaBars className="text-[#9e9aa7] group" />
          </div>
        </div>

        {/* Home section */}
        <section id="home" className="px-20">
          <div className="md:h-[80vh] flex flex-col md:flex-row-reverse justify-evenly md:items-center">
            <div className="w/12">
              <img src={illust} alt="home svg"/>
              </div>
            <div className="flex flex-col md:justify-start justify-center items-center md:items-start w-1/2">
              <h1 className="text-[#35323e] text-6xl font-bold">
                More than just shorter links
              </h1>
              <p className="text-[#9e9aa7] text-lg font-medium my-5">
                Build your brand's recognition and get detailed insights on how
                your links are performing.
              </p>
              <button className="bg-[#2acfcf] rounded-2xl font-medium text-lg p-4">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative bottom-0 bg-[] ">
            <input type="text" className="p-4" />
            <button className="bg-[#2acfcf] p-4">Shorten it!</button>
          </div>
        </section>

        {/* Url shortening section */}
        <section className="py-8 px-20">

        </section>

        {/* Advanced Statistics */}
        <section className="py-8 px-20 bg-[#bfbfbf]">
          <div className="text-center my-10">
            <h1 className="text-4xl font-bold text-[#35323e]">Advanced Statistics</h1>
            <p className="text-xl font-medium text-[#9e9aa7]">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div id="card" className="shadow-lg bg-[#fff] p-6 my-4">
              <div className="w-20 h-20 rounded-full grid place-content-center bg-[#3b3054] relative top-0 inset-x-1/2">
                <img src={brand} alt="" />
              </div>
              <div className="mt-20"> 
              <h3 className="text-4xl font-bold text-[#35323e]">Brand Recognition</h3>
              <p className="text-xl font-medium text-[#9e9aa7]">
                Boost your brand recognition with each click. Genric links don't
                mean a thing. Branded links help instil confidence in your
                content.
              </p>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img src={detail} alt="" />
                </div>
                <h3>Detail Records</h3>
                <p>
                  Gain insights into who is clicking your links. Knowing when and where people engage with your constent helps inform better decisions.
                </p>
              </div>
            </div>

            <div>
              <div>
                <img src={fully} alt="" />
              </div>
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Boost  */}
        <section className="bg-[#3b3054] relative grid place-content-center">
          <div className="">
            <img src={boostm} alt="" className="md:hidden"/>
            <img src={boostd} alt="" className="hidden lg:block"/>
          </div>
          <div className="absolute place-self-center text-center ">
            <h3 className="text-3xl font-bold">Boost your links today</h3>
            <button className="bg-[#2acfcf] rounded-3xl font-medium text-lg p-4 px-16 mt-6">
                Get Started
            </button>
          </div>
        </section>

        {/* Footer */}
        <section className="bg-[#232127] font-medium  flex flex-col md:flex-row justify-evenly p-12">
          <div className="text-center lg:items-start">
            <h1 className="text-[#fff] text-3xl">Shortly</h1>
          </div>
          <div className="text-center">
            <h3 className="text-[#fff]">Features</h3>
            <ul className="text-[#bfbfbf]">
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-[#fff]">Resources</h3>
            <ul className="text-[#bfbfbf]">
              <li>Blog</li>
              <li>Developers</li>
              <li>support</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-[#fff]">Company</h3>
            <ul className="text-[#bfbfbf]">
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="text-[#fff] flex justify-evenly">
            <AiFillFacebook className="w-8 h-8" />
            <AiOutlineTwitter className="mx-8 w-8 h-8" />
            <BsPinterest className="mr-8 w-8 h-8" />
            <BsInstagram className="w-8 h-8" />
          </div>
        </section>
      </div>
    </div>
  );
}
