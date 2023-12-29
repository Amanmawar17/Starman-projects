import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Newbie from "./Screens/Newbie";
import Junior from "./Screens/Junior";
import Intermediate from "./Screens/Intermediate";
import Advanced from "./Screens/Advanced";
import Database from "./Screens/Database";
import Miscellaneous from "./Screens/Miscellaneous";

import NotFound from "./Components/NotFound";

import QrCode from "./Components/Newbie/QrCode";
import FourCard from "./Components/Newbie/FourCards";
import BaseApparel from "./Components/Newbie/BaseApparel";
import ProductReview from "./Components/Newbie/ProductReview";
import ResultsSummary from "./Components/Newbie/ResultsSummary";
import NftCard from "./Components/Newbie/NftCard";
import Faq from "./Components/Newbie/Faq";
import Article from "./Components/Newbie/Article";

import Advicegen from "./Components/Junior/AdviceGen";
import DevFinder from "./Components/Junior/DevFinder/DevFinder";
import Newsletter from "./Components/Junior/Newsletter";
import AgeCalculator from "./Components/Junior/AgeCalculator/AgeCalculator";
import Fylo from "./Pages/FyloDark";
import Blogr from "./Pages/Blogr";

import IpTracker from "./Components/Intermediate/IpTracker";
import UrlShortening from "./Pages/UrlShortening";
import JobListing from "./Components/Intermediate/JobListing";
import SpaceTravel from "./Components/Intermediate/SpaceTravel/SpaceTravel";
import Calculator from "./Components/Intermediate/Calculator";
import ChatAppIllustration from "./Components/Intermediate/ChatAppIllustration";
import CommentSection from "./Components/Intermediate/CommentSection";
import ProductPage from "./Components/Intermediate/ProductPage";

import Countries from "./Components/Advanced/Countries";
import Promodor from "./Components/Advanced/Promodor";
import MultiStepForm from "./Components/Advanced/MultiStepForm";
import RockPaperSissor from "./Components/Advanced/RockPaperSissor";
import Start from "./Components/Start";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newbie" element={<Newbie />} />
        <Route path="/junior" element={<Junior />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/advanced" element={<Advanced />} />
        <Route path="/database" element={<Database />} />
        <Route path="/miscellaneous" element={<Miscellaneous />} />
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

      <Route path="intermediate/iptracker" element={<IpTracker />} />
      <Route path="intermediate/urlshortening" element={<UrlShortening />} />
      <Route path="intermediate/joblisting" element={<JobListing />} />
      <Route path="intermediate/spacetravel" element={<SpaceTravel />} />
      <Route path="intermediate/calculator" element={<Calculator />} />
      <Route path="intermediate/productpage" element={<ProductPage />} />
      <Route path="intermediate/chatapp" element={<ChatAppIllustration />} />
      <Route path="intermediate/commentsection" element={<CommentSection />} />

      <Route path="advanced/countries" element={<Countries />} />
      <Route path="advanced/promodor" element={<Promodor />} />
      <Route path="advanced/form" element={<MultiStepForm />} />
      <Route path="advanced/rps" element={<RockPaperSissor />} />
    </Routes>
  );
}
