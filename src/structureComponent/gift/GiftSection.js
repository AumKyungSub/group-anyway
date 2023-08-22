import React from 'react'
import './gift_section.css'

function gift_section() {
  return (
    <section class="gift_section">
      <div class="gift_txt" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">
        <p>SULWHASOO GIFT</p>
        <h2>설화수의 특별한 선물</h2>
        <p class="tab_pc_only">설화수가 진심을 담아 준비한 포장 서비스, 지함보를 만나보세요.</p>
      </div>
      <div class="video_container" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500">
        <div class="content_box">
          <div class="video_section">
            <video id="video" src="./media/gift_video.mp4" loop muted preload="auto" controls></video>
          </div>
          <div class="poster_img"><img src="./images/gift/sulwhasoo_gift_intro_img_01_pc_kr_230705.jpg" alt="포스터이미지"></img></div>
          <div class="video_poster_txt">
            <p>손쉽게 재활용이 가능한</p>
            <h2>파우치 지함보</h2>
          </div>
          <button type="button" class="more_info">자세히 보기</button>
        </div>
        <div class="content_box">
          <div class="video_section">
            <video id="video" src="./media/gift_video02.mp4" loop muted preload="auto" controls></video>
          </div>
          <div class="poster_img"><img src="./images/gift/sulwhasoo_gift_intro_img_02_pc_kr_230705.jpg" alt="포스터이미지"></img></div>
          <div class="video_poster_txt">
            <p>예와 정성을 보여주는</p>
            <h2>사각보자기 지함보</h2>
          </div>
          <button type="button" class="more_info">자세히 보기</button>
        </div>
      </div>
    </section>
  )
}

export default gift_section
