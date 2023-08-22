import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Ginseng.css";
import Section1 from "../structureComponent/ginseng/Section1";
import Section2 from "../structureComponent/ginseng/Section2";
import Section3 from "../structureComponent/ginseng/Section3";
import Section4 from "../structureComponent/ginseng/Section4";
import Section5 from "../structureComponent/ginseng/Section5";
import Section6 from "../structureComponent/ginseng/Section6";
import Section7 from "../structureComponent/ginseng/Section7";
import Section8 from "../structureComponent/ginseng/Section8";
import Section9 from "../structureComponent/ginseng/Section9";

const Ginseng = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <article id="ginseng-container">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </article>
  );
};

export default Ginseng;
