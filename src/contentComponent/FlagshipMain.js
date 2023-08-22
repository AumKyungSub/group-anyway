import React from "react";
import "./FlagshipMain.css";
// import Header from "../commonComponent/Header";
import MainSectionOne from "../structureComponent/flagship/MainSectionOne";
import MainSectionTwo from "../structureComponent/flagship/MainSectionTwo";

function FlagshipMain() {
  return (
    <>
      <main className="main_main">
        <MainSectionOne />
        <MainSectionTwo />
      </main>
    </>
  );
}

export default FlagshipMain;
