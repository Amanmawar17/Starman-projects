import Card from "../components/card";

import qrcode from "../assets/qrcode.jpg";
import fourcard from "../assets/fourcard.jpg";
import baseapparel from "../assets/baseapparel.jpg";

const NewbieData = [
  {
    id: 1,
    title: "Qr-code",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "newbie/qrcode",
    code: "",
    img: qrcode,
    tag: "nb",
  },
  {
    title: "Four card section",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "newbie/fourcard",
    code: "",
    img: fourcard,
    tag: "nb",
    id: 2,
  },
  {
    title: "Base apparel coming soon",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "newbie/baseapparel",
    code: "",
    img: baseapparel,
    tag: "nb",
    id: 3,
  },
];

export default function Newbie() {
  return (<>
    <div className="w-full overflow-x-hidden overflow-y-scroll scroll-smooth no-scrollbar h-[85vh]">
    <h1 className="text-2xl text-center font-semibold"><span className="text-hoverColor">Newbie</span> Project</h1>
  <Card details={NewbieData} name="Newbie"/>
  </div>
  </>
  )
}
