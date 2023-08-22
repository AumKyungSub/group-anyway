import React from 'react'
import './Purpose.css';
function Purpose() {
      // 배경 이미지를 상태에 따라 변경합니다.
  const backgroundImage = window.innerWidth > 751 ? 
  "url('/images/about/brand_belief_visual_img_pc_kr_230511.jpg')" : 
  "url('/images/about/brand_belief_visual_img_mo_kr_230511.jpg')";

  return (
    <section class="purpose" style={{ backgroundImage }}>
        <p class="title">
            <span>BUILDING A WORLD OF BEAUTY</span>
            <br/>
            POWERED BY ART AND HERITAGE
        </p>
        <p class="subtitle">
            OUR PURPOSE
        </p>
        <p class="mtext">
            예술과 헤리티지 정신으로 아름다움을 창조합니다.
        </p>
        <p class="stext">
            우리의 고유한 헤리티지와 독자적인 피부 과학을 동력으로
            <br/>
            시간과 세대를 초월하는 예술 작품과도 같은 제품을 만들어 냅니다.
        </p>
        <p class="stext">
            세상 모든 사람들이 그들이 가진 헤리티지를 바탕으로
            <br/>
            자신만의 아름다움을 만들 수 있도록 영감을 불어넣을 것입니다.
        </p>
    </section>
  )
}

export default Purpose