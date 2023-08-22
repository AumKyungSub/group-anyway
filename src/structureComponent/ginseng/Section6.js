import { React, useState, useEffect } from "react";

const Section6 = () => {
  const [backgroundImg, setBackgroundImg] = useState({});

  const bgPath = {
    moBackground: {
      backgroundImage: `none`,
    },
    pcBackground: {
      backgroundImage: `url('/images/ginseng/ginseng_cream_img_08_pc_kr.jpg')`,
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

  const section6Img = {
    mo: `./images/ginseng/ginseng_cream_img_04_mo_kr.jpg`,
    pc: `./images/ginseng/ginseng_cream_img_04_pc_kr.jpg`,
  };

  return (
    <section className="ginseng-cream ginseng-section6" style={backgroundImg}>
      <div className="section6-img-wrap">
        <div
          className="section6-img-part"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          <picture>
            <source srcSet={section6Img.pc} media="(min-width:751px)" />
            <img src={section6Img.mo} alt="mobile버전" />
          </picture>
        </div>
        <div
          className="text-wrap"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <h3>
            자생력 충전으로
            <br />
            하루종일 힘 있는 피부
          </h3>
          <p>
            인삼의 힘이 자생력의 뿌리가 되어
            <br />
            시간의 흐름에도 흔들림 없는 피부를 선사합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section6;
