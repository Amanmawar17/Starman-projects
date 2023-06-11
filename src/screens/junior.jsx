import Card from "../components/card";

import fylodark from "../assets/fylodark.jpg";

const JuniorData = [
  {
    title: "advice generator",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "http://localhost:5173/junior/advicegen",
    code: "",
    img: "",
    tag: "bi",
    id: 1,
  },
  {
    title: "devfinder",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "",
    code: "",
    img: "",
    tag: "bi",
    id: 2,
  },
  {
    title: "fylo landing page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "http://localhost:5173/junior/fylo",
    code: "",
    img: fylodark,
    tag: "bi",
    id: 3,
  },
  {
    title: "blogr landing page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "",
    code: "",
    img: "",
    tag: "bi",
    id: 4,
  },
];

export default function Junior() {
  return <Card details={JuniorData} />;
}
