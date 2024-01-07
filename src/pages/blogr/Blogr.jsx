import bgDesktop from "/blogr/bg-pattern-intro-desktop.svg";
import bgMobile from "/blogr/bg-pattern-intro-mobile.svg";
import illdesktop from "/blogr/illustration-editor-desktop.svg";
import illmobile from "/blogr/illustration-editor-mobile.svg";
import phones from "/blogr/illustration-phones.svg";
import circle from "/blogr/bg-pattern-circles.svg";

import React from "react";
import BlogrNavbar from "./BlogrNavbar";
import BlogrFooter from "./BlogrFooter";

const Blogr = () => {
  return (
    <div className="no-scrollbar text-secondary">
      <BlogrNavbar />
      <section
        id="home"
        className="bg-secondary "
      >
        <div className="bg-[#ff525d] rounded-bl-[80px] h-[70vh] grid place-content-center overflow-hidden px-8 lg:px-20">
          <img
            src={bgMobile}
            alt=""
            className="lg:hidden absolute object-cover w-max z-10"
          />
          <img
            src={bgDesktop}
            alt=""
            className="hidden lg:block object-cover w-max z-10"
          />
          <div className="text-center text-secondary flex flex-col justify-center items-center absolute top-1/4 lg:left-1/4 lg:w-1/2 p-3 z-20">
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
        </div>
      </section>

      <section
        id="design-for-the-future"
        className="py-20 px-8 lg:pl-20 grid text-center overflow-x-hidden bg-secondary"
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

      <div className="bg-secondary h-[100vh] lg:h-[90vh] py-5 lg:py-20">
        <section className="bg-gradient-to-br from-[#2c2d3f] to-[#3f4164] rounded-tr-[80px] rounded-bl-[80px] relative h-full">
          <img
            src={phones}
            alt=""
            className="absolute -top-20 lg:-top-40 lg:w-1/2 z-10"
          />
          <div className="flex justify-center items-center flex-col lg:flex-row lg:h-[55vh]  overflow-x-hidden overflow-hidden ">
            <div className="relative w-full lg:w-1/2">
              <img src={circle} alt="" />
            </div>
            <div className="w-full lg:w-1/2 grid place-content-center text-center lg:text-start text-[#fff] p- absolute top-1/2 lg:bottom-1/2 lg:left-1/2 px-8">
              <h3 className="font-bold text-3xl lg:text-4xl ">
                State of the Art Infrastructure
              </h3>
              <p className="text-lg lg:text-xl my-6">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your reader are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </section>
      </div>
      <BlogrFooter />
    </div>
  );
};

export default Blogr;
