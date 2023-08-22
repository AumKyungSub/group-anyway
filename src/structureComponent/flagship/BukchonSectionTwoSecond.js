import React, { useRef, useState } from 'react';
import './BukchonSectionTwoSecond.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

function BukchonSectionTwoSecond() {
  const params = {
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 3500, // 2.5초마다 자동으로 슬라이드
      disableOnInteraction: false
    },
    speed: 1000, // 1초 동안 페이드 효과 적용 (원하는 시간으로 조정 가능)
    fadeEffect: {
      crossFade: true
    },
  };
  return (
    <div className="sec_2_second sec_2_second_m">
      <h3 data-aos="fade-up" className="dpNone_p">
        BUKCHON HISTORY
      </h3>
      <div className="sec_2_second_imgs_cover">
        <div className="sec_2_left_cover dTag">
          <div className="sec_2_second_text_cover" data-aos="fade-up">
            <h3 data-aos="fade-up" className="dpNone_m">
              BUKCHON HISTORY
            </h3>
            <div className="dpn_m_1">
              <strong>
                서울의 중심에서 전통의 가치를 지켜온 북촌.
                <br />
                북촌에 위치한 설화수의 집
              </strong>
              <p>
                전통과 현재가 아름답게 조화하는 북촌은
                <br />
                ‘Beauty From Culture’라는 문화 메세나 활동을 이어온
                <br />
                설화수의 철학과 맥을 같이합니다. 경복궁과 창덕궁 사이,
                <br />
                가회동 대로를 따라 천천히 걸어 올라오다 보면 주변 풍경과
                <br />
                자연스럽게 어우러진 한옥의 입구가 그 모습을 드러냅니다.
                <br />그 옛날, 구릉의 선을 따라 집의 형태를 만들었던 것처럼
                <br />
                한옥에서 양옥의 중정, 다시 정원과 연결된 1층으로
                <br />
                동선의 흐름이 이어집니다.
              </p>
            </div>
          </div>
          <div className="sec_2_second_img_1st">
            <span className="pc_img_1st">
              <img
                src="./images/flagship/bukchon/section2_2nd_img_1st_p.jpg"
                alt="북촌역사1"
                data-aos-offset="300"
                data-aos-duration="1500"
                data-aos="zoom-out"
              />
            </span>
            <span className="mobile_img_1st">
              <img
                src="./images/flagship/bukchon/section2_2nd_img_1st_m.jpg"
                alt="북촌역사1"
                data-aos="fade-right"
              />
            </span>
          </div>
          <div className="sec_2_second_img_2nd">
            <div className="swiper mySwiper_sec2_pc pc_img_1st">
              <Swiper  {...params}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="./images/flagship/bukchon/section2_2nd_img_4th_p1.jpg"
                    alt="북촌역사1"
                  />
                  </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./images/flagship/bukchon/section2_2nd_img_4th_p2.jpg"
                    alt="북촌역사1"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <span className="mobile_img_1st">
              <img
                src="./images/flagship/bukchon/section2_2nd_img_2nd_m.jpg"
                alt="북촌역사1"
                data-aos="fade-right"
              />
            </span>
          </div>
          <div className="dpn_m_2">
            <strong data-aos="fade-up">
              30년대 한옥과 60년대 양옥이 이어진 
              <br />
              설화수의 취향이 담긴 집
            </strong>
            <p data-aos="fade-up">
              아름다움을 향한 설화수의 여정은, 
              <br />
              1930년대에 지어진 한옥과 1960년대에 지어진 양옥을
              <br />
              하나로 연결하는 작업에서부터 시작합니다. 두 건물을
              <br />
              가로 막고 있던 축대를 해체하고 열린 중정을 만들어 
              <br />
              한옥과 양옥을 연결하였습니다. 전통의 미감에서 가치를
              <br />
              발견하는 특별한 취향을 가진 여성의 집을 꾸미듯 공간을
              <br />
              구성하고 각 공간의 아름다움을 고객이 직접 체험하고
              <br />
              향유할 수 있도록 하였습니다.
            </p>
          </div>
        </div>

        <div className="sec_2_right_cover dTag">
          <div className="sec_2_second_img_3rd">
            <div className="swiper mySwiper_sec2_pc pc_img_1st">
              <Swiper {...params}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="./images/flagship/bukchon/section2_2nd_img_1st_p1.jpg"
                    alt="북촌역사1"
                  />
                  </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./images/flagship/bukchon/section2_2nd_img_1st_p2.jpg"
                    alt="북촌역사1"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <span className="mobile_img_1st">
              <img
                src="./images/flagship/bukchon/section2_2nd_img_3rd_m.jpg"
                alt="북촌역사1"
                data-aos="fade-left"
              />
            </span>
          </div>
          <div className="sec_2_second_img_4th">
            <span className="pc_img_1st">
              <img
                src="./images/flagship/bukchon/section2_2nd_img_2nd_p.jpg"
                alt="북촌역사1"
                data-aos-offset="300"
                data-aos-duration="1500"
                data-aos="zoom-out"
              />
            </span>
            <span className="mobile_img_1st">
              <img
                src="./images/flagship/bukchon/section2_2nd_img_4th_m.jpg"
                alt="북촌역사1"
                data-aos="fade-left"
              />
            </span>
          </div>
          <div className="sec_2_second_img_5th dpNone_m">
            <span className="pc_img_1st">
              <img
                src="./images/flagship/bukchon/section2_2nd_img_3rd_p.jpg"
                alt="북촌역사1"
                data-aos-offset="300"
                data-aos-duration="1500"
                data-aos="zoom-out"
              />
            </span>
            <span className="mobile_img_1st">
              <img
                src="./images/flagship/bukchon/section2_2nd_img_4th_m.jpg"
                alt="북촌역사1"
                data-aos="fade-left"
              />
            </span>
          </div>
          <div className="dpn_m_3">
            <strong data-aos="fade-up">
              전통의 아름다움에
              <br />
              동시대적 세련미를 입힌 설화수의 집
            </strong>
            <p data-aos="fade-up">
              건축을 맡은 원오원 아키텍스의 최욱 소장은 
              <br />
              지붕과 바닥 사이의 열린 공간이 핵심이라는 결론 하에
              <br />
              한옥을 외부에서 투명하게 안이 들여다보이도록
              <br />
              설계하였습니다. 또한 전통의 가치를 지키기 위해 한옥의 
              <br />
              기둥과 서까래, 양옥의 기존 구조물들을 최대한 살리고
              <br />
              양옥 입구의 대리석과 벽 타일 등 당시 국내에서 구하기
              <br />
              힘들었던 소재들을 그대로 보존하여 설화수의 집을 완성합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="swiper_manual_cover" data-aos="fade-up">
        <div className="swiper mySwiper_manual">
          <Swiper
            loop={true}
            pagination={{
              el: ".swiper-pagination_manual"
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <strong>
                서울의 중심에서 전통의 가치를 지켜온 북촌.
                <br />
                북촌에 위치한 설화수의 집
              </strong>
              <p>
                전통과 현재가 아름답게 조화하는 북촌은
                <br />
                ‘Beauty From Culture’라는 문화 메세나 활동을 이어온
                <br />
                설화수의 철학과 맥을 같이합니다. 경복궁과 창덕궁 사이,
                <br />
                가회동 대로를 따라 천천히 걸어 올라오다 보면 주변 풍경과{" "}
                <br />
                자연스럽게 어우러진 한옥의 입구가 그 모습을 드러냅니다. <br />
                그 옛날, 구릉의 선을 따라 집의 형태를 만들었던 것처럼 <br />
                한옥에서 양옥의 중정, 다시 정원과 연결된 1층으로 <br />
                동선의 흐름이 이어집니다.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <strong>
                30년대 한옥과 60년대 양옥이 이어진 
                <br />
                설화수의 취향이 담긴 집
              </strong>
              <p>
                아름다움을 향한 설화수의 여정은, 
                <br />
                1930년대에 지어진 한옥과 1960년대에 지어진 양옥을
                <br />
                하나로 연결하는 작업에서부터 시작합니다. 두 건물을
                <br />
                가로 막고 있던 축대를 해체하고 열린 중정을 만들어 
                <br />
                한옥과 양옥을 연결하였습니다. 전통의 미감에서 가치를
                <br />
                발견하는 특별한 취향을 가진 여성의 집을 꾸미듯 공간을
                <br />
                구성하고 각 공간의 아름다움을 고객이 직접 체험하고
                <br />
                향유할 수 있도록 하였습니다.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <strong>
                전통의 아름다움에
                <br />
                동시대적 세련미를 입힌 설화수의 집
              </strong>
              <p>
                건축을 맡은 원오원 아키텍스의 최욱 소장은 
                <br />
                지붕과 바닥 사이의 열린 공간이 핵심이라는 결론 하에
                <br />
                한옥을 외부에서 투명하게 안이 들여다보이도록
                <br />
                설계하였습니다. 또한 전통의 가치를 지키기 위해 한옥의 
                <br />
                기둥과 서까래, 양옥의 기존 구조물들을 최대한 살리고
                <br />
                양옥 입구의 대리석과 벽 타일 등 당시 국내에서 구하기
                <br />
                힘들었던 소재들을 그대로 보존하여 설화수의 집을 완성합니다.
              </p>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination_manual"></div>
        </div>
      </div>
    </div>
  )
}

export default BukchonSectionTwoSecond
