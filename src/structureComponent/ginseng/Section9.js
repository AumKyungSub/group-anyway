import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Section9 = () => {
  const [backgroundImage, setBackgroundImage] = useState({});

  const bgPath = {
    moBackground: {
      backgroundImage: `url("./images/ginseng/ginseng_cream_img_07_mo_kr.jpg")`,
    },
    pcBackground: {
      backgroundImage: `url("./images/ginseng/ginseng_cream_img_07_pc_kr.jpg")`,
    },
  };
  useEffect(() => {
    const handleResize = () => {
      let selectStyle = bgPath.moBackground;

      if (window.innerWidth >= 751) {
        selectStyle = bgPath.pcBackground;
      }
      setBackgroundImage(selectStyle);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const section9Img = {
    cream: {
      mo: `./images/ginseng/ginseng_cream_product_01_mo_kr.png`,
      pc: `./images/ginseng/ginseng_cream_product_01_pc_kr.png`,
    },
    serum: {
      mo: `./images/ginseng/ginseng_cream_product_02_mo_kr.png`,
      pc: `./images/ginseng/ginseng_cream_product_02_pc_kr.png`,
    },
  };

  return (
    <section
      className="ginseng-cream ginseng-section9"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="200"
      style={backgroundImage}
    >
      <div className="section9-product-part">
        <div className="inner-part-wrap">
          <ul>
            <li
              className="ginseng-cream-ex"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="400"
            >
              <picture>
                <source
                  srcSet={section9Img.cream.pc}
                  media="(min-width:751px)"
                />
                <img src={section9Img.cream.mo} alt="진생크림" />
              </picture>
              <div className="text-wrap">
                <p className="product-title-kr">설화수 자음생크림</p>
                <p className="product-title-en">
                  CONCENTRATED GINSENG RENEWING CREAM EX
                </p>
                <Link to="#">구매하러 가기</Link>
              </div>
            </li>
            <li
              className="ginseng-serum-ex"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="400"
            >
              <picture>
                <source
                  srcSet={section9Img.serum.pc}
                  media="(min-width:751px)"
                />
                <img src={section9Img.serum.mo} alt="진생크림" />
              </picture>
              <div className="text-wrap">
                <p className="product-title-kr">설화수 자음생세럼</p>
                <p className="product-title-en">
                  CONCENTRATED GINSENG RENEWING SERUM EX
                </p>
                <Link to="#">구매하러 가기</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section9;
