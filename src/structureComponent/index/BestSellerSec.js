import React from 'react'
import './bestseller_sec.css'

function BestSeller_sec() {
  return (
    <section class="bestseller w1440">
          <picture>
            <source srcset="./images/main/bestseller_1440.jpg" media="(min-width: 768px)"></source>
            <img src="./images/main/bestseller_640.jpg" alt="베스트셀러"></img>
          </picture>
          <div class="bestseller_txt">
            <h2>베스트 셀러</h2>
            <p>건강하게 빛나고 힘 있게 채우는 <br/> 설화수의 시그니처 케어</p>
            <button>자세히 보기</button>
          </div>
        </section>
  )
}

export default BestSeller_sec
