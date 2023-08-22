import React, { useState } from 'react';
import './DosanSectionTwoSecond.css'

function DosanSectionTwoSecond() {
  const [videoVisible, setVideoVisible] = useState(false);
  const [explanationVisible, setExplanationVisible] = useState(false);

  const handlePlayButtonClick = () => {
    setVideoVisible(true);
    setExplanationVisible(true);
  };

  return (
    <div className="sec_2_second ">
      <h3 data-aos="fade-up">DOSAN DESIGN STORY</h3>
      <div data-aos="fade-up" className="video_area_cover">
        {!videoVisible && (
          <button className="video_play_btn" onClick={handlePlayButtonClick}>
            플레이버튼
          </button>
        )}
        <div className="iframe_video " style={{ display: videoVisible ? 'block' : 'none' }}>
          <iframe
            id="flagshipDosan"
            src={`https://www.youtube.com/embed/qtiyw2AyYtU${videoVisible ? '?autoplay=1' : ''}`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="DOSAN HISTORY 유튜브 영상 재생"
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <div className="explanation " style={{ display: explanationVisible ? 'block' : 'none' }}>
          <div className="explanation_text ">
            <h4 className="">[자막]</h4>
            설화수 플래그십 스토어 디자인 스토리
            <br />- 안녕하세요,저는 Neri&Hu의 Lyndon Neri이며 Rossana Hu와
            저는 건축가입니다. <br />
            Lyndon NeriNeri&Hu Design and Research Office의 창립파트너{" "}
            <br />
            Design Republic의 창업자 <br />
            2006 I.D메거진의 '세계에서 주목해야 할 40명의 디자이너' 선정
            <br />
            2015 Maison&Objet Asia Designers of The Year <br />
            이번 프로젝트에 참여하면서 가졌던 동기와 인상 깊었던 점은?{" "}
            <br />- 우리는 아시아의 정신을 바탕으로 홀리스틱한 제품을
            만들고자 하는 설화수의 진정성과 의도에 깊이 매료되었습니다.{" "}
            <br />
            스토어 컨셉은 무엇인가요? <br />- 우리는 이 특별한 프로젝트에
            랜턴이라는 메타포를 사용하였습니다. 랜턴이란 빛을 담는
            그릇입니다. <br />
            설화수가 브랜드로서 자신만의 아이텐티티를 만들어낼 수 있어야
            하며 홀리스틱 제품에 담긴 의미와 브랜드의 정체성을 <br />이
            건물을 통해 세상에 전달할 수 있어야 한다고 생각했습니다. 그리고
            이러한 건축적인 공간 경험을 통해
            <br />
            설화수가 소비자들에게 제품에 대한 더 깊고 의미있는 경험을
            제공하기를 바랐습니다. <br />
            랜턴이라는 컨셉에 담긴 의미는?
            <br />- 랜턴은 빛을 간직한 그릇입니다. 우리는 이 프로젝트가
            하나의 상징이자 뜻 깊은 특별한 장소가 되기를 원하며 <br />
            설화수 브랜드 철학을 경험한 소비자들이 이 공간을 떠날 때
            오래도록 기억에 간직되는 곳이 되기를 열망합니다. <br />
            가장 특별하거나 인상 깊다고 생각하는 특징은? <br />- 건물 전체가
            브론즈빛 울타리로 둘러싸여 있어 빌딩에 들어서는 순간부터 꼭대기
            층까지
            <br />
            이를 전체적으로 경험할 수 있으며 이 경험은 어느 장소에서나 함께
            합니다. <br />
            설화수 플래그십 스토어를 찾는 고객들에게
            <br />- 저는 여러분들이 이 공간을 직접 방문해 경험하기를
            바랍니다. 그리고 이 곳에서 아름다움의 본질을 깊이 있게 경험
            하기를 바랍니다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default DosanSectionTwoSecond
