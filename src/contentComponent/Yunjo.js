import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './YunjoCommon.css';
import YunjoSec01 from "../structureComponent/yunjo/component/YunjoSec01";
import YunjoSec02 from "../structureComponent/yunjo/component/YunjoSec02";
import YunjoSec03 from "../structureComponent/yunjo/component/YunjoSec03";
import YunjoSec04 from "../structureComponent/yunjo/component/YunjoSec04";
import YunjoSec05 from "../structureComponent/yunjo/component/YunjoSec05";
import YunjoSec06 from "../structureComponent/yunjo/component/YunjoSec06";
import YunjoSec07 from "../structureComponent/yunjo/component/YunjoSec07";
import YunjoSec08 from "../structureComponent/yunjo/component/YunjoSec08";
import YunjoSec09 from "../structureComponent/yunjo/component/YunjoSec09";


function Yunjo() {
  useEffect(() => {
    // aos 라이브러리 초기화
    // useEffect 함수는 두 개의 인자를 받는다. -> 효과함수, 의존성 배열 
    AOS.init();
  },[]);
  const isMobile = window.innerWidth <= 767;
  const isPc = window.innerWidth >= 768;
  return (
    <div>
      <YunjoSec01 videoMobile={isMobile} videoPc={isPc}/>
      <YunjoSec02/>
      <YunjoSec03/>
      <YunjoSec04 videoMobile={isMobile} videoPc={isPc}/>
      <YunjoSec05/>
      <YunjoSec06/>
      <YunjoSec07/>
      <YunjoSec08 videoMobile={isMobile} videoPc={isPc}/>
      <YunjoSec09 mobile={isMobile} pc={isPc}/>
    </div>
  )
}

export default Yunjo