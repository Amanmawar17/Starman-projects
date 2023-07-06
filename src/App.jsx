import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Newbie from "./screens/newbie";
import Junior from "./screens/junior";
import Intermediate from "./screens/intermediate";
import Advanced from "./screens/advanced";

import About from "./components/about";
import ErrorPage from "./components/notfound";

import Fourcard from "./components/newbie/fourcards";
import BaseApparel from "./components/newbie/baseapparel";
import QRcode from "./components/newbie/qr-code";

import Advicegen from "./components/junior/advicegen";
import Devfinder from "./components/junior/devfinder";
import Fylo from "./pages/fylo-dark";
import Blogr from "./pages/blogr";

import Countries from "./components/advanced/countries";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="/newbie" active element={<Newbie />}/>
          <Route path="/junior" element={<Junior />} />
          <Route path="/intermediate" element={<Intermediate />} />
          <Route path="/advanced" element={<Advanced />} />
        </Route>
        <Route path="about" element={<About />} />

        <Route path="newbie/qrcode" element={<QRcode />} />
        <Route path="newbie/fourcard" element={<Fourcard />} />
        <Route path="newbie/baseapparel" element={<BaseApparel />} />

        <Route path="junior/fylo" element={<Fylo />} />
        <Route path="junior/advicegen" element={<Advicegen />} />
        <Route path="junior/blogr" element={<Blogr />} />
        <Route path="junior/devfinder" element={<Devfinder />} />

        <Route path="advanced/rest-countries-api" element={<Countries />} />


        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

