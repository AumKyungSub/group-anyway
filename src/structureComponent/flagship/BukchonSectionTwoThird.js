import React, { useRef, useEffect, useState } from "react";
import './BukchonSectionTwoThird.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function BukchonSectionTwoThird() {
  // slidesPerView 설정시 슬라이드 이동 범위 설정을 위한 SwiperSlide (마진값 포함) 너비 구하기
    const [slideTotalWidth, setSlideTotalWidth] = useState(0);
    const slideRef = useRef(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
    const handleSlideChange = (swiper) => {
      setActiveSlideIndex(swiper.realIndex);
    };
  
    useEffect(() => {
      if (slideRef.current) {
        const slideWidth = slideRef.current.offsetWidth;
        const computedStyle = window.getComputedStyle(slideRef.current);
        const marginLeft = parseFloat(computedStyle.marginLeft);
        const marginRight = parseFloat(computedStyle.marginRight);
        const totalWidthWithMargin = slideWidth + marginLeft + marginRight;
  
        setSlideTotalWidth(totalWidthWithMargin);
      }
    }, []);
    
    /////////////////////////////////////////
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (swiper) {
            if (windowWidth >= 1024) {
            } else {
            }
            swiper.update();
        }
    }, [windowWidth, swiper, slideTotalWidth]);

    // 한옥 양옥 버튼 클릭시 각 슬라이드 보이고 가리기
  const [showFirstDiv, setShowFirstDiv] = useState(true);
  const [activeButton, setActiveButton] = useState(null);

  return (
    <section className="sec_2_third">
      <h3 data-aos="fade-up" className="aos-init aos-animate">
        SULWHASOO BUKCHON <br />
        ROOM GUIDE
      </h3>
      <div className="bukchon_tab_m aos-init aos-animate" data-aos="fade-up">
        <button className={`${activeButton !== 'button2' ? 'bukchon_tabs_active' : ''} ${activeButton === 'button1' ? 'bukchon_tabs_active' : ''}`} onClick={() => {
          setShowFirstDiv(true);
          setActiveButton('button1');
        }}>한옥</button>
        <button onClick={() => {
          setShowFirstDiv(false);
          setActiveButton('button2');
        }}
        className={activeButton === 'button2' ? 'bukchon_tabs_active' : ''}>양옥</button>
      </div>
      <div className="bukchon_tab_p aos-init aos-animate" data-aos="fade-up">
        <button 
  className={`${activeButton !== 'button2' ? 'bukchon_tabs_active' : ''} ${activeButton === 'button1' ? 'bukchon_tabs_active' : ''}`} onClick={() => {
          setShowFirstDiv(true);
          setActiveButton('button1');
        }}>한옥</button>
        <button onClick={() => {
          setShowFirstDiv(false);
          setActiveButton('button2');
        }}
        className={activeButton === 'button2' ? 'bukchon_tabs_active' : ''}>양옥</button>
      </div>
      {showFirstDiv ? (
      <div
        className="slide_imgs wrap-flagship-contents roomGuide1 aos-init aos-animate"
        data-aos-id="slide"
        data-aos="fade-up"
      >
        <div className="swiper mySwiper_h">
          {/* /////////////////////////////////////////////// */}
          <Swiper
            onSwiper={setSwiper}
            width={(windowWidth >= 1024) ? slideTotalWidth * 2 : slideTotalWidth * 2}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={(windowWidth >= 1024) ? {
                el: ".paging2",
                type: "progressbar"
              } : {
                el: ".paging1",
                type: "progressbar"
            }}
            navigation={(windowWidth >= 1024) ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              } : false
            }
            initialSlide={(windowWidth >= 1024) ? 0 : 0}
            centeredSlides={(windowWidth >= 1024) ? false : false}
            onSlideChange={handleSlideChange}
            speed={1000}
            slidesPerView={(windowWidth >= 1024) ? 2 : 2}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide ref={slideRef}>
              <img
                src="./images/flagship/bukchon/buckshon_slide1_h_m.jpg"
                alt="슬라이드1"
              />
              <img
                src="./images/flagship/bukchon/buckshon_slide1_h_p.jpg"
                alt="슬라이드1"
              />
              <div className="swiper-text">
                <strong>
                  갤러리 창 <span>Gallery CHANG</span>
                </strong>
                <p>
                  계절별로 바뀌는 <br />
                  설화수의 안목을 접할 수 있는 공간
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/bukchon/buckshon_slide2_h_m.jpg"
                alt="슬라이드2"
              />
              <img
                src="./images/flagship/bukchon/buckshon_slide2_h_p.jpg"
                alt="슬라이드2"
              />
              <div className="swiper-text">
                <strong>
                  응접실 <span>Reception</span>
                </strong>
                <p>
                  설화수의 취향이 담긴 따뜻한 환대를 <br />
                  받으며 여정을 시작하는 공간
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/bukchon/buckshon_slide3_h_m.jpg"
                alt="슬라이드3"
              />
              <img
                src="./images/flagship/bukchon/buckshon_slide3_h_p.jpg"
                alt="슬라이드3"
              />
              <div className="swiper-text">
                <strong>
                  공작실 <span>Craft</span>
                </strong>
                <p>
                  공예와 예술 작품으로 승화시킨 전통의 <br />
                  미감을 직접 체험하고 공감하는 공간
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/bukchon/buckshon_slide4_h_m.jpg"
                alt="슬라이드4"
              />
              <img
                src="./images/flagship/bukchon/buckshon_slide4_h_p.jpg"
                alt="슬라이드4"
              />
              <div className="swiper-text">
                <strong>
                  미전실 <span>Scene</span>
                </strong>
                <p>
                  시간과 이야기가 쌓아 올린 전통의 <br />
                  아름다움을 다양한 소품으로 표현한 공간
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/bukchon/buckshon_slide5_h_m.jpg"
                alt="슬라이드5"
              />
              <img
                src="./images/flagship/bukchon/buckshon_slide5_h_p.jpg"
                alt="슬라이드5"
              />
              <div className="swiper-text">
                <strong>
                  단장실 <span>Embelish</span>
                </strong>
                <p>
                  오랜 시간을 관통해 온 아름다움에 한 걸음 <br />더 다가가보는
                  꾸밈의 공간
                </p>
              </div>
            </SwiperSlide>
            <div className="play_bar">
              <div className="paging1"></div>
              <button className="start">시작 테스트</button>
              <button className="stop">정지 테스트</button>
            </div>
          </Swiper>
          <div className="swiper_text_pc swiper-pagination">
            <ul className="text_spot_unordered text_list_container">
              <li
                className={`text_list0 ${
                  activeSlideIndex === 0 ? "active" : ""
                }`}
              >
              <strong>
                갤러리 창 <span>Gallery CHANG</span>
              </strong>
              <p>
                계절별로 바뀌는
                <br />
                설화수의 안목을 접할 수 있는 공간
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 1 ? "active" : ""
                }`}
              >
              <strong>
                응접실 <span>Reception</span>
              </strong>
              <p>
                설화수의 취향이 담긴 따뜻한 환대를
                <br />
                받으며 여정을 시작하는 공간
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 2 ? "active" : ""
                }`}
              >
              <strong>
                공작실 <span>Craft</span>
              </strong>
              <p>
                공예와 예술 작품으로 승화시킨 전통의
                <br />
                미감을 직접 체험하고 공감하는 공간
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 3 ? "active" : ""
                }`}
              >
              <strong>
                미전실 <span>Scene</span>
              </strong>
              <p>
                시간과 이야기가 쌓아 올린 전통의
                <br />
                아름다움을 다양한 소품으로 표현한 공간
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 4 ? "active" : ""
                }`}
              >
              <strong>
                단장실 <span>Embellish</span>
              </strong>
              <p>
                오랜 시간을 관통해 온 아름다움에 한 걸음
                <br />더 다가가보는 꾸밈의 공간
              </p>
              </li>
            </ul>
           
            <div className="play_bar_pc">
              <div className="progress_spot_cover">
                <div className="paging2"></div>
                <button className="start">시작 테스트</button>
                <button className="stop">정지 테스트</button>
              </div>
              <div className="next_prev_spot_cover">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
          {/* /////////////////////////////////////////////// */}
        </div>
      </div>
      ) : (
      <div
        className="slide_imgs wrap-flagship-contents roomGuide2 aos-init aos-animat"
        data-aos-id="slide"
        data-aos="fade-up"
      >
        <div className="swiper mySwiper_y">
          {/* /////////////////////////////////////////////// */}
          <Swiper
            onSwiper={setSwiper}
            width={(windowWidth >= 1024) ? slideTotalWidth * 2 : slideTotalWidth * 2}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={(windowWidth >= 1024) ? {
                el: ".paging3",
                type: "progressbar"
              } : {
                el: ".paging1",
                type: "progressbar"
            }}
            navigation={(windowWidth >= 1024) ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              } : false
            }
            initialSlide={(windowWidth >= 1024) ? 0 : 0}
            centeredSlides={(windowWidth >= 1024) ? false : false}
            onSlideChange={handleSlideChange}
            speed={1000}
            slidesPerView={(windowWidth >= 1024) ? 2 : 2}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="./images/flagship/bukchon/buckshon_slide1_y_m.jpg"
                alt="슬라이드1"
              />
              <img
                src="./images/flagship/bukchon/buckshon_slide1_y_p.jpg"
                alt="슬라이드1"
              />
              <div className="swiper-text">
                <strong>
                  부티크 윤 <span>Boutique YUN</span>
                </strong>
                <p>
                  전용 상품을 비롯한 설화수의 집이 <br />
                  제안하는 추천 상품을 만나보는 공간
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/bukchon/buckshon_slide2_y_m.jpg"
                alt="슬라이드2"
              />
              <img
                src="./images/flagship/bukchon/buckshon_slide2_y_p.jpg"
                alt="슬라이드2"
              />
              <div className="swiper-text">
                <strong>
                  부티크 원 <span>Boutique ONE</span>
                </strong>
                <p>
                  설화수의 서사가 담긴 제품들을 <br />
                  자유롭게 경험해볼 수 있는 공간
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/bukchon/buckshon_slide3_y_m.jpg"
                alt="슬라이드3"
              />
              <img
                src="./images/flagship/bukchon/buckshon_slide3_y_p.jpg"
                alt="슬라이드3"
              />
              <div className="swiper-text">
                <strong>
                  지함보 <span>Jihambo</span>
                </strong>
                <p>
                  '지혜를 담은 함과 보자기'로 설화수만의 <br />
                  특별한 정성과 품격을 담아낸 포장 공간
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/bukchon/buckshon_slide4_y_m.jpg"
                alt="슬라이드4"
              />
              <img
                src="./images/flagship/bukchon/buckshon_slide4_y_p.jpg"
                alt="슬라이드4"
              />
              <div className="swiper-text">
                <strong>
                  설화살롱 <span>Salon</span>
                </strong>
                <p>
                  설화수의 취향이 담긴 글과 음악, 소품을 여유롭게 <br />
                  즐기며 지적인 아름다움을 채우는 공간
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/bukchon/buckshon_slide5_y_m.jpg"
                alt="슬라이드5"
              />
              <img
                src="./images/flagship/bukchon/buckshon_slide5_y_p.jpg"
                alt="슬라이드5"
              />
              <div className="swiper-text">
                <strong>
                  설화정원 <span>Garden</span>
                </strong>
                <p>
                  60년된 향나무와 새롭게 뿌리내린 식물들이 <br />
                  어우러진 전통과 현대를 잇는 산책의 공간
                </p>
              </div>
            </SwiperSlide>
            <div className="play_bar">
              <div className="paging1"></div>
              <button className="start">시작 테스트</button>
              <button className="stop">정지 테스트</button>
            </div>
          </Swiper>
          <div className="swiper_text_pc swiper-pagination">
            <ul className="text_spot_unordered text_list_container">
              <li
                className={`text_list0 ${
                  activeSlideIndex === 0 ? "active" : ""
                }`}
              >
              <strong>
                부티크 윤 <span>Boutique YUN</span>
              </strong>
              <p>
                전용 상품을 비롯한 설화수의 집이
                <br />
                제안하는 추천 상품을 만나보는 공간
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 1 ? "active" : ""
                }`}
              >
              <strong>
                부티크 원 <span>Boutique ONE</span>
              </strong>
              <p>
                설화수의 서사가 담긴 제품들을
                <br />
                자유롭게 경험해볼 수 있는 공간
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 2 ? "active" : ""
                }`}
              >
              <strong>
                지함보 <span>Jihambo</span>
              </strong>
              <p>
                ‘지혜를 담은 함과 보자기’로 설화수만의
                <br />
                특별한 정성과 품격을 담아낸 포장 공간
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 3 ? "active" : ""
                }`}
              >
              <strong>
                설화살롱 <span>Salon</span>
              </strong>
              <p>
                설화수의 취향이 담긴 글과 음악, 소품을 여유롭게
                <br />
                즐기며 지적인 아름다움을 채우는 공간
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 4 ? "active" : ""
                }`}
              >
              <strong>
                설화정원 <span>Garden</span>
              </strong>
              <p>
                60년된 향나무와 새롭게 뿌리내린 식물들이
                <br />
                어우러진 전통과 현대를 잇는 산책의 공간
              </p>
              </li>
            </ul>
           
            <div className="play_bar_pc">
              <div className="progress_spot_cover">
                <div className="paging2"></div>
                <button className="start">시작 테스트</button>
                <button className="stop">정지 테스트</button>
              </div>
              <div className="next_prev_spot_cover">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
          {/* /////////////////////////////////////////////// */}
        </div>
        <div className="play_bar">
          <div className="paging_y"></div>
          <button className="start">시작 테스트</button>
          <button className="stop">정지 테스트</button>
        </div>
      </div>
       )}
    </section>
  )
}

export default BukchonSectionTwoThird
