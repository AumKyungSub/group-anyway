import React from 'react'
import './SectionBelief.css';

function SectionBelief() {

  return (
    <section class="belief" id="belief">
        <div class="section_inner">
            <div class="section_body">
                <div class="section_text" data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                    <h1>our belief</h1>
                    <h2>
                        설화수의 시선은 부분이 아닌 전체를 바라봅니다.
                        <br/>
                        <span class="mo-margin"></span>
                        설화수는 겉으로 드러난 문제뿐 아니라
                        <br class="mo-only"/>
                        피부 속 근본 원인까지 주목합니다.
                        <br/>
                        <span class="mo-margin"></span>
                        우리는 피부의 자생력을 회복하는 것이 진정한 해결책이며
                        <br class="mo-only"/>
                        피부가 가진 잠재 능력을 활성화 하는 것이 피부 건강을 위한
                        <br class="mo-only"/>
                        첫 단계라고 생각합니다.
                        <br/>
                        <span class="mo-margin"></span>
                        이에 설화수는 피부 능력을 활성화하는 윤조에센스를 시작으로
                        <br class="mo-only"/>
                        피부를 위한 베스트 스킨케어 루틴을 제안합니다.
                    </h2>
                </div>
                <div class="section_img" data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                    <picture>
                        <source media="(max-width: 750px)" srcset="/images/about/brand_belief_content_img01_mo_kr_230511.jpg"/>
                        <source media="(min-width: 1023px)" srcset="/images/about/brand_belief_content_img01_pc_kr_230511.jpg"/>
                        <img src="/images/about/brand_belief_content_img01_pc_kr_230511.jpg" alt="이미지 설명"/>
                    </picture>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionBelief