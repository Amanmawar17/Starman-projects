import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Newbie from "./screens/newbie";
import Junior from "./screens/junior";
import Intermediate from "./screens/intermediate";
import Advanced from "./screens/advanced";

import About from "./components/about";
import ErrorPage from "./components/notfound";

import Baseapparel from "./components/newbie/baseapparel";
import Qrcode from "./components/newbie/qr-code";
import Fourcard from "./components/newbie/fourcards";

import Advicegen from "./components/junior/advicegen";
import Devfinder from "./components/junior/devfinder";
import Fylo from "./pages/fylo-dark";
import Blogr from "./pages/blogr";

import Iptracker from "./components/intermediate/IpTracker";

import Countries from "./components//advanced/countries";
import Promodor from "./components/advanced/promodor";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/newbie" active element={<Newbie />} />
        <Route path="/newbie/qrcard" active element={<Qrcode />} />
        <Route path="/newbie/fourcard" active element={<Fourcard />} />
        <Route path="/newbie/baseapparel" active element={<Baseapparel />} />

        <Route path="/junior" element={<Junior />} />
        <Route path="/junior/advicegen" element={<Advicegen />} />
        <Route path="/junior/devfinder" element={<Devfinder />} />
        <Route path="/junior/fylo" element={<Fylo />} />
        <Route path="/junior/blogr" element={<Blogr />} />

        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/intermediate/iptracker" element={<Iptracker />} />

        <Route path="/advanced" element={<Advanced />} />
        <Route path="/advanced/promodor" element={<Promodor />} />
        <Route path="/advanced/countries" element={<Countries />} />

        <Route Component={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
