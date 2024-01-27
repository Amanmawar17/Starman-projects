import Card from "../components/Card";


const MiscellaneousData = [
  {
    id: 1,
    title: "Open CV based Expression Detector",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/miscellaneous",
    code: "",
    img: "",
    tag: "av",
  },
  {
    id: 2,
    title: "Ethereum Based Smart Contract",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/miscellaneous",
    code: "",
    img: "",
    tag: "av",
  },
  {
    id: 3,
    title: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "",
    code: "",
    img: "",
    tag: "av",
  },
];

export default function Miscellaneous() {
  return (
    <>
      <div className="w-full min-h-screen py-10">
        <h1 className="text-3xl text-center text-secondary font-semibold">
          <span className="text-hoverColor">Miscellaneous</span> Project
        </h1>
        <section className="my-10 px-10">
          <div className="grid grid-cols-1 gap-14 grid-flow-row md:grid-cols-2 lg:grid-cols-3">
            {MiscellaneousData.map((item, index) => <Card details={item} key={index} />)}
          </div>
        </section>
      </div>
    </>
  );
}
