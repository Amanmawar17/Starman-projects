import Card from "../components/card";

import fylodark from "../assets/fylodark.jpg";

const JuniorData = [
  {
    title: "Advice generator",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/junior/advicegen",
    code: "",
    img: "",
    tag: "bi",
    id: 1,
  },
  {
    title: "Devfinder",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/junior/devfinder",
    code: "",
    img: "",
    tag: "bi",
    id: 2,
  },
  {
    title: "Fylo landing page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/junior/fylo",
    code: "",
    img: fylodark,
    tag: "bi",
    id: 3,
  },
  {
    title: "Blogr landing page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/junior/blogr",
    code: "",
    img: "",
    tag: "bi",
    id: 4,
  },
];

export default function Junior() {
  return (<>
    <div className="w-full overflow-x-hidden overflow-y-scroll scroll-smooth no-scrollbar h-[85vh]">
    <h1 className="text-2xl text-center font-semibold"><span className="text-hoverColor">Junior</span> Project</h1>
      <Card details={JuniorData} />
      </div>
  </>
  )
}
