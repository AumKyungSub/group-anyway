import React from 'react'
import './SpaIntroImg.css'

function SpaIntroImg(props) {
  const {spaTitle} = props;
  return (
    <div className="spaPro_intro_img">
        <img src={spaTitle.IntroImg} alt={spaTitle.IntroImgAlt}/>
    </div>
  )
}

export default SpaIntroImg

SpaIntroImg.defaultProps = {
  IntroImg : "./images/spa_intro/spa_m/spa_intro_m.png",
  IntroImgAlt : "스파 타이틀 이미지"
}

