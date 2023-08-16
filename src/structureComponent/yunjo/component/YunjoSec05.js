import React from 'react';
import '../css/YunjoSec05.css';

function YunjoSec05() {
  return (
    <section className="yunjo_sec05">
        <div className="detail_sec01">
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-offset="300">
                <h2>세안 후 순간, 그 놀라운 발견.</h2>
                <p>
                세안 후 피부 컨디션에 주목.<br/>
                '당긴다'고만 생각했던 이 순간은<br/>
                피부 노화가 시작되는 결정적 모멘트.
                </p>
            </div>
            <img src="./images/yunjo/yunjo_mobile/towelWoman_m.png" alt="수건으로닦는여자" data-aos="fade-up" data-aos-duration="1100" data-aos-offset="350"/>
        </div>
        <div className="detail_sec02" data-aos="fade-up" data-aos-duration="1100" data-aos-offset="400" >
            <h2 className="mo">
                윤조에센스,<br/>
                피부 능력을 깨우다.
            </h2>
            <img src="./images/yunjo/yunjo_mobile/lotionWoman_m.png" alt="로션들고있는여자"/>
            <h2 className="pc">
                윤조에센스,<br/>
                피부 능력을 깨우다.
            </h2>
        </div>
    </section>
  )
}

export default YunjoSec05