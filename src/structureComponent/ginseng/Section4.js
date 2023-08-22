import React, { useState, useEffect } from "react";

const Section4 = () => {
  const bgPath = {
    moBackground: {
      backgroundImage: `url('/images/ginseng/ginseng_cream_img_03_mo_kr.jpg')`,
    },
    pcBackground: {
      backgroundImage: `url("/images/ginseng/ginseng_cream_img_03_pc_kr.jpg")`,
    },
  };
  const [selectedStyle, setSelectedStyle] = useState({});

  useEffect(() => {
    const handleResize = () => {
      let selectStyle = bgPath.moBackground;
      if (window.innerWidth >= 751) {
        selectStyle = bgPath.pcBackground;
      }
      setSelectedStyle(selectStyle);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 핸들러 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="ginseng-cream ginseng-section4"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="200"
      style={{ ...bgPath.moBackground, ...selectedStyle }}
    >
      <div className="text-wrap">
        <h3 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          마치, 인삼 연금술.
        </h3>
        <h4 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
          세상에 없던 바르는 인삼 연구
        </h4>
        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
          1960년 대에 시작된 설화수의 뷰티 인삼 연구는 현재,
          <br />
          설화수 한방 과학 연구 센터에서 계속되고 있습니다.
        </p>
        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
          인삼의 유효 성분을 피부에 전달하는 바이오 컨버전 기술,
          <br />
          피부를 위한 희귀 인삼 사포닌을 농축한 진세노믹스™ 등<br />
          마치 연금술과 같은 첨단 인삼 과학 기술들을 적용하여
          <br />
          설화수 대표 안티에이징 크림, 자음생크림이 탄생했습니다.
        </p>
      </div>
    </section>
  );
};

export default Section4;
