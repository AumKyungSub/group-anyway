import React from 'react'
import './SpaIntroCommon.css';
import SpaIntro from '../structureComponent/spaIntro/SpaIntro';
import SpaIntroImg from '../structureComponent/spaIntro/SpaIntroImg';

function SpaIntroducing() {
  return (
    <main>
        <SpaIntroImg spaTitle = {SpaIntroImage}/>
        <SpaIntro spaImg = {SpaImage}/>
    </main>
  )
}

export default SpaIntroducing

const SpaIntroImage = {
  IntroImg : "./images/spa/spa_m/spa_intro_m.png",
  IntroImgAlt : "스파 타이틀 이미지"
}

const SpaImage = {
  SpaImage01 : "./images/spa/spa_m/intro_image01_m.png",
  SpaImage02 : "./images/spa/spa_m/intro_image02_m.png",
  SpaImage03 : "./images/spa/spa_m/intro_image03_m.png",
  SpaImage04 : "./images/spa/spa_m/intro_image04_m.png",
  SpaImgAlt : "스파이미지"

}