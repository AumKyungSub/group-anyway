import React from "react";
import { Link } from "react-router-dom";

const Section3 = () => {
  const section3Img = {
    pc: `./images/ginseng/ginseng_cream_img_02_pc_kr.jpg`,
    mo: `./images/ginseng/ginseng_cream_img_02_mo_kr.jpg`,
  };
  return (
    <section className="ginseng-cream ginseng-section3" data-aos-delay="100">
      <div
        className="text-wrap"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <h2 className="ginsengName-kr">설화수 자음생크림</h2>
        <p className="ginsengName-en">CONCENTRATED GINSENG RENEWING CREAM EX</p>
        <p>독보적 인삼 헤리티지를 담은 안티에이징 크림</p>
        <div
          className="price-part"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <p className="price30">
            <span className="volume">30ml</span>
            150,000원
          </p>
          ㅣ
          <p className="price60">
            <span className="volume">60ml</span>
            270,000원
          </p>
        </div>
        <div className="btn-wrap">
          <Link
            to="#"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="600"
          >
            자세히 보기
          </Link>
          <Link
            to="#"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="700"
          >
            구매하러 가기
          </Link>
        </div>
      </div>
      <div className="product-img" data-aos="fade-up" data-aos-duration="1500">
        <picture>
          <source srcSet={section3Img.pc} media="(min-width: 751px)" />
          <img src={section3Img.mo} alt="자음생크림" />
        </picture>
      </div>
    </section>
  );
};

export default Section3;
