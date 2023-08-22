import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation ,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './recommend_sec.css'
import 'swiper/css';

function Recommend_sec() {
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
    <section className="recommend w1440">
        <h1>설화수 추천</h1>
        <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            loop={true}
            speed={1400}
            onSwiper={swiper => (swiperRef.current = swiper)} // 스와이퍼 인스턴스 저장
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                enabled: autoplayEnabled, // 자동재생 상태에 따라 자동재생 여부 결정
            }}
            navigation={{
                nextEl: '.swiper_button_next', // 다음 버튼 클래스
                prevEl: '.swiper_button_prev', // 이전 버튼 클래스
            }}
            pagination= {{
                el: ".recommend_progressbar",
                type: "progressbar",
            }}
            breakpoints= {{
                360: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  navigation: {
                    prevEl: '.swiper_button_prev',
                    nextEl: '.swiper_button_next',
                  },
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  slidesPerGroup: 3,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  slidesPerGroup: 3,
                },
            }}
            className="swiper recommend_card">
            <ul className="swiper-wrapper recommend_card_swiper">
                <SwiperSlide className="swiper-slide">
                    <img src="./images/main/recommend_slide01.jpg" alt="설화수추천제품"></img>
                    <div className="recommend_txt">
                        <h2>윤조에센스 <span>6</span>세대</h2>
                        <p>First Care Activating Serum VI</p>
                        <p className="price">140,000원</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="./images/main/recommend_slide02.jpg" alt="설화수추천제품"></img>
                    <div className="recommend_txt">
                        <h2>자음생크림</h2>
                        <p>Concentrated Ginseng Renewing Cream EX</p>
                        <p className="price">270,000원</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="./images/main/recommend_slide03.jpg" alt="설화수추천제품"></img>
                    <div className="recommend_txt">
                        <h2>자음생세럼</h2>
                        <p>Concentrated Ginseng Renewing Serum EX</p>
                        <p className="price">220,000원</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="./images/main/recommend_slide04.jpg" alt="설화수추천제품"></img>
                    <div className="recommend_txt">
                        <h2>순행클렌징오일</h2>
                        <p>Gentle Cleansing Oil</p>
                        <p className="price">47,000원</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="./images/main/recommend_slide05.jpg" alt="설화수추천제품"></img>
                    <div className="recommend_txt">
                        <h2>순행클렌징폼</h2>
                        <p>Gentle Cleansing Foam</p>
                        <p className="price">42,000원</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="./images/main/recommend_slide06.jpg" alt="설화수추천제품"></img>
                    <div className="recommend_txt">
                        <h2>백삼팩</h2>
                        <p>White Ginseng Radiance Refining Mask</p>
                        <p className="price">72,000원</p>
                    </div>
                </SwiperSlide>
            </ul>
            <button type="button" className="swiper-button swiper-button-sec2 swiper_button_prev"></button>
            <button type="button" className="swiper-button swiper-button-sec2 swiper_button_next"></button>
            <div className={`pagination_container recommend_container ${autoplayEnabled ? '' : 'paused'}`}>
                <div className="recommend_container_inner">
                    <div className="swiper-pagination recommend_progressbar"></div>
                    <button type="button" className={`recommend_pause ${autoplayEnabled ? '' : 'active'}`} onClick={toggleAutoplay}>
                        <span></span>
                    </button>
                </div>
            </div>
        </Swiper>
    </section>
  )
}

export default Recommend_sec
