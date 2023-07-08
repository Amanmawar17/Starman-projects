
import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
      <main className="intro flex justify-center text-center h-[85vh]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl my-2">
              My Solutions for{" "}
              <a href="https://www.frontendmentor.io/" target="_blank">
                <span className="text-4xl text-accentColor underline cursor-pointer">
                  Frontend Mentor
                </span>
              </a>
            </h1>
            <p className=" text-xl my-2">
              I just made this site for{" "}
              <span className="text-accentColor">shwocase</span> the components
              <br />
              which i made for frontend practise, I took reference from site
              Frontend Mentor.
            </p>
          </div>
      </main>
  );
}
