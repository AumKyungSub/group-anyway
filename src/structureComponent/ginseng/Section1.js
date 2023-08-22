import React from "react";

const Section1 = () => {
  const video = {
    mo: `./media/ginseng/video_1_mo.mp4`,
    pc: `./media/ginseng/video_1_pc.mp4`,
  };

  return (
    <section
      className="ginseng-cream ginseng-section1"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1500"
    >
      {/* <!-- Ginseng Title --> */}
      <div className="section1-title-wrap">
        <div className="ginseng-title">
          <h3>독보적 인삼 헤리티지를 담은 설화수 No.1* 크림</h3>
          <p>* 2022년 누계 국내 매출 기준</p>
          <h1 className="ginsengName-kr">설화수 자음생크림</h1>
          <h2 className="ginsengName-en">
            CONCENTRATED GINSENG RENEWING CREAM EX
          </h2>
        </div>
      </div>
      <div className="ginseng-movie ginseng-movie-mo">
        <video src={video.mo} autoPlay loop muted playsInline></video>
      </div>
      <div className="ginseng-movie ginseng-movie-pc">
        <video src={video.pc} autoPlay loop muted playsInline></video>
      </div>
    </section>
  );
};

export default Section1;
