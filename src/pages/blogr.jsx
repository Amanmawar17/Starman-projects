import { useState } from "react";

import logo from "/blogr/logo.svg";
import bgDesktop from "/blogr/bg-pattern-intro-desktop.svg";
import bgMobile from "/blogr/bg-pattern-intro-mobile.svg";
import illdesktop from "/blogr/illustration-editor-desktop.svg";
import illmobile from "/blogr/illustration-editor-mobile.svg";
import lapdesktop from "/blogr/illustration-laptop-desktop.svg";
import lapmobile from "/blogr/illustration-laptop-mobile.svg";
import phones from "/blogr/illustration-phones.svg";
import circle from "/blogr/bg-pattern-circles.svg";

import {FaBarsStaggered} from "react-icons/fa6"
import {AiOutlineClose} from "react-icons/ai"

import React from "react";

const Blogr = () => {
  const [Clicked, setClicked] = useState(false)

  function toggleFunction (){
    return setClicked(!Clicked)
  }

  return (
    <div className="no-scrollbar">
      <div
        id="navbar"
        className="sticky top-0 px-8 lg:px-20 py-6 bg-gradient-to-tl from-[#ff8f70] to-[#ff3d54] z-20"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex justify-between items-center w-full lg:w-40">
            <img src={logo} alt="" />
            <button className="lg:hidden text-secondary" onClick={toggleFunction}>
              {Clicked ? <FaBarsStaggered /> : <AiOutlineClose />}     
            </button>
          </div>

          <div id="links" className={`${Clicked ? 'hidden' : 'block'} w-full flex flex-col lg:flex-row justify-between items-center lg:ml-4`}>
            <ul className="flex flex-col lg:flex-row justify-center items-center ">
              <li className="group hover:underline text-[#c8c8cb] hover:text-secondary font-medium">
                Product
                <ul className="hidden absolute group-hover:grid p-4 bg-secondary rounded-lg font-light">
                  <li className="text-[#25252d] hover:font-bold">Overview</li>
                  <li className="text-[#25252d] hover:font-bold">Pricing</li>
                  <li className="text-[#25252d] hover:font-bold">
                    Marketplace
                  </li>
                  <li className="text-[#25252d] hover:font-bold">Features</li>
                  <li className="text-[#25252d] hover:font-bold">
                    Integration
                  </li>
                </ul>
              </li>
              <li className="group hover:underline text-[#c8c8cb] hover:text-secondary font-medium mx-10">
                <a>Company</a>
                <ul className="hidden absolute group-hover:grid p-4 bg-secondary rounded-lg font-light">
                  <li className="text-[#25252d] hover:font-bold">About</li>
                  <li className="text-[#25252d] hover:font-bold">Team</li>
                  <li className="text-[#25252d] hover:font-bold">Blog</li>
                  <li className="text-[#25252d] hover:font-bold">Careers</li>
                </ul>
              </li>
              <li className="group hover:underline text-[#c8c8cb] hover:text-secondary font-medium">
                Connect
                <ul className="hidden absolute group-hover:grid p-4 bg-secondary rounded-lg font-light">
                  <li className="text-[#25252d] hover:font-bold">Contact</li>
                  <li className="text-[#25252d] hover:font-bold">Newsletter</li>
                  <li className="text-[#25252d] hover:font-bold">Linkedin</li>
                </ul>
              </li>
            </ul>
            <div className={`${Clicked ? 'hidden' : 'block'} font-medium flex flex-col lg:flex-row justify-center items-center`}>
              <button className="text-secondary">Login</button>
              <button className="ml-4 text-[#fff] rounded-3xl w-28 py-1 hover:bg-[#ff525d] bg-[#ff8f70]">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <section
        id="home"
        className="bg-[#ff525d] -z-20 text-secondary rounded-bl-[80px] h-[70vh] grid place-content-center overflow-hidden relative px-8 lg:px-20"
      >
        <img src={bgMobile} alt="" className="lg:hidden object-cover w-max -z-10" />
        <img
          src={bgDesktop}
          alt=""
          className="hidden lg:block object-cover w-max -z-10"
        />
        <div className="text-center flex flex-col justify-center items-center absolute top-1/4 lg:left-1/4 lg:w-1/2 p-3">
          <h1 className="text-4xl lg:text-5xl font-semibold">
            A modern publishing platform
          </h1>
          <p className="text-xl my-6">
            Grow your audience and build your online brand
          </p>
          <div className="flex font-semibold">
            <button className="w-32 py-2 mr-4 rounded-3xl text-[#ff525d] bg-secondary hover:text-secondary hover:bg-[#ff525d]">
              Start for Free
            </button>
            <button className="w-32 py-2 rounded-3xl border border-secondary hover:bg-secondary hover:text-[#ff525d]">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section
        id="design-for-the-future"
        className="py-20 px-8 lg:pl-20 grid text-center overflow-x-hidden"
      >
        <h3 className="text-[#1f3f5b] text-3xl lg:text-4xl font-semibold">
          Designer for the future
        </h3>
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center">
          <div className="w-full lg:w-1/2 grid place-content-center lg:block">
            <img
              src={illdesktop}
              alt=""
              className="hidden lg:block object-cover w-max"
            />
            <img src={illmobile} alt="" className="lg:hidden" />
          </div>
          <div className="w-full lg:w-1/2 grid gap-5 text-center lg:text-start lg:mr-2">
            <h3 className="text-[#1f3f5b] text-2xl font-medium">
              Introduciing an extensible editor
            </h3>
            <p className="text-[#4b5862] mb-5">
              blogr features an exceedingly intuitive interface whcih lets you
              focus on one thing: create ontent. The editor supports management
              of muiltiple blogs and allows easy manipulation of embeds such as
              images, vedios, and Markdown. Extensibility with pugins and themes
              provide easy ways to add functionality or change the looks of a
              blog.
            </p>
            <h3 className="text-[#1f3f5b] text-2xl font-medium">
              Robust content management
            </h3>
            <p className="text-[#4b5862]">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by addding customized
              categories, sections, format, or flow. With this functionality,
              you're in full control.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#2c2d3f] to-[#3f4164] rounded-tr-[80px] rounded-bl-[80px] h-[90vh] lg:h-[55vh] my-5 lg:my-20 relative ">
        <img src={phones} alt="" className="absolute -top-20 lg:-top-40 lg:w-1/2 z-10" />
        <div className="flex justify-center items-center flex-col lg:flex-row lg:h-[55vh]  overflow-x-hidden overflow-hidden ">
          <div className="relative w-full lg:w-1/2">
            <img src={circle} alt=""/>
          </div>
          <div className="w-full lg:w-1/2 grid place-content-center text-center lg:text-start text-[#fff] p- absolute top-1/2 lg:bottom-1/2 lg:left-1/2 px-8">
            <h3 className="font-bold text-3xl lg:text-4xl ">State of the Art Infrastructure</h3>
            <p className="text-lg lg:text-xl my-6">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your reader are, keeping your
              site competitive.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-center items-center lg:py-20 p-8">
        <div className="w-full lg:w-1/2 mb-5 grid place-content-center">
          <img src={lapdesktop} alt="" className="hidden lg:block" />
          <img src={lapmobile} alt="" className="lg:hidden" />
        </div>
        <div className="w-full lg:w-1/2 grid gap-5 text-center lg:text-start lg:ml-2">
          <h3 className="text-[#1f3f5b] font-semibold text-2xl">Free, open, simple</h3>
          <p className="mb-5 text-[#4b5862]">
            blogr features an exceedingly intuitive interface whcih lets you
            focus on one thing: create ontent. The editor supports management of
            muiltiple blogs and allows easy manipulation of embeds such as
            images, vedios, and Markdown. Extensibility with pugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <h3 className="text-[#1f3f5b] font-semibold text-2xl">Powerful tooling</h3>
          <p className="text-[#4b5862]">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </section>

      <section
        id="footer"
        className="bg-[#25252d] grid place-content-evenly text-center lg:grid-flow-row grid-cols-1 lg:grid-cols-4 py-8 px-8 lg:px-20 font-medium rounded-tr-[80px]"
      >
        <div className="grid place-content-center lg:place-content-start">
          <img src={logo} alt="" />
        </div>
        <div className="my-4 lg:my-0">
          <h4 className="text-[#fff] mb-4">Product</h4>
          <ul className="text-[#c8c8cb]">
            <li className="hover:text-[#fff] hover:underline">Overview</li>
            <li className="hover:text-[#fff] hover:underline">Pricing</li>
            <li className="hover:text-[#fff] hover:underline">Marketplace</li>
            <li className="hover:text-[#fff] hover:underline">Features</li>
            <li className="hover:text-[#fff] hover:underline">Integration</li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-[#fff] mb-4">Company</h4>
          <ul className="text-[#c8c8cb]">
            <li className="hover:text-[#fff] hover:underline">About</li>
            <li className="hover:text-[#fff] hover:underline">Team</li>
            <li className="hover:text-[#fff] hover:underline">Blog</li>
            <li className="hover:text-[#fff] hover:underline">Careers</li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-[#fff] mb-4">Connect</h4>
          <ul className="text-[#c8c8cb]">
            <li className="hover:text-[#fff] hover:underline">Contact</li>
            <li className="hover:text-[#fff] hover:underline">Newsletter</li>
            <li className="hover:text-[#fff] hover:underline">LinkedIn</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Blogr;
