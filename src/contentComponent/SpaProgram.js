import React from 'react'
import SectionSpa from '../structureComponent/spaPro/SectionSpa'
import SectionInfo from '../structureComponent/spaPro/SectionInfo'
import './SpaProgram.css'


const SpaProgram = () => {
  return (
    <main id="programs-container">
        {spaProgram.map( (spa) => {
          return (
          <SectionSpa 
              key={spa.id}
              id={spa.id}
              mainTitle={spa.mainTitle} 
              descTitle={spa.descTitle}
              descContent={spa.descContent}
              pcImg={spa.pcImg}
              moImg={spa.moImg}
              alt={spa.alt}
              moreContents={spa.moreContents}
          />)})}
        <SectionInfo />
    </main>
  )
}

export default SpaProgram

const spaProgram = [ {
  id : 'spa',
  mainTitle : "설화수 스파 플래그십 스토어",
  pcImg : "../images/spa/spa-program/sulwhasoo-spa-program_img01_pc_kr.jpg",
  moImg : "../images/spa/spa-program/sulwhasoo-spa-program_img01_mo_kr.jpg",
  alt : "spa-program1",
  descTitle : "설화수 헤리티지 스파",
  descContent : ["Work of art 같은 제품들로 이뤄진 설화수만의 리추얼들로","최상의 피부상태를 만들어 본연의 아름다움을 찾아줍니다."],
  moreContents : false,
},{
  id : 'balance',
  mainTitle : "설화수 밸런스 스파 플래그십 스토어",
  pcImg : "./images/spa/spa-program/sulwhasoo-spa-program_img02_pc_kr.jpg",
  moImg : "./images/spa/spa-program/sulwhasoo-spa-program_img02_mo_kr.jpg",
  alt : "spa-program2",
  descTitle : "설화수 컨템포러리 스파",
  descContent : ["자연 채광이 비치는 룸에서 이뤄지는 밸런스 스파만의 리추얼들이","건강한 에너지를 부여해 바쁜 일상에서의 재충전을 선사합니다."],
  moreContents : false,
},{
  id : 'hotel',
  mainTitle : "설화수 스파 롯데호텔 서울",
  pcImg : "./images/spa/spa-program/sulwhasoo-spa-program_img03_pc_kr.jpg",
  moImg : "./images/spa/spa-program/sulwhasoo-spa-program_img03_mo_kr.jpg",
  alt : "spa-program3",
  descTitle : "설화수 헤리티지 스파",
  descContent : ["Work of art 같은 제품들로 이뤄진 설화수만의 리추얼들로","최상의 피부상태를 만들어 본연의 아름다움을 찾아줍니다."],
  moreContents : false,
} 
]