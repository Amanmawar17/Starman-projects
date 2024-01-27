import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/HomeSection/Home";
import Contact from "./components/ContactSection/Contact";
import Newbie from "./screens/Newbie";
import Junior from "./screens/Junior";
import Database from "./screens/Database";
import Miscellaneous from "./screens/Miscellaneous";

import NotFound from "./components/NotFound";

import QrCode from "./components/Newbie/QrCode";
import FourCard from "./components/Newbie/FourCards";
import BaseApparel from "./components/Newbie/BaseApparel";
import ProductReview from "./components/Newbie/ProductReview";
import ResultsSummary from "./components/Newbie/ResultsSummary";
import NftCard from "./components/Newbie/NftCard";
import Faq from "./components/Newbie/Faq";
import Article from "./components/Newbie/Article";

import Advicegen from "./components/Junior/AdviceGen";
import DevFinder from "./components/Junior/DevFinder/DevFinder";
import Newsletter from "./components/Junior/Newsletter";
import AgeCalculator from "./components/Junior/AgeCalculator/AgeCalculator";
import Fylo from "./pages/fylo/FyloDark";
import Blogr from "./pages/blogr/Blogr";

import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="newbie" element={<Newbie />} />
          <Route path="junior" element={<Junior />} />
          <Route path="database" element={<Database />} />
          <Route path="miscellaneous" element={<Miscellaneous />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        <Route path="newbie/qrcode" element={<QrCode />} />
        <Route path="newbie/fourcard" element={<FourCard />} />
        <Route path="newbie/baseapparel" element={<BaseApparel />} />
        <Route path="newbie/productreview" element={<ProductReview />} />
        <Route path="newbie/resultssummary" element={<ResultsSummary />} />
        <Route path="newbie/nftcard" element={<NftCard />} />
        <Route path="newbie/faq" element={<Faq />} />
        <Route path="newbie/article" element={<Article />} />

        <Route path="junior/advicegen" element={<Advicegen />} />
        <Route path="junior/devfinder" element={<DevFinder />} />
        <Route path="junior/newsletter" element={<Newsletter />} />
        <Route path="junior/agecalculator" element={<AgeCalculator />} />
        <Route path="junior/fylo" element={<Fylo />} />
        <Route path="junior/blogr" element={<Blogr />} />
      </Routes>
    </Router>
  );
}
