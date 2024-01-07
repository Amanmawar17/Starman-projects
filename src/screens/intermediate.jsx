import Card from "../Components/Card";

import joblisting from "../assets/job-listing-desktop-preview.jpg";
import urlshortening from "../assets/url-shortening-desktop-preview.jpg";
import iptracker from "../assets/ip-tracking-desktop-preview.jpg";
import spacetravel from "../assets/space-travel-preview.jpg";
import calculator from "../assets/calculator.jpg";
import product from "../assets/product-page-preview.jpg";
import chatapp from "../assets/chat-app-preview.jpg";
import comment from "../assets/comment-section.jpg";


const IntermediateData = [
  {
    id: 1,
    title: "IP address tracker",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "intermediate/iptracker",
    code: "",
    img: iptracker,
    tag: "md",
  },
  {
    id: 2,
    title: "Product Page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "intermediate/productpage",
    code: "",
    img: product,
    tag: "md",
  },
  {
    id: 3,
    title: "Sapce Travel",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "intermediate/spacetravel",
    code: "",
    img: spacetravel,
    tag: "md",
  },
  {
    id: 4,
    title: "Job listing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "intermediate/joblisting",
    code: "",
    img: joblisting,
    tag: "md",
  },
  {
    id: 5,
    title: "Url shortner",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "intermediate/urlshortening",
    code: "",
    img: urlshortening,
    tag: "md",
  },
  {
    id: 6,
    title: "Chat App Illustration",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "intermediate/chatapp",
    code: "",
    img: chatapp,
    tag: "md",
  },
  {
    id: 7,
    title: "Calculator",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "intermediate/calculator",
    code: "",
    img: calculator,
    tag: "md",
  },
  {
    id: 8,
    title: "Comment Section",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "intermediate/comment",
    code: "",
    img: comment,
    tag: "md",
  },
];

export default function Intermediate() {
  return (
    <>
      <div className="w-full min-h-screen py-10">
        <h1 className="text-3xl text-center text-secondary font-semibold">
          <span className="text-hoverColor">Intermediate</span> Project
        </h1>
        <Card details={IntermediateData} />
      </div>
    </>
  );
}
