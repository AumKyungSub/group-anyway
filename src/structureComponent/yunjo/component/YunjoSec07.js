import React from 'react';
import '../css/YunjoSec07.css';

function YunjoSec07() {
  return (
    <section className="yunjo_sec07">
        <div className="yunjo_lotion_img" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            <picture>
                <source srcSet="./images/yunjo/yunjo_pc/threeLotion_pc.png" media="(min-width:768px)"/>
                <img src="./images/yunjo/yunjo_mobile/threeLotion_m.png" alt="윤조로션"/>
            </picture>
        </div>
        <div className="yunjo_lotion_text">
            <div data-aos="fade-up" data-aos-duration="1500">
                <h2>피부에 활력을 주는 핵심 성분.</h2>
                <h3>
                인삼의 힘으로 더욱 강력해진 윤조에센스의<br/>
                SULWHASOO MASTER COMPLEX<sup>™*</sup>
                </h3>
            </div>
            <ul className="lotion_effect" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                <li>
                <p className="effect_box">사용 후 <b>3일</b> 만에**</p>
                <div className="lotion_effect_flex">
                    <p>
                    건강한 피부층으로 유지시켜주는<br className="mo"/>
                    '피부 턴오버'가 개선됩니다.
                    </p>
                    <p>
                    손상된 피부 장벽이<br className="mo"/>
                    빠르게 개선됩니다.<sup>2)</sup> 
                    </p>
                </div>
                </li>
                <li>
                <p className="effect_box">사용 후 <b>4주</b> 후에**</p>
                <div className="lotion_effect_flex">
                    <p>
                    10가지 피부 노화 징후<sup>3)</sup>를<br className="mo"/>
                    개선합니다.
                    </p>
                    <p>
                    피부 본연의 능력이<br className="mo"/>
                    더 활성화됩니다.
                    </p>
                </div>
                </li>
            </ul>
            <ol data-aos="fade-up" data-aos-duration="1100" data-aos-delay="400">
                <li>
                * 원료 선별, 독자적 가공법, 배합 비율, 제조 시간 등 수많은 데이터에 근거한 
                설화수의 독자 기술 성분
                </li>
                <li>
                ** 1. 시험 기간 : 2022.08.22~2022.10.25 | 2. 시험 대상 : 만 30~60세 여성 30명
                3. 시험 기관 : (주)글로벌의학연구센터
                </li>
                <li>
                *** 1. 시험 기간 : 2022.08.22~2022.11.08 | 2. 시험 대상 : 만 20~60세 다인종 여성 33명 
                3. 시험 기관 : (주)글로벌의학연구센터
                </li>
            </ol>
            <ol data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                <li>
                1) 피부 턴오버 개선 +10.24% | 2) 손상 장벽 개선 +37.62%
                </li>
                <li>
                3) 피부 턴오버, 수분량, 장벽 기능, 주름, 리프팅, 모공, 윤기, 투명도, 피부결, 탄력
                </li>
            </ol>
        </div>
    </section>
  )
}

export default YunjoSec07