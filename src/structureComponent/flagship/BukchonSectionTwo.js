import React from "react";
import BukchonSectionTwoFirst from './BukchonSectionTwoFirst';
import BukchonSectionTwoSecond from './BukchonSectionTwoSecond';
import BukchonSectionTwoThird from './BukchonSectionTwoThird';
import BukchonSectionTwoFourth from './BukchonSectionTwoFourth';
import BukchonSectionTwoFifth from './BukchonSectionTwoFifth';

import './BukchonSectionTwo.css'

function BukchonSectionTwo() {
  return (
    <section className="sec_2">
      <BukchonSectionTwoFirst/>
      <BukchonSectionTwoSecond/>
      <BukchonSectionTwoThird/>
      <BukchonSectionTwoFourth/>
      <BukchonSectionTwoFifth/>
    </section>
  );
}

export default BukchonSectionTwo;
