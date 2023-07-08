import Card from "../components/card";

const AdvancedData = [
  {
    title: "Rest-countries-api ",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/advanced/countries",
    code: "",
    img: "",
    tag: "av",
    id: 1,
  },
  {
    title: "promodor app",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/advanced/promodor-app",
    code: "",
    img: "",
    tag: "av",
    id: 2,
  },
  {
    title: "Movie app",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "",
    code: "",
    img: "",
    tag: "av",
    id: 3,
  },
];

export default function Advanced() {
  return (<>
    <div className="w-full min-h-[85vh] py-10">
    <h1 className="text-2xl text-center font-semibold"><span className="text-hoverColor">Advanced</span> Project</h1>
      <Card details={AdvancedData} />
      </div>
  </>
  );
}
