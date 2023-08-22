import React from 'react'
import './DosanSectionTwoFifth.css'

function DosanSectionTwoFifth() {
  return (
    <section className="sec_2_fifth">
      <h3 data-aos="fade-up">
        SULWHASOO DOSAN <br />
        FLAGSHIP STORE
      </h3>
      <div data-aos="fade-up" className="sec_2_fifth_content_cover">
        <div data-aos="fade-up" className="map_dosan">
          <img
            src="./images/flagship/dosan/map_dosan_pc.jpg"
            alt="도산 구글맵"
          />
        </div>
        <ul className="">
          <li className="li_top"></li>
          <li data-aos="fade-up" className="animate_pc">
            <span>LOCATION</span>
            <div className="contact_cover_01">
              <p>서울시 강남구 도산대로 45길 18</p>
              <p>설화수 도산 플래그십 스토어</p>
            </div>
          </li>
          <li data-aos="fade-up" className="animate_pc">
            <span>HOURS</span>
            <dl className="contact_cover_02">
              <dt className="no_mt">부띠끄</dt>
              <dd>
                - 운영시간 : 매일, AM 10:00 - PM 7:00
                <br />- 휴무일 : 매주 첫 번째 월요일, 1월1일, 설/추석 당일
                휴무
              </dd>
              <dt className="dtPadding">설화수 스파, 발란스 스파</dt>
              <dd className="no_pb">
                - 운영시간 : 매일, AM 10:00 - PM 8:00 <br />- 휴무일 : 매주
                첫 번째 월요일, 1월1일, 설/추석 당일 휴무
              </dd>
            </dl>
          </li>
          <li data-aos="fade-up" className="animate_pc">
            <span>CONTACT</span>
            <div className="contact_cover_03">
              <p className="contact">02-541-9270</p>
            </div>
          </li>
          <li data-aos="fade-up" className="animate_pc">
            <span>SPA RESERVATION</span>
            <div className="contact_cover_04">
              <p className="p_pt">Sulwhasoo Spa(B1) 02-541-9272</p>
              <p>Sulwhasoo Balance Spa(4F) 02-541-9273</p>
            </div>
          </li>
          <li className="li_top"></li>
        </ul>
      </div>
    </section>
  )
}

export default DosanSectionTwoFifth
