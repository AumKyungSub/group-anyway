import React, {useEffect, useState} from 'react'
import '../css//YunjoSec04.css'

function YunjoSec04({videoMobile, videoPc}) {
  const [videosource, setVideoSource] = useState(
    videoMobile ? "./media/yunjo_video/video_m/yunjo_video02_m.mp4" : "./media/yunjo_video/video_pc/yunjo_video02_pc.mp4",
    videoPc ? "./media/yunjo_video/video_pc/yunjo_video02_pc.mp4" : "./media/yunjo_video/video_m/yunjo_video02_m.mp4"
  );
  useEffect(() => {
    const videoPlay = () => {
      const videoResizer = window.innerWidth <= '767'
      ? "./media/yunjo_video/video_m/yunjo_video02_m.mp4"
      : "./media/yunjo_video/video_pc/yunjo_video02_pc.mp4"
      setVideoSource(videoResizer);
    };
    window.addEventListener('resize', videoPlay);
    return() => {
      window.removeEventListener('resize', videoPlay);
    }
  });
  return (
    <section className="yunjo_sec04">
        <h2 data-aos="fade-up" data-aos-duration="900">FIRST CARE ACTIVATING SERUM VI FILM</h2>
        <figure>
            <video key={videosource} muted loop autoPlay controls id="video02" data-aos="fade-up" data-aos-duration="950" data-aos-delay="100">
                <source src={videosource} type="video/mp4"/>
            </video>
        </figure>
    </section>
  )
}

export default YunjoSec04