import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Navigation ,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './main_slide_sec.css'
import 'swiper/css';

function Main_Slide_sec() {
    const [autoplayEnabled, setAutoplayEnabled] = useState(true);
    const [paused, setPaused] = useState(false);
    const swiperRef = useRef(null);

    const toggleAutoplay = () => {
        const newPaused = !paused; // 새로운 paused 상태 계산
        setPaused(newPaused); // paused 상태 업데이트
        setAutoplayEnabled(!newPaused); // 자동재생 상태 업데이트

        const swiper = swiperRef.current;
        if (swiper) {
            if (newPaused) {
                swiper.autoplay.stop(); // 멈춤
            } else {
                swiper.autoplay.start(); // 재생
            }
        }
    };



  return (
    <section className="main_slide_sections">
        <Swiper 
            modules={[EffectFade, Pagination, Navigation, Autoplay]}
            onSwiper={swiper => (swiperRef.current = swiper)} // 스와이퍼 인스턴스 저장
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                enabled: autoplayEnabled, // 자동재생 상태에 따라 자동재생 여부 결정
            }}
            navigation={{
                nextEl: '.pc_swiper_next', // 다음 버튼 클래스
                prevEl: '.pc_swiper_prev', // 이전 버튼 클래스
            }}
            loop={true}
            effect={'fade'}
            speed={1000}
            pagination={{
                el: '.swiper-pagination',
                type: 'progressbar',
            }}

        className="mySwiper swiper-container">
            <ul className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                    <picture>
                        <source srcset="./images/main/slide01_1920.jpg" media="(min-width: 768px)"></source>
                        <img src="./images/main/slide01_768.jpg" alt="슬라이드01"></img>
                    </picture>
                    <div className="slide_text_wrap w1440">
                        <p>NEW BRAND FILM</p>
                        <h2>인삼, 아름다움 그리고 설화수</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide main_slide">
                    <picture>
                        <source srcset="./images/main/slide02_1920.jpg" media="(min-width: 768px)"></source>
                        <img src="./images/main/slide02_768.jpg" alt="슬라이드02"></img>
                    </picture>
                    <div className="slide_text_wrap">
                        <p>NEW GLOBAL AMBASSADOR</p>
                        <h2>설화수, 그리고 <span>TILDA</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide main_slide">
                    <picture>
                        <source srcset="./images/main/slide03_1920.jpg" media="(min-width: 768px)"></source>
                        <img src="./images/main/slide03_768.jpg" alt="슬라이드03"></img>
                    </picture>
                    <div className="slide_text_wrap">
                        <p>Sulwhasoo Flagship Store</p>
                        <h2><span>ROSÉ in BUKCHON</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide main_slide">
                    <picture>
                        <source srcset="./images/main/slide04_1920.jpg" media="(min-width: 768px)"></source>
                        <img src="./images/main/slide04_768.jpg" alt="슬라이드04"></img>
                    </picture>
                    <div className="slide_text_wrap">
                        <p>Concentrated Ginseng Renewing Cream EX</p>
                        <h2>자음생크림</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide main_slide">
                    <picture>
                        <source srcset="./images/main/slide05_1920.jpg" media="(min-width: 768px)"></source>
                        <img src="./images/main/slide05_768.jpg" alt="슬라이드05"></img>
                    </picture>
                    <div className="slide_text_wrap">
                        <p>SULWHASOO FIRST CARE ACTIVATING SERUM VI</p>
                        <h2>윤조에센스 <span>6</span>세대</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide main_slide">
                    <picture>
                        <source srcset="./images/main/slide06_1920.jpg" media="(min-width: 768px)"></source>
                        <img src="./images/main/slide06_768.jpg" alt="슬라이드06"></img>
                    </picture>
                    <div className="slide_text_wrap last_slide_text">
                        <p>Amore mall (7.24-7.30)</p>
                        <h2><span>BRAND WEEK</span></h2>
                    </div>
                </SwiperSlide>
            </ul>
            <button type="button" className="swiper-button pc_swiper_prev"></button>
            <button type="button" className="swiper-button pc_swiper_next"></button>
            <div className={`pagination_container ${autoplayEnabled ? '' : 'paused'}`}>
                <div className="pagination_container_inner">
                    <div className="swiper-pagination progressbar"></div>
                    <button type="button" className={`pause ${autoplayEnabled ? '' : 'active'}`} onClick={toggleAutoplay}>
                        <span></span>
                    </button>
                </div>
            </div>
        </Swiper>
    </section>
  )
}

export default Main_Slide_sec
