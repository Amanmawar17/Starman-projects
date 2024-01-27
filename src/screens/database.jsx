import Card from "../components/Card";


const DatabaseData = [
  {
    title: "MongoDB Database ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/database/mongodb",
    code: "",
    img: "",
    tag: "av",
    id: 1,
  },
  {
    title: "SQL Database",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/database/sql-database",
    code: "",
    img: "",
    tag: "av",
    id: 2,
  },
  {
    title: "Postgresql Database",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "",
    code: "",
    img: "",
    tag: "av",
    id: 3,
  },
];

export default function Database() {
  return (
    <>
      <div className="w-full min-h-screen py-10">
        <h1 className="text-3xl text-center text-secondary font-semibold">
          <span className="text-hoverColor">Database</span> Project
        </h1>
        <section className="my-10 px-10">
          <div className="grid grid-cols-1 gap-14 grid-flow-row md:grid-cols-2 lg:grid-cols-3">
            {DatabaseData.map((item, index) => <Card details={item} key={index} />)}
          </div>
        </section>
      </div>
    </>
  );
}
