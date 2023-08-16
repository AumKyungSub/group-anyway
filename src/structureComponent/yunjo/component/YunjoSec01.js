import React, {useEffect, useState} from 'react';
import '../css/YunjoSec01.css';


function YunjoSec01({videoMobile, videoPc}) {
    //video js코드 변환
    const [videoSource, setVideoSource] = useState(
      videoMobile? './media/yunjo_video/video_m/yunjo_video01_m.mp4' : './media/yunjo_video/video_pc/yunjo_video01_pc.mp4',
      videoPc? './media/yunjo_video/video_pc/yunjo_video01_pc.mp4' : './media/yunjo_video/video_m/yunjo_video01_m.mp4'
    );
    useEffect(() => {
      const videoPlay = () => {
          const videoResizer =
            window.innerWidth <= '767'? './media/yunjo_video/video_m/yunjo_video01_m.mp4' : './media/yunjo_video/video_pc/yunjo_video01_pc.mp4';
            setVideoSource(videoResizer);
        }   
        window.addEventListener('resize', videoPlay);
        videoPlay();
        return () => {
            window.removeEventListener('resize',videoPlay);
        };
    },[videoMobile]);
  return (
    <section className="yunjo_sec01">
    <div className="yunjo_title">
      <h3 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">피부 능력을 깨우는 <span>FIRST STEP</span></h3>
      <div className="text_ani" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
        <h2>설화수 윤조에센스 6세대</h2>
        <p>FIRST CARE ACTIVATING SERUM VI</p>
      </div>
    </div>
    <div className="yunjo_video01">
      <figure>
        <video key={videoSource} loop muted autoPlay preload="auto" id="video01" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          <source src={videoSource} type="video/mp4"/>
        </video>
      </figure>
    </div>
  </section>
  )
}

export default YunjoSec01