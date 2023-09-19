import Card from "../components/card";

import fylodark from "../assets/fylodark.jpg";
import advicegen from "../assets/advicegenpreview.jpg";
import devfinder from "../assets/devfinderpreview.jpg";
import blogr from "../assets/blogrpreview.jpg";
import newsletter from "../assets/newsletter-desktop-preview.jpg";

const JuniorData = [
  {
    title: "Advice generator",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/junior/advicegen",
    code: "",
    img: advicegen,
    tag: "bi",
    id: 1,
  },
  {
    title: "Blogr landing page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/junior/blogr",
    code: "",
    img: blogr,
    tag: "bi",
    id: 2,
  },
  {
    title: "Devfinder",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/junior/devfinder",
    code: "",
    img: devfinder,
    tag: "bi",
    id: 3,
  },
  {
    title: "Newsletter sign-up form with success message",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "junior/newsletter",
    code: "",
    img: newsletter,
    tag: "bi",
    id: 4,
  },
  {
    title: "Fylo landing page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/junior/fylo",
    code: "",
    img: fylodark,
    tag: "bi",
    id: 5,
  },
];

export default function Junior() {
  return (
    <>
      <div className="w-full min-h-screen py-10">
        <h1 className="text-2xl text-center font-semibold">
          <span className="text-hoverColor">Junior</span> Project
        </h1>
        <Card details={JuniorData} />
      </div>
    </>
  );
}
