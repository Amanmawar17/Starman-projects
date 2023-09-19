import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/home";
import Newbie from "./screens/newbie";
import Junior from "./screens/junior";
import Intermediate from "./screens/intermediate";
import Advanced from "./screens/advanced";
import Database from "./screens/database";

import About from "./components/about/about";
import NotFound from "./components/notfound";

import Baseapparel from "./components/newbie/baseapparel";
import Qrcode from "./components/newbie/qr-code";
import Fourcard from "./components/newbie/fourcards";
import ProductReview from "./components/newbie/ProductReview";
import ResultsSummary from "./components/newbie/ResultsSummary";

import Advicegen from "./components/junior/advicegen";
import Devfinder from "./components/junior/devfinder/devfinder";
import Newsletter from "./components/junior/Newsletter";
import Fylo from "./pages/fylo-dark";
import Blogr from "./pages/blogr";

import Iptracker from "./components/intermediate/IpTracker";
import UrlShortening from "./pages/UrlShortening";
import JobListing from "./components/intermediate/JobListing";
import SpaceTravel from "./components/intermediate/SpaceTravel/SpaceTravel";

import Countries from "./components//advanced/countries";
import Promodor from "./components/advanced/promodor";
import Front from "./components/Front";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Front />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newbie" element={<Newbie />} />
        <Route path="/junior" element={<Junior />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/advanced" element={<Advanced />} />
        <Route path="/database" element={<Database />} />
      </Route>
      <Route path="*" element={<NotFound />} />

      <Route path="newbie/qrcode" element={<Qrcode />} />
      <Route path="newbie/fourcard" element={<Fourcard />} />
      <Route path="newbie/baseapparel" element={<Baseapparel />} />
      <Route path="newbie/productreview" element={<ProductReview />} />
      <Route path="newbie/resultssummary" element={<ResultsSummary />} />

      <Route path="junior/advicegen" element={<Advicegen />} />
      <Route path="junior/devfinder" element={<Devfinder />} />
      <Route path="junior/newsletter" element={<Newsletter />} />
      <Route path="junior/fylo" element={<Fylo />} />
      <Route path="junior/blogr" element={<Blogr />} />

      <Route path="intermediate/iptracker" element={<Iptracker />} />
      <Route path="intermediate/urlshortening" element={<UrlShortening />} />
      <Route path="intermediate/joblisting" element={<JobListing />} />
      <Route path="intermediate/spacetravel" element={<SpaceTravel />} />

      <Route path="advanced/promodor" element={<Promodor />} />
      <Route path="advanced/countries" element={<Countries />} />
    </Routes>
  );
}
