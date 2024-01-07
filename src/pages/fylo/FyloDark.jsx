import logo from "/fylo/logo.svg";
import intro from "/fylo/illustration-intro.png";
import arrow from "/fylo/arrow.svg";
import productive from "/fylo/illustration-stay-productive.png";
import bgcurvedesk from "/fylo/fylo-bg-curvy-desktop.svg";
import bgcurvemob from "/fylo/fylo-bg-curvy-mobile.svg";
import FooterSection from "./FooterSection";
import Testimonial from "./Testimonial";
import Feature from "./Feature";


const Fylo = () => {
  return (
    <>
      <div className="bg-[line] text-[#ffffff] font-['Open sans']">
        <nav className="flex justify-between bg-[#1c2431] font-['Raleway'] p-1 lg:p-4">
          <div className="m-2">
            <img src={logo} alt="logo" />
          </div>
          <ol className="flex justify-betweens items-center font-medium lg:text-xl">
            <li className="hover:underline">Features</li>
            <li className="mx-2 lg:mx-3 hover:underline">Team</li>
            <li className="mr-2 hover:underline">Sign in</li>
          </ol>
        </nav>
        <div className="flex flex-col justify-center items-center relative bg-[#1c2431] pt-4">
          <img className="h-2/3 p-2 m-2" src={intro} alt="intro image" />
          <img
            src={bgcurvemob}
            className="z-100 webkit-fill-available md:hidden"
            alt=""
          />
          <img
            src={bgcurvedesk}
            className="z-100 webkit-fill-available hidden md:block"
          />
          <div className="home flex flex-col justify-center items-center max-lg:bg-[#181f2a]  webkit-fill-available lg:max-w-lg text-center text-[#fff] px-4">
            <div className="max-w-lg lg:absolute bottom-4">
              <h1 className="font-[Raleway] text-4xl p-2">
                All your files in one secure location, accessible anywhere.
              </h1>
              <p className="p-2 my-4">
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends family, and co-workers.
              </p>
              <button className="w-80 bg-[#339ecc] rounded-full p-3 text-lg font-[Open sans]">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <Feature/>

        {/* Productive section  */}
        <section className="productive flex justify-evenly flex-col lg:flex-row py-10 px-8 bg-[#181f2a]">
          <img className="lg:w-1/3" src={productive} alt="Be Productive" />
          <div className="flex flex-col justify-start self-center py-4  max-w-lg">
            <h1 className="text-3xl lg:text-4xl font-['Raleway']">
              Stay productive,
              <br /> wherever you are
            </h1>
            <p className="my-2">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="my-2">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <div className="flex items-center">
              <span className="hover:text-[#65e2d9] hover:underline">
                See how Fylo works
              </span>
              <img className="bg-[#65e2d9] rounded-full ml-3" src={arrow} alt="arrow" />
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <Testimonial />

        <FooterSection/>
      </div>
    </>
  );
};

export default Fylo;
