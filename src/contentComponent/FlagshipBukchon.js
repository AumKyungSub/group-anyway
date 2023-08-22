import React, {useEffect} from "react";
import BukchonSectionOne from "../structureComponent/flagship/BukchonSectionOne";
import BukchonSectionTwo from "../structureComponent/flagship/BukchonSectionTwo";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./FlagshipMain.css";
import "./FlagshipDosan.css";
import "./FlaghipBukchon.css";

function FlagshipBukchon() {
  useEffect(() => {
  AOS.init({
     // 여기에 원하는 설정 값을 넣을 수 있습니다.
     duration : 1000
    });
}, []);
  return (
    <main className="main_dosan main_bukchon">
      <BukchonSectionOne />
      <BukchonSectionTwo />
    </main>
  );
}

export default FlagshipBukchon;
