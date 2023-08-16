import React, {useEffect, useState} from 'react';
import '../css/YunjoSec08.css';

function YunjoSec08({videoMobile, videoPc}) {
    const [videoSource, setVideoSource] = useState(
        videoMobile ? "./media/yunjo_video/video_m/yunjo_video03_m.mp4" : "./media/yunjo_video/video_pc/yunjo_video03_pc.mp4",
        videoPc ? "./media/yunjo_video/video_pc/yunjo_video03_pc.mp4" : "./media/yunjo_video/video_m/yunjo_video03_m.mp4"
    );
    useEffect(() => {
        const videoPlay = () => {
            const videoResizer = window.innerWidth <= '767'
            ? "./media/yunjo_video/video_m/yunjo_video03_m.mp4"
            : "./media/yunjo_video/video_pc/yunjo_video03_pc.mp4"
            setVideoSource(videoResizer);
        };
        // 이벤트리스너
        window.addEventListener('resize', videoPlay);
        return() => {
            window.removeEventListener('resize', videoPlay);
        };
    });
  return (
    <div className="yunjo_sec08">
        <section className="essence_cover">
            <div className="cover_img" data-aos="zoom-out" data-aos-duration="2000" data-aos-offset="300">
                <picture>
                    <source srcSet="./images/yunjo/yunjo_pc/womanFace_pc.png" type="image/png" media="(min-width:768px)"/>
                    <img src="./images/yunjo/yunjo_mobile/womanFace_m.png" alt="에센스 바르는 여성"/>
                </picture>
            </div>
        <div className="cover_text" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="400" data-aos-delay="300">
            <h2>  
            눈 깜빡할 사이<br/>
            흡수.
            </h2>
            <p>
            피부와 친밀한 고유의 텍스쳐가<br/>
            순식간에 흡수되어 세안 후<br/>
            피부 컨디션을 빠르게 회복합니다.
            </p>
        </div>
        </section>
        <section className="yunjo_video03" >
        <figure>
            <video key={videoSource} muted loop autoPlay id="video03" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" data-aos-offset="300">
                <source src={videoSource} type="video/mp4"/>
            </video>
        </figure>
        </section>
    </div>
  )
}

export default YunjoSec08