import React from 'react';
import '../css/YunjoSec02.css';

function YunjoSec02() {
  return (
    <section className="yunjo_sec02">
      <div className="yunjo_first_care">
        <div className="first_care_img" data-aos="fade-down" data-aos-duration="2200" data-aos-delay="400">
          <picture>
            <source srcSet="./images/yunjo/yunjo_pc/first_care_pc.png" media="(min-width: 768px)"/>
            <img src="./images/yunjo/yunjo_mobile/first_care_m.png" alt="설화수 로션"/>
          </picture>
        </div>
        <div className="first_care_Text">
          <h2 data-aos="fade-up" data-aos-duration="1600">
              THE NEW <br className="mo"/>
              GENERATION
          </h2>
          <h3 data-aos="fade-up" data-aos-duration="1700">설화수 윤조에센스 6세대 출시</h3>
          <p className="first_p01" data-aos="fade-up" data-aos-duration="1800">
            2023년, 설화수 브랜드의 시작과 함께한 윤조에센스가<br className="mo"/>
            6세대로 또 한 번 진화합니다.
          </p>
          <p className="first_p02" data-aos="fade-up" data-aos-duration="1900">
            인삼의 힘으로 더욱 강력해진 SULWHASOO MASTER<br className="mo"/>
            COMPLEX<sup>™</sup><br/>
            놓여있는 것만으로도 당신의 취향과 안목을 <br className="mo"/>
            보여주는 새로운 디자인.
          </p>
          <p className="first_p03" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
            피부 능력을 깨워줄 6세대 윤조에센스를 지금 만나보세요.
          </p>
        </div>
      </div>
    </section>
  )
}

export default YunjoSec02