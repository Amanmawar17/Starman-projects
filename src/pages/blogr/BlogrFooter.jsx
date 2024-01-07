import React from "react";
import lapdesktop from "/blogr/illustration-laptop-desktop.svg";
import lapmobile from "/blogr/illustration-laptop-mobile.svg";
import logo from "/blogr/logo.svg";

const BlogrFooter = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-center items-center lg:h-[100vh] lg:pt-40 pb-20 p-8 bg-secondary">
        <div className="w-full lg:w-1/2 mb-5 grid place-content-center">
          <img src={lapdesktop} alt="" className="hidden lg:block" />
          <img src={lapmobile} alt="" className="lg:hidden" />
        </div>
        <div className="w-full lg:w-1/2 grid gap-5 text-center lg:text-start lg:ml-2">
          <h3 className="text-[#1f3f5b] font-semibold text-2xl">
            Free, open, simple
          </h3>
          <p className="mb-5 text-[#4b5862]">
            blogr features an exceedingly intuitive interface whcih lets you
            focus on one thing: create ontent. The editor supports management of
            muiltiple blogs and allows easy manipulation of embeds such as
            images, vedios, and Markdown. Extensibility with pugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <h3 className="text-[#1f3f5b] font-semibold text-2xl">
            Powerful tooling
          </h3>
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
    </>
  );
};

export default BlogrFooter;
