import Secondnavbar from "./secondnavbar";
import Footer from "./footer";
import Preview from "../screens/preview";
import Navbar from "./navbar";

export default function Home(){
  return (
    <>
      <div className="intro text-center h-[50vh] bg-primary text-secondary">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl my-2">
            My Solutions for{" "}
            <a href="https://www.frontendmentor.io/" target="_blank">
              <span className="text-4xl text-[#AF125A] underline cursor-pointer">
                Frontend Mentor
              </span>
            </a>
          </h1>
          <p className=" text-xl my-2">
            I just made this site for{" "}
            <span className="text-[#AF125A]">shwocase</span> the components
            <br />
            which i made for frontend practise, I took reference from site
            Frontend Mentor.
          </p>
        </div>
      </div>
      <Secondnavbar />
      <Preview />
      <Footer />
    </>
  );
};

