import React from 'react'
import './DosanSectionTwoFourth.css'

function DosanSectionTwoFourth() {
  return (
    <section className="sec_2_fourth">
      <h3 data-aos="fade-up">SERVICE INFORMATION</h3>
      <div data-aos="fade-up" className="sec_2_4th_content">
        <div className="sec_2_4th_img_cover">
          <img
            src="./images/flagship/dosan/section2_4th_dosan_pc.jpg"
            alt="서비스인포"
          />
        </div>
        <div className="sec_2_4th_text_cover">
          <h4>
            피부 자생력을 높여주는 <br />
            <span>진생&제이드 터치</span>
          </h4>
          <p>
            피부 자생력을 높이는 인삼과 옥 어플리케어터의 시너지, <br />
            진생&제이드 터치. 몸의 반사구인 손부위에 피부 자생력을 <br />
            높이는 자음생크림과 연옥 어플리케어터를 이용하여 <br />
            지친 피부와 일상에 활력을 전달하는 핸드 케어 서비스 입니다.
          </p>
          <p className="time">
            <span>소요시간&nbsp;:&nbsp;30분</span>
          </p>
        </div>
        <div className="sec_2_4th_reservation">
          <a href="#">
            <span>예약 바로가기</span>
          </a>
        </div>
      </div>
      <div className="empty_bottom"></div>
    </section>
  )
}

export default DosanSectionTwoFourth
