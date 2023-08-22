import React, { useRef, useEffect, useState } from "react";
import DosanSectionTwoFirst from './DosanSectionTwoFirst';
import DosanSectionTwoSecond from './DosanSectionTwoSecond';
import DosanSectionTwoThird from './DosanSectionTwoThird';
import DosanSectionTwoFourth from './DosanSectionTwoFourth';
import DosanSectionTwoFifth from './DosanSectionTwoFifth';

import './DosanSectionTwo.css'

function DosanSectionTwo() {
  return (
    <section className="sec_2">
        <DosanSectionTwoFirst/>
        <DosanSectionTwoSecond/>
        <DosanSectionTwoThird/>
        <DosanSectionTwoFourth/>
        <DosanSectionTwoFifth/>
    </section>
  )
}

export default DosanSectionTwo
