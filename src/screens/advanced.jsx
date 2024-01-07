import Card from "../Components/Card";

import countries from "../assets/countries-desktop-preview.jpg";
import promodor from "../assets/promodor-preview.jpg";
import rps from "../assets/rps-preview.jpg";
import multi from "../assets/multi-step.jpg";

const AdvancedData = [
  {
    id: 1,
    title: "JWT Authentication",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "",
    code: "",
    img: "",
    tag: "av",
  },
  {
    id: 2,
    title: "One Click Sign-in",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "",
    code: "",
    img: "",
    tag: "av",
  },
  {
    id: 3,
    title: "Rest-countries-api ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/advanced/countries",
    code: "",
    img: countries,
    tag: "av",
  },
  {
    id: 4,
    title: "Promodor app",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "/advanced/promodor-app",
    code: "",
    img: promodor,
    tag: "av",
  },
  {
    id: 5,
    title: "Movie app",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "",
    code: "",
    img: "",
    tag: "av",
  },
  {
    id: 6,
    title: "Multi-step-form",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "",
    code: "",
    img: multi,
    tag: "av",
  },
  {
    id: 7,
    title: "Rock Paper Sicssor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "",
    code: "",
    img: rps,
    tag: "av",
  },
  
];

export default function Advanced() {
  return (
    <>
      <div className="w-full min-h-screen py-10">
        <h1 className="text-3xl text-center text-secondary font-semibold">
          <span className="text-hoverColor">Advanced</span> Project
        </h1>
        <Card details={AdvancedData} />
      </div>
    </>
  );
}
