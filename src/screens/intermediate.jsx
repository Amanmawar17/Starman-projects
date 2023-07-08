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
    return (<>
      <div className="w-full overflow-x-hidden overflow-y-scroll scroll-smooth no-scrollbar h-[85vh]">
      <h1 className="text-2xl text-center font-semibold"><span className="text-hoverColor">Intermediate</span> Project</h1>
        <Card details={IntermediateData} />
        </div>
    </>
    )
  }