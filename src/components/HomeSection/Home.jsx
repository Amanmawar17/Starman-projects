import { Tilt } from "react-tilt";
import hero from "../../assets/starman-home.png";

export default function Home() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <>
      <main
        role="main"
        className="intro flex justify-evenly items-center h-[90vh] relative"
      >
        <div className="grid place-items-center h-full w-1/2 text-secondary">
          <div className="p-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl my-2">
              Project&#39;s Solutions of <br />
              <a href="https://www.frontendmentor.io/" target="_blank" rel="noreferrer">
                <span className="text-3xl font-sans md:text-4xl  text-accentColor underline cursor-pointer">
                  Frontend Mentor
                </span>
              </a>
            </h1>
            <p className="text-xl my-2 max-w-xl">
              I just made this site for
              <span className="text-hoverColor"> shwocasing</span> the
              components which i made for frontend practices, I took projects
              from the site Frontend Mentor.
            </p>
            <a href="https://frieden.me/" target="_blank" rel="noreferrer" >
              <button className="bg-card outline outline-1 outline-secondary hover:bg-secondary text-accentColor text-lg font-medium rounded px-6 py-2">
                Portfolio
              </button>
            </a>
          </div>
        </div>
        <div className="w-1/2 grid place-items-center">
          <Tilt option={defaultOptions}>
            <div className="m-auto">
              <img src={hero} alt="hero" />
            </div>
          </Tilt>
        </div>
      </main>
    </>
  );
}
