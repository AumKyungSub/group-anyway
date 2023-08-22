import React from "react";

const Section5 = () => {
  const section5Video = {
    mo: `./media/ginseng/video_2_mo.mp4`,
    pc: `./media/ginseng/video_2_pc.mp4`,
  };
  return (
    <section className="ginseng-cream ginseng-section5">
      <div
        className="section5-title"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <p>CONCENTRATED GINSENG RENEWING CREAM EX FILM</p>
      </div>
      <div
        className="movie-wrap"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="300"
      >
        <div className="section5-movie ginseng-movie-mo">
          <video src={section5Video.mo} autoPlay controls muted playsInline />
        </div>
        <div className="section5-movie ginseng-movie-pc">
          <video src={section5Video.pc} autoPlay controls muted playsInline />
        </div>
      </div>
    </section>
  );
};

export default Section5;
