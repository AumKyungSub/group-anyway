import React, { useRef, useEffect, useState } from "react";
import DosanSectionOne from '../structureComponent/flagship/DosanSectionOne';
import DosanSectionTwo from '../structureComponent/flagship/DosanSectionTwo';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./FlagshipMain.css";
import "./FlagshipDosan.css";

function FlagshipDosan() {
  useEffect(() => {
  AOS.init({
     // 여기에 원하는 설정 값을 넣을 수 있습니다.
     duration : 2000,
     offset: 150
  });
}, []);
  return (
    <main className="main_dosan">
      <DosanSectionOne/>
      <DosanSectionTwo/>
    </main>
  );
}

export default FlagshipDosan;
