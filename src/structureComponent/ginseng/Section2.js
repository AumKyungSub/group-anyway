import React from "react";

const Section2 = () => {
  const section2Img = {
    mo: `../images/ginseng/ginseng_cream_img_01_mo_kr.jpg`,
    pc: `../images/ginseng/ginseng_cream_img_01_pc_kr.jpg`,
  };
  return (
    <section
      className="ginseng-cream ginseng-section2"
      data-aos="zoom-out"
      data-aos-duration="1500"
    >
      <div className="section2-img-part">
        <picture>
          <source srcSet={section2Img.pc} media="(min-width:751px)" />
          <img src={section2Img.mo} alt="mobile버전" />
        </picture>
      </div>
      <div className="text-wrap">
        <h4 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
          첨단 뷰티 인삼 과학의 힘
        </h4>
        <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">
          6년 연속
          <br className="mo_only" />
          안티에이징 크림 1위*
          <br />
          자음생크림
        </h2>
        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
          1960년대 시작된 뷰티 인삼 연구로부터 진화를 거듭해온
          <br />
          설화수 자음생크림은 이제 인삼 크림의 아이콘이 되었습니다.
        </p>
        <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500">
          피부를 위한 첨단 인삼 과학의 산물,
          <br />
          자음생크림으로 피부에 자생력을 충전하세요.
        </p>
        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
          *2017-2022 Beaute Research 한국 매출 기준
        </p>
      </div>
    </section>
  );
};

export default Section2;
