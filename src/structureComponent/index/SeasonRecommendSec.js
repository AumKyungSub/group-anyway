import React from 'react'
import './seasonRecommend_sec.css'

function SeasonRecommend_sec() {
  return (
    <section class="season_recommend w1440">
          <h2>설화수 시즌추천</h2>
          <div class="card_section">
            <div class="card_section_container">
              <div class="card01 cardBox">
                <article><img src="./images/main/season01.png" alt="시즌제품1"></img></article>
                <div class="card01_txt">
                  <h3>자음생세럼</h3>
                  <p class="detail_info">Concentrated Ginseng Renewing Serum EX</p>
                  <p class="price">220,000원</p>
                </div>
              </div>
              <div class="card02 cardBox">
                <article>
                  <picture>
                    <source srcset="./images/main/season_640.jpg" media="(max-width: 767px)"></source>
                    <source srcset="./images/main/season_708.jpg" media="(min-width: 768px)"></source>
                    <img src="./images/main/season_708.jpg" alt="시즌제품2"></img>
                  </picture>
                  <div class="card02_txt">
                    <h3>자음생 듀오</h3>
                    <p>안티에이징의 결정체, 진세노믹스™ <br /> 자음생듀오로 피부 자생력을 키워주세요.</p>
                  </div>
                </article>
              </div>
              <div class="card03 cardBox">
                <article><img src="./images/main/season03.jpg" alt="시즌제품3"></img></article>
                <div class="card03_txt">
                  <h3>자음생크림</h3>
                  <p class="detail_info">Concentrated Ginseng Renewing Cream EX</p>
                  <p class="price">270,000원</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default SeasonRecommend_sec
