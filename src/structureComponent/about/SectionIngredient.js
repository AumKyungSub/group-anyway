import React from 'react'
import './SectionIngredient.css';

function SectionIngredient() {
  return (
    <section class="ingredient" id="ingredient">
        <div class="section_inner">
            <div class="section_body">
                <div class="section_text" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                <h1>
                    OUR INGREDIENT
                </h1>
                <h2>
                    예로부터 인삼은 동서양에서 탁월한 효능을 인정받은
                    <br class="mo-only"/>
                    전설적인 뿌리로 알려져 있습니다.
                    <br/>
                    <span class="mo-margin"></span>
                    “먹어서 좋은 인삼, 피부에 발라도 좋지 않을까?’ 라는
                    <br class="mo-only"/>
                    호기심에서 시작해 설화수의 건강한 피부를 위한 
                    <br class="mo-only"/>
                    인삼 연구는 멈추지 않고 이어졌습니다.
                    <br/>
                    <span class="mo-margin"></span>
                    우리는 인삼 연구 선구자로서 피부를 위한 인삼 연구를 거듭한 결과,
                    <br class="mo-only"/>
                    궁극의 안티에이징을 위한 인삼의 효능을 피부에 전달하는
                    <br class="mo-only"/>
                    해답을 찾아냈습니다.
                </h2>
                </div>
                <div class="section_img" data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                    <picture>
                        <source media="(max-width: 750px)" srcset="/images/about/brand_belief_content_img02_mo_kr_230511.jpg"/>
                        <source media="(min-width: 1023px)" srcset="/images/about/brand_belief_content_img02_pc_kr_230511.jpg"/>
                        <img src="/images/about/brand_belief_content_img02_pc_kr_230511.jpg" alt="이미지 설명"/>
                    </picture>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionIngredient