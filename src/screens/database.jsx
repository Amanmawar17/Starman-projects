import Card from "../components/card";


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
        <h1 className="text-2xl text-center font-semibold">
          <span className="text-hoverColor">Database</span> Project
        </h1>
        <Card details={DatabaseData} />
      </div>
    </>
  );
}
