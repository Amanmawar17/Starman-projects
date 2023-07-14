import Card from "../components/card";

import joblisting from "../assets/job-listing-desktop-preview.jpg";
import urlshortening from "../assets/url-shortening-desktop-preview.jpg";
import iptracker from "../assets/ip-tracking-desktop-preview.jpg";
import spacetravel from "../assets/space-travel-preview.jpg";

const IntermediateData = [
  {
    title: "IP address tracker",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "intermediate/iptracker",
    code: "",
    img: iptracker,
    tag: "md",
    id: 1,
  },
  {
    title: "Url shortner",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "intermediate/urlshortening",
    code: "",
    img: urlshortening,
    tag: "md",
    id: 2,
  },
  {
    title: "Sapce Travel",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "intermediate/spacetravel",
    code: "",
    img: spacetravel,
    tag: "md",
    id: 3,
  },
  {
    title: "Job listing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "intermediate/joblisting",
    code: "",
    img: joblisting,
    tag: "md",
    id: 3,
  },
];

export default function Intermediate() {
  return (
    <>
      <div className="w-full min-h-screen py-10">
        <h1 className="text-2xl text-center font-semibold">
          <span className="text-hoverColor">Intermediate</span> Project
        </h1>
        <Card details={IntermediateData} />
      </div>
    </>
  );
}
