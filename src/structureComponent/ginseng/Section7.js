import { React, useState, useEffect } from "react";

const Section7 = () => {
  const [backgroundImg, setBackgroundImg] = useState({});

  const bgPath = {
    moBackground: {
      backgroundImage: `url("/images/ginseng/ginseng_cream_img_09_mo_kr.jpg")`,
    },
    pcBackground: {
      backgroundImage: `url("/images/ginseng/ginseng_cream_img_09_pc_kr.jpg")`,
    },
  };

  useEffect(() => {
    const handleResize = () => {
      let selectStyle = bgPath.moBackground;

      if (window.innerWidth >= 751) {
        selectStyle = bgPath.pcBackground;
      }
      setBackgroundImg(selectStyle);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="ginseng-cream ginseng-section7" style={backgroundImg}>
      <div className="inner-wrap">
        <div className="text-wrap">
          <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            4주 후 달라진 변화
          </p>
          <ul
            className="percentage"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <li className="percentage-list-01">
              <p className="list-num">+12.30%</p>
              <p className="list-desc">피부 치밀도 강화</p>
            </li>
            <li className="percentage-list-02">
              <p className="list-num">+10.26%</p>
              <p className="list-desc">탄력 개선</p>
            </li>
            <li className="percentage-list-03">
              <p className="list-num">-25.96%</p>
              <p className="list-desc">주름 개선</p>
            </li>
          </ul>
          <p
            className="detail-desc"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            자음생크림 소프트 인체 적용 시험 결과 (4주 사용 결과)
            <br />
            시험 대상 : 30-60세 여성 31명 | 시험기간 : 2021.3.3-5.3
            <br />
            시험 기관 : 피엔케이피부임상연구센타(주)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section7;
