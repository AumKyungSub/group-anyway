import React from 'react'
import './SpaIntroCommon.css';
import SpaIntro from './SpaIntro';
import SpaIntroImg from './SpaIntroImg';

function Main() {
  return (
    <main>
        <SpaIntroImg spaTitle = {SpaIntroImage}/>
        <SpaIntro spaImg = {SpaImage}/>
    </main>
  )
}

export default Main

const SpaIntroImage = {
  IntroImg : "./images/spa_intro/spa_m/spa_intro_m.png",
  IntroImgAlt : "스파 타이틀 이미지"
}

const SpaImage = {
  SpaImage01 : "./images/spa_intro/spa_m/intro_image01_m.png",
  SpaImage02 : "./images/spa_intro/spa_m/intro_image02_m.png",
  SpaImage03 : "./images/spa_intro/spa_m/intro_image03_m.png",
  SpaImage04 : "./images/spa_intro/spa_m/intro_image04_m.png",
  SpaImgAlt : "스파이미지"

}