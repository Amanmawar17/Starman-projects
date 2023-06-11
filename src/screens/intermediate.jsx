import Card from "../components/card";

const IntermediateData = [
    {
      "title": "IP address tracker",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
      "preview": "",
      "code": "",
      "img": "",
      "tag": "md",
      "id": 1
    },
    {
      "title": "url shortner",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
      "preview": "",
      "code": "",
      "img": "",
      "tag": "md",
      "id": 2
    },
    {
      "title": "job listing",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
      "preview": "",
      "code": "",
      "img": "",
      "tag": "md",
      "id": 3
    }
  ]

  export default function Intermediate() {
    return <Card details={IntermediateData} />;
  }