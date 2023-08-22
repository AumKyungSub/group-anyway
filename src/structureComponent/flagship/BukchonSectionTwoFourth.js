import React from 'react'
import './BukchonSectionTwoFourth.css'

function BukchonSectionTwoFourth() {
  return (
    <section className="sec_2_fourth">
      <h3 data-aos="fade-up" className="aos-init">
        SERVICE INFORMATION
      </h3>
      <div data-aos="fade-up" className="sec_2_4th_content aos-init">
        <div className="sec_2_4th_img_cover ">
          <img
            src="./images/flagship/bukchon/buckshon_info_m.jpg"
            alt="서비스인포"
            className="dpNone_p"
          />
          <img
            src="./images/flagship/bukchon/buckshon_info_p.jpg"
            alt="서비스인포"
            className="dpNone_m"
          />
        </div>
        <div className="infor_text_cover">
          <div className="sec_2_4th_text_cover">
            <h4>
              북촌 설화수의 집 <br />
              <span>도슨트 투어</span>
            </h4>
            <p>
              예술과 헤리티지 정신으로 아름다움을 창조하는 <br />
              설화수의 대표 공간인 북촌 설화수의 집입니다. <br />
              1930년대 한옥에서 1960년대 양옥까지 <br />
              전통과 현대를 넘나들며 진화해온 <br />
              아름다움을 경험해보는 가이드 투어입니다.
            </p>
            <p className="time">
              <span>소요시간&nbsp;:&nbsp;20분</span>
              <br />
              한 타임에 한 팀만 진행되며, <br />한 팀은 최대 5인까지 예약
              가능합니다.
            </p>
          </div>
          <div className="sec_2_4th_reservation">
            <a href="#">
              <span>예약 바로가기</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BukchonSectionTwoFourth
