import React from 'react';
import '../css/YunjoSec06.css';

function YunjoSec06() {
  return (
    <section className="yunjo_sec06">
        <div className="ginseng_img" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            <picture>
                <source srcSet="./images/yunjo/yunjo_pc/ginseng_pc.png" media="(min-width:768px)"/>
                <img src="./images/yunjo/yunjo_mobile/ginseng_m.png" alt="윤조 인삼"/>
            </picture>
        </div>
        <div className="ginseng_text">
            <h2 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">예술에 가까운 인삼 기술.</h2>
            <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">대지의 기운을 담은 정수, 인삼</h3>
            <p className="ginseng_p01" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                설화수는 피부를 위한 인삼을 끊임없이 연구합니다.<br/>
                윤조에센스 6세대는 인삼에 대한 독점 기술을 적용했습니다.
            </p>
            <p className="ginseng_p02" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                <span>*</span>&nbsp;500여 시간의 자연 숙성 과정을 통해 피부 효능 사포닌을 강화시킨 <br/>
                설화수 독점 기술 성분 Lymphanax<sup>™</sup>는 윤조에센스의 핵심 성분을<br/>
                부스팅하고, 피부 본연의 능력을 활성화시켜 줍니다. 
            </p>
        </div>
    </section>
  )
}

export default YunjoSec06