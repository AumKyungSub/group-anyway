import React from 'react'
import '../css/YunjoSec03.css'

function YunjoSec03() {
  return (
    <div id="yunjo_sec03">
        <section className="yunjo_essence_info">
            <div className="yunjo_essence_info_flex">
                <h2 data-aos="fade-up" data-aos-duration="900">
                <p>윤조에센스 6세대</p>
                <p>FIRST CARE ACTIVATING SERUM VI</p>
                <p>피부 본연의 능력을 깨우는 퍼스트 에센스</p>
                </h2>
                <h3 data-aos="fade-up" data-aos-duration="1500">
                60ml&nbsp;&nbsp;<span>105,000원</span>90ml&nbsp;&nbsp;<span>140,000원</span>
                </h3>
                <article>
                <button data-aos="fade-up" data-aos-duration="900" data-aos-delay="100">자세히 보기</button>
                <button data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">구매하러 가기</button>
                </article>
            </div>
        </section>
        <section className="yunjo_essence_img" data-aos="zoom-out" data-aos-duration="1500">
            <picture>
                <source src="./images/yunjo/yunjo_m/yunjo_essence_m.png" media="(max-width: 768px)"/>
                <img src="./images/yunjo/yunjo_pc/yunjo_essence_pc.png" alt="윤조에센스"/>
            </picture>
        </section>
    </div>
  )
}

export default YunjoSec03