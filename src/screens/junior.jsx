import Card from "../components/card";

import fylodark from "../assets/fylodark.jpg";

const JuniorData = [
  {
    title: "Advice generator",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "http://localhost:5173/junior/advicegen",
    code: "",
    img: "",
    tag: "bi",
    id: 1,
  },
  {
    title: "Devfinder",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "http://localhost:5173/junior/devfinder",
    code: "",
    img: "",
    tag: "bi",
    id: 2,
  },
  {
    title: "Fylo landing page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "http://localhost:5173/junior/fylo",
    code: "",
    img: fylodark,
    tag: "bi",
    id: 3,
  },
  {
    title: "Blogr landing page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "http://localhost:5173/junior/blogr",
    code: "",
    img: "",
    tag: "bi",
    id: 4,
  },
];

export default function Junior() {
  return <Card details={JuniorData} />;
}
