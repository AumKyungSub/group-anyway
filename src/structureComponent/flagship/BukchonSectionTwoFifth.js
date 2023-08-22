import React from 'react'
import './BukchonSectionTwoFifth.css'

function BukchonSectionTwoFifth() {
  return (
    <section className="sec_2_fifth">
      <h3 data-aos="fade-up">
        THE HOUSE OF <br />
        SULWHASOO BUKCHON
      </h3>
      <div
        className="sec_2_fifth_content_cover"
        data-aos="fade-up"
      >
        <div className="map_dosan">
          <img
            src="./images/flagship/bukchon/bukchon_map_pc.png"
            alt="북촌 구글맵"
          />
        </div>
        <ul>
          <li data-aos="fade-up">
            <span>LOCATION</span>
            <div className="contact_cover_01">
              <p>서울시 종로구 북촌로 47</p>
              <p>(안국역 2번 출구, 가회동 성당 방면)</p>
            </div>
          </li>
          <li data-aos="fade-up">
            <span>HOURS</span>
            <dl className="contact_cover_02">
              <dt>운영시간</dt>
              <dd>
                매일, AM 10:00 - PM 7:00
                <br />
              </dd>
              <dt>휴무일</dt>
              <dd>
                매주 월요일 및 <br />
                1월 1일, 설, 추석 당일
              </dd>
            </dl>
          </li>
          <li data-aos="fade-up">
            <span>CONTACT</span>
            <div className="contact_cover_03">
              <p>
                02-762-5743 <br />
                *주차 불가 (인근 공영 주차장 이용)
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default BukchonSectionTwoFifth
