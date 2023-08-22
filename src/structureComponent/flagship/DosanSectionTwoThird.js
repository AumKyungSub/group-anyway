import React, { useRef, useEffect, useState } from "react";
import './DosanSectionTwoThird.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function DosanSectionTwoThird() {
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


  return (
    <section className="sec_2_third">
      <h3 data-aos="fade-up">
        SULWHASOO DOSAN <br />
        FLOOR GUIDE
      </h3>
      <div data-aos="fade-up" className="slide_imgs">
        <div className="swiper mySwiper">
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
                src="./images/flagship/dosan/slide1.jpg"
                alt="슬라이드1"
              />
              <img
                src="./images/flagship/dosan/slide1_pc.jpg"
                alt="슬라이드1"
              />
              <div className="swiper-text">
                <span className="floor">B1F</span>
                <strong>
                  프리미엄 한방 안티에이징 스파 <span>SPA</span>
                </strong>
                <p>
                  뛰어난 안티에이징 효능을 선사하는 설화수의
                  <br />
                  스킨케어 상품들과 오랜 지혜가 담긴 비법으로,
                  <br />
                  안티에이징 케어를 경험하실 수 있습니다
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/dosan/slide2.jpg"
                alt="슬라이드2"
              />
              <img
                src="./images/flagship/dosan/slide2_pc.jpg"
                alt="슬라이드2"
              />
              <div className="swiper-text">
                <span className="floor">B1F</span>
                <strong>
                  프리미엄 한방 안티에이징 스파 <span>SPA</span>
                </strong>
                <p>
                  아시아의 전통에서 영감을 받은 독창적인 리추얼과 <br />
                  전통 소재의 옥, 호박, 백자, 자음단 볼 등의 특별한
                  <br />
                  트리트먼트 도구들은 효능을 배가시킵니다
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/dosan/slide3.jpg"
                alt="슬라이드3"
              />
              <img
                src="./images/flagship/dosan/slide3_pc.jpg"
                alt="슬라이드3"
              />
              <div className="swiper-text">
                <span className="floor">1F</span>
                <strong>
                  헤리티지 룸 <span>HERITAGE ROOM</span>
                </strong>
                <p>
                  과거에서 현재로 이어지는 설화수의 세계로 <br />
                  초대하는 공간으로 1966년부터 이어져온 <br />
                  설화수의 헤리티지를 느낄실 수 있습니다
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/dosan/slide4.jpg"
                alt="슬라이드4"
              />
              <img
                src="./images/flagship/dosan/slide4_pc.jpg"
                alt="슬라이드4"
              />
              <div className="swiper-text">
                <span className="floor">2F</span>
                <strong>
                  부띠끄 <span>BOUTIQUE ROOM</span>
                </strong>
                <p>
                  설화수 도산 플래그십 스토어 전용상품과 <br />
                  신상품, 시즌별 추천 상품을 만나보실 수 있습니다
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/dosan/slide5.jpg"
                alt="슬라이드5"
              />
              <img
                src="./images/flagship/dosan/slide5_pc.jpg"
                alt="슬라이드5"
              />
              <div className="swiper-text">
                <span className="floor">2F</span>
                <strong>
                  부띠끄 <span>BOUTIQUE ROOM</span>
                </strong>
                <p>
                  설화수의 모든 상품을 자유롭게 경험하며 <br />
                  편안하게 카운셀링을 받으실 수 있습니다
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/dosan/slide6.jpg"
                alt="슬라이드6"
              />
              <img
                src="./images/flagship/dosan/slide6_pc.jpg"
                alt="슬라이드6"
              />
              <div className="swiper-text">
                <span className="floor">2F</span>
                <strong>
                  기프트 서비스 <span>GIFT SERVICE</span>
                </strong>
                <p>
                  정중하게 예를 다하여 마음 깊이 복을 전하는 <br />
                  포장서비스 '지함보(智函褓)' 를 통해 설화수의 <br />
                  특별한 정성과 품격을 경험하실 수 있습니다
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/dosan/slide7.jpg"
                alt="슬라이드7"
              />
              <img
                src="./images/flagship/dosan/slide7_pc.jpg"
                alt="슬라이드7"
              />
              <div className="swiper-text">
                <span className="floor">3F</span>
                <strong>
                  vip 라운지 <span>VIP LOUNGE</span>
                </strong>
                <p>
                  설화수의 우수고객님을 위한 공간으로 <br />
                  차와 다과를 즐기며 편안하게 휴식하실 수 있습니다
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/dosan/slide8.jpg"
                alt="슬라이드8"
              />
              <img
                src="./images/flagship/dosan/slide8_pc.jpg"
                alt="슬라이드8"
              />
              <div className="swiper-text">
                <span className="floor">3F</span>
                <strong>
                  컬처 라운지 <span>CULTURE LOUNGE</span>
                </strong>
                <p>
                  설화수만의 문화와 향기를 느끼는 공간으로 <br />
                  다채로운 클래스를 만나보실 수 있습니다
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/dosan/slide9.jpg"
                alt="슬라이드9"
              />
              <img
                src="./images/flagship/dosan/slide9_pc.jpg"
                alt="슬라이드9"
              />
              <div className="swiper-text">
                <span className="floor">4F</span>
                <strong>
                  컨템포러리 한방 밸런스 스파 <span>SPA</span>
                </strong>
                <p>
                  설화수만의 한방 테크닉, 자연 채광이 가득한 <br />
                  트리트먼트 룸, 바쁜 일상에서 흐트러진 균형을 <br />
                  회복시키고 재충전을 선사합니다
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/dosan/slide10.jpg"
                alt="슬라이드10"
              />
              <img
                src="./images/flagship/dosan/slide10_pc.jpg"
                alt="슬라이드10"
              />
              <div className="swiper-text">
                <span className="floor">4F</span>
                <strong>
                  컨템포러리 한방 밸런스 스파 <span>SPA</span>
                </strong>
                <p>
                  도산공원을 바라보는 파크뷰 룸, <br />
                  릴렉세이션 라운지는 설화수 밸런스 <br />
                  스파만의 특화된 서비스를 제공합니다
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./images/flagship/dosan/slide11.jpg"
                alt="슬라이드11"
              />
              <img
                src="./images/flagship/dosan/slide11_pc.jpg"
                alt="슬라이드11"
              />
              <div className="swiper-text">
                <span className="floor">5F</span>
                <strong>
                  야외 라운지 <span>ROOFTOP</span>
                </strong>
                <p>
                  오감으로 자연을 만나는 야외 라운지로 <br />
                  따스한 바람과 청명한 하늘 아래서 <br />
                  진정한 휴식을 경험할 수 있습니다
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
                <span className="floor">B1F</span>
                <strong>
                  프리미엄 한방 안티에이징 스파 <span>SPA</span>
                </strong>
                <p>
                  뛰어난 안티에이징 효능을 선사하는 설화수의
                  <br />
                  스킨케어 상품들과 오랜 지혜가 담긴 비법으로,
                  <br />
                  안티에이징 케어를 경험하실 수 있습니다
                </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 1 ? "active" : ""
                }`}
              >
                <span className="floor">B1F</span>
                <strong>
                  프리미엄 한방 안티에이징 스파 <span>SPA</span>
                </strong>
                <p>
                  아시아의 전통에서 영감을 받은 독창적인 리추얼과 <br />
                  전통 소재의 옥, 호박, 백자, 자음단 볼 등의 특별한
                  <br />
                  트리트먼트 도구들은 효능을 배가시킵니다
                </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 2 ? "active" : ""
                }`}
              >
              <span className="floor">1F</span>
              <strong>
                헤리티지 룸 <span>HERITAGE ROOM</span>
              </strong>
              <p>
                과거에서 현재로 이어지는 설화수의 세계로 <br />
                초대하는 공간으로 1966년부터 이어져온 <br />
                설화수의 헤리티지를 느낄실 수 있습니다
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 3 ? "active" : ""
                }`}
              >
              <span className="floor">2F</span>
              <strong>
                부띠끄 <span>BOUTIQUE ROOM</span>
              </strong>
              <p>
                설화수 도산 플래그십 스토어 전용상품과 <br />
                신상품, 시즌별 추천 상품을 만나보실 수 있습니다
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 4 ? "active" : ""
                }`}
              >
              <span className="floor">2F</span>
              <strong>
                부띠끄 <span>BOUTIQUE ROOM</span>
              </strong>
              <p>
                설화수의 모든 상품을 자유롭게 경험하며 <br />
                편안하게 카운셀링을 받으실 수 있습니다
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 5 ? "active" : ""
                }`}
              >
              <span className="floor">2F</span>
              <strong>
                기프트 서비스 <span>GIFT SERVICE</span>
              </strong>
              <p>
                정중하게 예를 다하여 마음 깊이 복을 전하는 <br />
                포장서비스 '지함보(智函褓)' 를 통해 설화수의 <br />
                특별한 정성과 품격을 경험하실 수 있습니다
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 6 ? "active" : ""
                }`}
              >
              <span className="floor">3F</span>
              <strong>
                vip 라운지 <span>VIP LOUNGE</span>
              </strong>
              <p>
                설화수의 우수고객님을 위한 <br />
                공간으로 차와 다과를 즐기며 <br />
                편안하게 휴식하실 수 있습니다
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 7 ? "active" : ""
                }`}
              >
              <span className="floor">3F</span>
              <strong>
                컬처 라운지 <span>CULTURE LOUNGE</span>
              </strong>
              <p>
                설화수만의 문화와 향기를 느끼는 <br />
                공간으로 정기적으로 다채로운 <br />
                클래스를 만나보실 수 있습니다
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 8 ? "active" : ""
                }`}
              >
              <span className="floor">4F</span>
              <strong>
                컨템포러리 한방 밸런스 스파 <span>SPA</span>
              </strong>
              <p>
                설화수만의 한방 테크닉, 자연 채광이 가득한 <br />
                트리트먼트 룸, 바쁜 일상에서 흐트러진 균형을 <br />
                회복시키고 재충전을 선사합니다
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 9 ? "active" : ""
                }`}
              >
              <span className="floor">4F</span>
              <strong>
                컨템포러리 한방 밸런스 스파 <span>SPA</span>
              </strong>
              <p>
                도산공원을 바라보는 파크뷰 룸, <br />
                릴렉세이션 라운지는 설화수 밸런스 <br />
                스파만의 특화된 서비스를 제공합니다
              </p>
              </li>
              <li
                className={`text_list0 ${
                  activeSlideIndex === 10 ? "active" : ""
                }`}
              >
              <span className="floor">5F</span>
              <strong>
                야외 라운지 <span>ROOFTOP</span>
              </strong>
              <p>
                오감으로 자연을 만나는 야외 라운지로 <br />
                따스한 바람과 청명한 하늘 아래서 <br />
                진정한 휴식을 경험할 수 있습니다
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
        </div>
      </div>
    </section>
  )
}

export default DosanSectionTwoThird
