import { React, useState, useEffect } from "react";

const Section8 = () => {
  const [softBackgroundImg, setSoftBackgroundImg] = useState({});
  const [classicBackgroundImg, setClassicBackgroundImg] = useState({});
  const bgPath = {
    soft: {
      moBackground: {
        backgroundImage: `url("/images/ginseng/ginseng_cream_img_05_mo_kr.jpg")`,
      },
      pcBackground: {
        backgroundImage: `url("/images/ginseng/ginseng_cream_img_05_pc_kr.jpg")`,
      },
    },
    classic: {
      moBackground: {
        backgroundImage: `url("/images/ginseng/ginseng_cream_img_06_mo_kr.jpg")`,
      },
      pcBackground: {
        backgroundImage: `url("/images/ginseng/ginseng_cream_img_06_pc_kr.jpg")`,
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      let selectSoftStyle = bgPath.soft.moBackground;
      let selectClassicStyle = bgPath.classic.moBackground;

      if (window.innerWidth >= 751) {
        selectSoftStyle = bgPath.soft.pcBackground;
        selectClassicStyle = bgPath.classic.pcBackground;
      }
      setSoftBackgroundImg(selectSoftStyle);
      setClassicBackgroundImg(selectClassicStyle);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      class="ginseng-cream ginseng-section8"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="200"
    >
      <div class="cream-type-soft" style={softBackgroundImg}>
        <div class="text-wrap">
          <h4 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            첫 설화수 크림으로 추천
          </h4>
          <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
            자음생크림 소프트
          </h2>
          <ul data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
            <li>
              <span class="list-dot">아침, 저녁 언제나</span>
            </li>
            <li>
              <span class="list-dot">끈적임 없는 깔끔함</span>
            </li>
            <li>
              <span class="list-dot">산뜻한 인삼꽃향</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="cream-type-classic" style={classicBackgroundImg}>
        <div class="text-wrap">
          <h4 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            영양가 높은 크림 선물로 추천
          </h4>
          <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
            자음생크림 클래식
          </h2>
          <ul data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
            <li>
              <span class="list-dot">건조한 날씨, 저녁 세안 후</span>
            </li>
            <li>
              <span class="list-dot">쫀쫀하고 꾸덕함</span>
            </li>
            <li>
              <span class="list-dot">은은한 인삼향</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section8;
