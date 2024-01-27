import { PiShareFatFill } from "react-icons/pi";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa6";
const Article = () => {
  return (
    <section className="h-screen bg-[#9eafc2] grid place-content-center">
      <div className="max-w-xs md:max-w-4xl flex flex-col md:flex-row items-center">
        <img
          src="/article/drawers.jpg"
          alt=""
          className="h-72
          max-[768px]:rounded-t-2xl md:rounded-l-2xl"
        />
        <div className="bg-[#fff] md:w-full p-4 md:p-10 h-64 md:h-72 md:rounded-r-2xl grid place-content-center items-center relative">
          <h3 className="text-[#48556a] text-2xl font-semibold">
            Shift the overall loook and feel by adding theses wonderful touches
            to furniture in your home
          </h3>
          <p className="text-[#6d7f97] text-sm my-2 md:my-6">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I`ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="md:flex justify-between items-center hidden">
            <div className="md:flex  ">
              <img
                src="/article/avatar-michelle.jpg"
                alt=""
                className="rounded-full w-10 h-10"
              />
              <div className="grid ml-2">
                <h3 className="font-medium text-[#48556a]">
                  Michelle Appleton
                </h3>
                <p className="text-[#6d7f97]">28 Jun 2020</p>
              </div>
            </div>
            <ul className="h-1/6">
              <li className="flex flex-col-reverse justify-center items-center group">
                <PiShareFatFill className="bg-[#6d7f97] text-[#fff] rounded-full w-8 h-8 p-2" />
                <ul className="hidden absolute group-hover:flex justify-evenly items-center bottom-20 -right-4 z-10 bg-[#48556a] p-2 rounded-2xl">
                  <li className="text-[#fff] mx-2">SHARE</li>
                  <li>
                    <FaFacebook className="bg-[#6d7f97] text-[#fff] rounded-full w-8 h-8 p-2" />
                  </li>
                  <li>
                    <FaTwitter className="bg-[#6d7f97] text-[#fff] rounded-full mx-2 w-8 h-8 p-2" />
                  </li>
                  <li>
                    <FaPinterest className="bg-[#6d7f97] text-[#fff] rounded-full w-8 h-8 p-2" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <ul className="bg-[#48556a] text-[#fff] flex md:hidden flex-row-reverse justify-evenly items-center rounded-b-2xl w-full py-2">
          <li>
            <PiShareFatFill className="bg-[#6d7f97] rounded-full w-8 h-8 p-2" />
          </li>
          <li>
            <FaPinterest className="bg-[#6d7f97] rounded-full w-8 h-8 p-2" />
          </li>
          <li>
            <FaTwitter className="bg-[#6d7f97] rounded-full w-8 h-8 p-2" />
          </li>
          <li>
            <FaFacebook className="bg-[#6d7f97] rounded-full w-8 h-8 p-2" />
          </li>
          <li className="text-[#fff]">SHARE</li>
        </ul>
      </div>
    </section>
  );
};

export default Article;
