import React from "react";

import profile1 from "/fylo/profile-1.jpg";
import profile2 from "/fylo/profile-2.jpg";
import profile3 from "/fylo/profile-3.jpg";

import bgquotes from "/fylo/bg-quotes.png";

const Testimonial = () => {
  return (
    <>
      <section className="flex relative lg:h-screen bg-[#181f2a] py-10 px-2 lg:px-8">
        <img
          className="w-14 h-14 absolute top-2 left-2 lg:top-1/4 lg:left-40 z-10"
          src={bgquotes}
          alt=""
        />
        <div className=" flex justify-center items-center flex-col lg:flex-row m-auto w-4/5 z-20">
          <div className="card max-w-lg flex flex-col justify-start bg-[#202a3c] rounded-sm m-2 p-4">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex justify-start items-center py-2">
              <img
                className="w-10 h-10 rounded-full"
                src={profile1}
                alt="profile-1"
              />
              <div className="flex flex-col mx-2">
                <h1 className="text-lg">Satish Patel</h1>
                <h3 className="text-md">Founder & CEO, Huddle</h3>
              </div>
            </div>
          </div>
          <div className="card max-w-lg flex flex-col justify-start bg-[#202a3c] rounded-sm m-2 p-4">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex justify-start items-center py-2">
              <img
                className="w-10 h-10 rounded-full"
                src={profile2}
                alt="profile-2"
              />
              <div className="flex flex-col mx-2">
                <h1 className="text-lg">Bruce McKenzie</h1>
                <h3 className="text-md">Founder & CEO, Huddle</h3>
              </div>
            </div>
          </div>
          <div className="card max-w-lg flex flex-col justify-start bg-[#202a3c] rounded-sm m-2 p-4">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex  justify-start items-center py-2">
              <img
                className="w-10 h-10 rounded-full"
                src={profile3}
                alt="profile-3"
              />
              <div className="flex flex-col mx-2">
                <h1 className="text-lg">Iva Boyd</h1>
                <h3 className="text-md">Founder & CEO, Huddle</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
