import React, { useState } from 'react'
import './footer.css'

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const getInfoHeight = () => {
    if (window.innerWidth < 768) {
      return '230px';
    } else {
      return '103px';
    }
  };
  return (
    <footer id='footer'>
        <section className="sns_area">
          <article><img src="./images/main/icon/sns_facebook.png" alt="페이스북"></img></article>
          <article><img src="./images/main/icon/sns_instagram.png" alt="인스타그램"></img></article>
          <article><img src="./images/main/icon/sns_youtube.png" alt="유튜브"></img></article>
          <article><img src="./images/main/icon/sns_kakao.png" alt="카카오채널"></img></article>
        </section>
        <div className="footer_info">
          <div className="footer_toggle">
            <span className="copyright">
              <i className="copy">©</i>
              <strong>AMOREPACIFIC</strong>
              CORPORATION. All rights reserved.
            </span>
            <div className={`toggle_btn ${isOpen?'is_open':''}`} onClick={() => {
              setIsOpen(!isOpen);
            }}>
            </div>
          </div>
          <div className="toggle_info" style={{ height: isOpen ? getInfoHeight() : '0px', overflow: 'hidden' }}>
            <div className="inner_info_container">
              <div className="inner_info">
                <span>회사소개</span>
                <span>서비스이용약관</span>
                <span>UGC이용약관</span>
                <span><strong>개인정보처리방침</strong></span>
                <span>영상정보처리방침</span>
                <span>사이트맵</span>
              </div>
              <div className="inner_info">
                <p>고객서비스센터(수신자요금부담) : 080-023-5454</p>
                <span>(월~금: AM 09:00~PM 06:00)</span>
              </div>
              <div className="footer_mark">
                <article><img src="./images/main/accessibility.png" alt="웹접근성마크"></img></article>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_container">
          <div className="footer_links">
            <div className="footer_links_txt">
              <p>회사소개</p>
              <p>서비스이용약관</p>
              <p>UGC이용약관</p>
              <p><strong>개인정보처리방침</strong></p>
              <p>영상정보처리방침</p>
              <p>사이트맵</p>
              <p>로그인</p>
            </div>
            <div className="footer_img">
              <article className="access_icon"><img src="./images/main/accessibility.png" alt="웹접근성마크"></img></article>
              <div className="footer_sns">
                <article><img src="./images/main/icon/sns_facebook.png" alt="페이스북"></img></article>
                <article><img src="./images/main/icon/sns_instagram.png" alt="인스타그램"></img></article>
                <article><img src="./images/main/icon/sns_youtube.png" alt="유튜브"></img></article>
                <article><img src="./images/main/icon/sns_kakao.png" alt="카카오채널"></img></article>
              </div>
            </div>
          </div>
          <div className="pc_footer_info">
            <div className="pc_cs_info">
              <span>고객서비스센터(수신자요금부담) : 080-023-5454 </span>
              <span>(월~금: AM 09:00~PM 06:00)</span>
            </div>
            <div className="footer_copyright">
              <p>
                <i className="copy_icon">©</i>
                <strong>AMOREPACIFIC</strong>
                 CORPORATION. All rights reserved.
              </p>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer
