import logo from "/fylo/logo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <>
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
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
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
    </>
  );
};

export default FooterSection;
