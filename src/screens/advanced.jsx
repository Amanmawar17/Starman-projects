import Card from "../components/card";

const AdvancedData = [
  {
    title: "rest-countries-api ",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "",
    code: "",
    img: "",
    tag: "av",
    id: 1,
  },
  {
    title: "promodor app",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "",
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
  return <Card details={AdvancedData} />;
}
