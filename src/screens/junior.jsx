import Card from "../components/Card";

import fylodark from "../assets/fylodark.jpg";
import advicegen from "../assets/advicegenpreview.jpg";
import devfinder from "../assets/devfinderpreview.jpg";
import blogr from "../assets/blogrpreview.jpg";
import newsletter from "../assets/newsletter-desktop-preview.jpg";
import age from "../assets/age.jpg";

const JuniorData = [
  {
    id: 1,
    title: "Advice generator",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/junior/advicegen",
    code: "",
    img: advicegen,
    tag: "bi",
  },
  {
    id: 2,
    title: "Blogr landing page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/junior/blogr",
    code: "",
    img: blogr,
    tag: "bi",
  },
  {
    id: 3,
    title: "Devfinder",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/junior/devfinder",
    code: "",
    img: devfinder,
    tag: "bi",
  },
  {
    id: 4,
    title: "Newsletter sign-up form with success message",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "junior/newsletter",
    code: "",
    img: newsletter,
    tag: "bi",
  },
  {
    id: 5,
    title: "Fylo landing page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/junior/fylo",
    code: "",
    img: fylodark,
    tag: "bi",
  },
  {
    id: 6,
    title: "Age Calculator",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/junior/agecalculator",
    code: "",
    img: age,
    tag: "bi",
  },
];

export default function Junior() {
  return (
    <>
      <div className="w-full min-h-screen py-10">
        <h1 className="text-3xl text-center text-secondary font-semibold">
          <span className="text-hoverColor">Junior</span> Project
        </h1>
        <section className="my-10 px-10">
          <div className="grid grid-cols-1 gap-14 grid-flow-row md:grid-cols-2 lg:grid-cols-3">
            {JuniorData.map((item, index) => <Card details={item} key={index} />)}
          </div>
        </section>
      </div>
    </>
  );
}
