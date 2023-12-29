import logo from "/fylo/logo.svg";
import bgquotes from "/fylo/bg-quotes.png";
import intro from "/fylo/illustration-intro.png";
import comp from "/fylo/comp.svg";
import secu from "/fylo/secu.svg";
import real from "/fylo/real.svg";
import store from "/fylo/store.svg";
import arrow from "/fylo/arrow.svg";
import profile1 from "/fylo/profile-1.jpg";
import profile2 from "/fylo/profile-2.jpg";
import profile3 from "/fylo/profile-3.jpg";
import productive from "/fylo/illustration-stay-productive.png";
import bgcurvedesk from "/fylo/fylo-bg-curvy-desktop.svg";
import bgcurvemob from "/fylo/fylo-bg-curvy-mobile.svg";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

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
          <div className="home flex flex-col justify-center items-center  max-lg:bg-[#181f2a]  webkit-fill-available lg:max-w-lg text-center text-[#fff] px-4">
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
        <section className="features grid md:grid-cols-2 grid-cols-1 place-items-evenly gap-4 lg:h-screen text-center bg-[#181f2a] py-10 px-8">
          <div className="card max-w-sm flex flex-col justify-center items-center place-self-center">
            <img src={comp} alt="access anywhere" />
            <h1 className="text-lg">Access your files, anywhere</h1>
            <p className="my-2">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className="card max-w-sm flex flex-col justify-center items-center place-self-center">
            <img src={secu} alt="security" />
            <h1 className="text-lg">Security you can trust</h1>
            <p className="my-2">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>

          <div className="card max-w-sm flex flex-col justify-center items-center place-self-center">
            <img src={real} alt="collabration" />
            <h1 className="text-lg">Real-time collaboration</h1>
            <p className="my-2">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className="card max-w-sm flex flex-col justify-center items-center place-self-center">
            <img src={store} alt="storage" />
            <h1 className="text-lg">Store any type of file</h1>
            <p className="my-2">
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </section>

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
        <section className="flex relative lg:h-screen bg-[#181f2a] py-10 px-2 lg:px-8">
          <img
            className="w-14 h-14 absolute top-2 left-2 lg:top-1/4 lg:left-40 z-10"
            src={bgquotes}
            alt=""
          />
          <div className=" flex justify-center items-center flex-col lg:flex-row m-auto w-4/5 z-20">
            <div className="card max-w-lg flex flex-col justify-start bg-[#202a3c] rounded-sm m-2 p-4">
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
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
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
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
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
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

        <section className="early-access bg-[#181f2a]">
          <div className="card flex justify-center items-center m-auto w-4/5 lg:w-2/3 p-8 rounded-t shadow-2xl">
            <div className="flex-col text-center max-w-2xl">
              <h1 className="text-4xl my-2">Get early access today</h1>
              <p className="my-2">
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
              </p>
            </div>
          </div>
          <div className="bg-[#0b1523]">
            <div className="flex justify-center items-center m-auto relative p-6 flex-col lg:flex-row bg-[#181f2a] rounded-b shadow-2xl w-4/5 lg:w-2/3">
              <input
                className="w-4/5 lg:w-2/3 rounded-xl text-[#339ecc] p-3 lg:ml-20 lg:mr-4 max-lg:mb-8"
                type="email"
                placeholder="email@example.com"
              />
              <button className="bg-[#65e2d9] abosolute right-0 w-4/5 lg:w-1/3 rounded-xl p-3 lg:ml-4 lg:mr-20">
                Get Started For Free
              </button>
            </div>
          </div>
        </section>

        <footer className="flex flex-col bg-[#0b1523] px-4">
          <div className="p-4 m-2 ">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex lg:justify-evenly lg:items-center flex-col lg:flex-row items-start">
              <div className="flex flex-col lg:flex-row p-2 my-2 w-4/5 lg:w-2/3">
                <div className="flex justify-start lg:w-3/5 items-center lg:justify-center lg:items-start">
                  <FaSearchLocation className="w-10" />
                  <p className="px-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
                <div className="justify-start">
                  <div className="flex items-center p-2 my-2">
                    <FaPhone />
                    <h3 className="mx-2">+1-543-123-4567</h3>
                  </div>
                  <div className="flex items-center p-2 my-2">
                    <FaMailBulk />
                    <h3 className="mx-2">example@fylo.com</h3>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start m-4">
                <h1>About Us</h1>
                <h1>Jobs</h1>
                <h1>Press</h1>
                <h1>Blog</h1>
              </div>
              <div className="flex-col justify-start m-4">
                <h3>Contact Us</h3>
                <h3>Terms</h3>
                <h3>Privacy</h3>
              </div>
            </div>
            <div className="social-icons flex justify-center items-center m-4">
              <button className="w-8 h-8 rounded-full border text-[#ffffff] hover:text-[#65e2d9]">
                <FaInstagram className="m-auto" />
              </button>
              <button className="w-8 h-8 rounded-full border hover:text-[#65e2d9] mx-3">
                <FaTwitter className="m-auto" />
              </button>
              <button className="w-8 h-8 rounded-full border hover:text-[#65e2d9]">
                <FaFacebook className="m-auto" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Fylo;
