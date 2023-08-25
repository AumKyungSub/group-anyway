import React from "react";
import Gift from "./contentComponent/Gift.js";
import Home from "./contentComponent/Main.js";
import Product from "./contentComponent/Product.js";
import SpaProgram from "./contentComponent/SpaProgram.js";
import About from "./contentComponent/About.js";
import Ginseng from "./contentComponent/Ginseng.js";
import Yunjo from './contentComponent/Yunjo.js'
import SpaIntroducing from "./contentComponent/SpaIntroducing.js"
import FlagshipMain from './contentComponent/FlagshipMain.js';
import FlagshipDosan from './contentComponent/FlagshipDosan.js';
import FlagshipBukchon from './contentComponent/FlagshipBukchon.js';
import Index_Header from "./structureComponent/index/IndexHeader.js";
import Header from "./commonComponent/Header.js";
import Footer from "./commonComponent/Footer.js";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import TopBtn from './commonComponent/TopBtn.js';

function ConditionalHeader() {
  const location = useLocation();

  if (location.pathname === "/") {
    return <Index_Header />;
  } else {
    return <Header />;
  }

  return null; // 아무 헤더도 렌더링하지 않을 경우
}

function App() {
  return (
    <BrowserRouter>
      <ConditionalHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/spaprogram" element={<SpaProgram />} />
        <Route path="/spaintroducing" element={<SpaIntroducing />} />
        <Route path="/ginseng" element={<Ginseng />} />
        <Route path="/yunjo" element={<Yunjo />} />
        <Route path="/flagshipMain" element={<FlagshipMain />} />
        <Route path="/flagshipDosan" element={<FlagshipDosan />} />
        <Route path="/flagshipBukchon" element={<FlagshipBukchon />} />
      </Routes>
      <Footer />
      <TopBtn/>
    </BrowserRouter>
  );
}

export default App;
