import Card from "../Components/Card";

import qrcode from "../assets/qrcode.jpg";
import fourcard from "../assets/fourcardpreview.jpg";
import baseapparel from "../assets/baseapparelpreview.jpg";
import productreview from "../assets/product-desktop-preview.jpg";
import results from "../assets/results-desktop-preview.jpg";
import nftcard from "../assets/nft-card.jpg";
import faq from "../assets/faq-preview.jpg";
import article from "../assets/article-preview.jpg";

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
    id: 3,
    title: "Base apparel coming soon",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "newbie/baseapparel",
    code: "",
    img: baseapparel,
    tag: "nb",
  },
  {
    id: 4,
    title: "Product preview card component",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "newbie/productreview",
    code: "",
    img: productreview,
    tag: "nb",
  },
  {
    id: 5,
    title: "Results summary component",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "newbie/resultssummary",
    code: "",
    img: results,
    tag: "nb",
  },
  {
    id: 6,
    title: "Nft card",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "newbie/nftcard",
    code: "",
    img: nftcard,
    tag: "nb",
  },
  {
    id: 7,
    title: "Faq accordian",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "newbie/faq",
    code: "",
    img: faq,
    tag: "nb",
  },
  {
    id: 8,
    title: "Article",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisl nec libero facilisis sollicitudin. Vestibulum eget tempus sapien.",
    preview: "newbie/article",
    code: "",
    img: article,
    tag: "nb",
  },
];

export default function Newbie() {
  return (
    <>
      <div className="w-full min-h-screen py-10">
        <h1 className="text-3xl text-center text-secondary font-semibold">
          <span className="text-hoverColor">Newbie</span> Project
        </h1>
        <Card details={NewbieData} name="Newbie" />
      </div>
    </>
  );
}
