import React from 'react'
import './SpaIntro.css'

function spaIntro(props) {
    const {spaImg} = props;
  return (
    <section className="spaPro_info_wrap">
      <div className="spaPro_info">
          <div className="spaPro_title_text">
              <h2>
                  예술과 헤리티지 정신으로<br className="mo"/>
                  아름다움을 전하는 설화수 스파
              </h2>
              <p>
                  헤리티지와 독자적인 피부과학으로 탄생한 work of art같은 제품들, <br className="pc"/>
                  피부를 깨워주는 테라피스트들의 섬세한 터지와 설화수만의 리추얼들로<br className="pc"/>
                  최상의 피부 상태를 만들어 피부 본연의 아름다움을 찾아줍니다.
              </p>
          </div>
          <div className="spaPro_guide">
              <article>
                  <div className="spaPro_img">
                      <img src={spaImg.SpaImage01} alt={spaImg.SpaImgAlt}/>
                  </div>
                  <div className="spaPro_text">
                      <h2>전신을 비움으로 전환, 설화동</h2>
                      <p>
                          설화볼(Sulwha Bowl)이 만들어내는 조화로운 파동이 70%
                          이상 물로 구성된 우리 전신을 이완시켜 비움의 상태로 
                          전환시켜줍니다.
                      </p>
                  </div>
              </article>
              <article>
                  <div className="spaPro_img">
                      <img src={spaImg.SpaImage02} alt={spaImg.SpaImgAlt}/>
                  </div>
                  <div className="spaPro_text">
                      <h2>불필요한 감정들을 정화, 설화정</h2>
                      <p>
                          조선시대 왕실에서 진행되었던 건포 마찰(순면으로 피부
                          문지르기) 의식과 설화수 대표 라인의 아름다운 4가지 향이
                          만나 잠든 감각들을 깨우고 감정들을 정화시켜 줍니다.
                      </p>
                  </div>
              </article>
              <article>
                  <div className="spaPro_img">
                      <img src={spaImg.SpaImage03} alt={spaImg.SpaImgAlt}/>
                  </div>
                  <div className="spaPro_text">
                      <h2>트리트먼트의 가장 첫 단계, 윤조 리추얼</h2>
                      <p>
                          핫스톤의 따뜻한 온기로 예술에 가까운 인삼 성분의 흡수를
                          도와주어 클렌징 후 떨어진 피부 컨디션을 끌어올리고 피부
                          본연의 능력을 활성화시켜줍니다.
                      </p>
                  </div>
              </article>
              <article>
                  <div className="spaPro_img">
                      <img src={spaImg.SpaImage04} alt={spaImg.SpaImgAlt}/>
                  </div>
                  <div className="spaPro_text">
                      <h2>트리트먼트 시너지 효과, 한국 전통 보석과 백자 마사저</h2>
                      <p>
                          피부를 건강하고 맑게 만들어준다고 알려진 옥, 순환을 도와
                          주는 백토로 만들어진 백자 등 한국 전통의 헤리티지 소재를
                          담은 스파 마사저가  work of art와 같은 설화수 제품들과 만
                          나 트리트먼트의 효과를 더해줍니다.
                      </p>
                  </div>
              </article>
          </div>
          <p className="spa_alert">
              설화수 스파는 (주)아모레퍼시픽과 프로모션 등 업무제휴 관계에
              있는 별도의 사업자의 매장으로 (주)아모레퍼시픽의 매장이 아닙니다
          </p>
      </div>
    </section>
  )
}

export default spaIntro

spaIntro.defaultProps = {
    SpaImage01 : "./images/spa_intro/spa_m/intro_image01_m.png",
    SpaImage02 : "./images/spa_intro/spa_m/intro_image02_m.png",
    SpaImage03 : "./images/spa_intro/spa_m/intro_image03_m.png",
    SpaImage04 : "./images/spa_intro/spa_m/intro_image04_m.png",
    SpaImgAlt : "스파이미지"
}