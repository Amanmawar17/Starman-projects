import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const About = () => {
  return (
    <>
    <main className="bg-primary">
      <Navbar/>
      <div className="bg-primary text-secondary h-screen">About</div>
      </main>
      <Footer/>
    </>
  );
};

export default About;
