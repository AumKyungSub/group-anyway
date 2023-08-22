import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import './withSulwhasoo_sec.css'

function WithSulwhasoo_sec() {
  return (
    <section className="sns_review w1440">
      <div className="with_sulwhasoo">
        <h2>#With Sulwhasoo</h2>
        <Swiper
            modules={[Navigation]}
            loop={true}
            breakpoints= {{
                360: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                  loopPreventsSlide: false,
                  loopFillGroupWithBlank: true,
                  loopedSlides: 4,
                },
                768: {
                  slidesPerView: 'auto',
                  spaceBetween: 10,
                  navigation: {
                    prevEl: '.sns_button_prev',
                    nextEl: '.sns_button_next',
                  }
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                  slidesPerGroup: 2,
                  navigation: {
                    prevEl: '.sns_button_prev',
                    nextEl: '.sns_button_next',
                  },
                },
            }}
            className="swiper withSwiper">
          <div className="swiper-wrapper with_img_container">
            <SwiperSlide className="swiper-slide with_img">
              <div className="img_section">
                <img src="./images/main/sns01.webp" alt="sns"></img>
                <FontAwesomeIcon icon={faBagShopping} className="circle_icon" />
              </div>
              <div className="hover_content">
                <div className="sns_info">
                </div>
                <div className="sns_txt">
                  <p className="user_id">@m_m_korea</p>
                  <p className="user_caption">・
                    もらった洗顔のサンプルが良すぎて
                    メガ割りで 現品購入した sulwhasoo.official が届きました🗃️
                    
                    ジェルクレンザーだし
                    とくにもちもちの泡🫧が!とかじゃないんですが、
                    これで洗顔すると、小鼻のザラつきもお肌のゴワつきも一瞬で無かったことになったのてビックリしました😳 
                    
                    なのに洗い上がりのお肌はしっとり保湿されていて
                    スーパー乾燥肌な私でも
                    すぐに「化粧水、化粧水、」とならなかったのが本当に不思議✨
                    
                    漢方特有の匂いは好みが別れますが、わたしは逆にリラックスできる
                    この香りがすきです🌿 
                    ・
                    ・
                    #スキンケア #洗顔 #ジェルクレンザー #sulwhasoo #漢方 #エイジングケア #毛穴ケア #乾燥肌 #乾燥肌にオススメ #アラフォー美容 #韓国コスメ #韓国スキンケア
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide with_img">
              <div className="img_section">
                <img src="./images/main/sns02.webp" alt="sns"></img>
                <FontAwesomeIcon icon={faBagShopping} className="circle_icon" />
              </div>
              <div className="hover_content">
                <div className="sns_info">
                </div>
                <div className="sns_txt">
                  <p className="user_id">@b0.ri</p>
                  <p className="user_caption">
                    #유료광고 sulwhasoo.official
                    저의 첫 안티에이징을 함께한 설화수를 소개할게요!🧡
                    이제껏 두껍고 텁텁한 제형을 좋아하지 않아 안티에이징을 멀리 했었는데요..😔
                    저처럼 가볍고 산뜻한 제형을 좋아하는 분들에게 설화수 윤조에센스와 자음생 듀오를 추천합니다.
                    긴 시간 사랑받아온 클래식한 브랜드이자 개인적으로 오랜 기간 좋아한 브랜드라 큰 기대감을 안고 써봤는데요. 
                    일단 제형 자체가 촉촉하고 산뜻해 부담 없이 매일 아침저녁으로 사용하기 좋아요. 눈에 띄게 좋았던 점은 피부 결 개선이었어요. 마치 푹 자고 일어난 듯 촘촘하게 차오른 피부 컨디션이랄까?
                    더위에 지쳐있던 피부가 건강함을 되찾은 느낌이더라구요.
                    설화수에서 인삼 연구만 50년을 넘게 했다고 하는데, 그 인삼 성분이 들어간 윤조에센스, 자음생세럼, 자음생크림 루틴으로 데일리 안티에이징 루틴을 만들어 힘이 넘치는 피부로 관리해 보세요! *✲゚*。⋆♡ོ
                    #설화수 #sulwhasoo #윤조에센스 #자음생세럼 #자음생크림
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide with_img">
              <div className="img_section">
                <img src="./images/main/sns03.webp" alt="sns"></img>
                <FontAwesomeIcon icon={faBagShopping} className="circle_icon" />
              </div>
              <div className="hover_content">
                <div className="sns_info">
                </div>
                <div className="sns_txt">
                  <p className="user_id">@b0.ri</p>
                  <p className="user_caption">
                    #유료광고 sulwhasoo.official
                    저의 첫 안티에이징을 함께한 설화수를 소개할게요!🧡
                    이제껏 두껍고 텁텁한 제형을 좋아하지 않아 안티에이징을 멀리 했었는데요..😔
                    저처럼 가볍고 산뜻한 제형을 좋아하는 분들에게 설화수 윤조에센스와 자음생 듀오를 추천합니다.
                    긴 시간 사랑받아온 클래식한 브랜드이자 개인적으로 오랜 기간 좋아한 브랜드라 큰 기대감을 안고 써봤는데요. 
                    일단 제형 자체가 촉촉하고 산뜻해 부담 없이 매일 아침저녁으로 사용하기 좋아요. 눈에 띄게 좋았던 점은 피부 결 개선이었어요. 마치 푹 자고 일어난 듯 촘촘하게 차오른 피부 컨디션이랄까?
                    더위에 지쳐있던 피부가 건강함을 되찾은 느낌이더라구요.
                    설화수에서 인삼 연구만 50년을 넘게 했다고 하는데, 그 인삼 성분이 들어간 윤조에센스, 자음생세럼, 자음생크림 루틴으로 데일리 안티에이징 루틴을 만들어 힘이 넘치는 피부로 관리해 보세요! *✲゚*。⋆♡ོ
                    #설화수 #sulwhasoo #윤조에센스 #자음생세럼 #자음생크림
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide with_img">
              <div className="img_section">
                <img src="./images/main/sns04.webp" alt="sns"></img>
                <FontAwesomeIcon icon={faBagShopping} className="circle_icon" />
              </div>
              <div className="hover_content">
                <div className="sns_info">
                </div>
                <div className="sns_txt">
                  <p className="user_id">@mimi__hye</p>
                  <p className="user_caption">
                    #광고 
                    “그 시절 우리가 사랑했던 유행화장”
                    신라면세점X아모레퍼시픽 유행화장展
                    팝업 다녀왔어요 🧵
                    유행화장전은 1980년대를 재현한
                    하나의 공간안에서 화장대, 옷장, 서재, 응접실,
                    영사실, 굿즈샵으로 구성되어 있었는데요 !

                    제가 태어나기도 전인 아모레퍼시픽의
                    역대 화장품들도 구경해볼 수 있었고 💄
                    옛날에 유행했던 레트로 느낌의
                    메이크업 쇼도 볼 수 있었답니다 '◡'
                    여러분들도 방문하셔서 직접 느껴보시고
                    함께 설화수 제품들도 만나보세요 '◡'

                    📻
                    행사 기간 : 5/20(토) ~ 6/15(목)
                    팝업 장소 : 서울특별시 중구 동호로 249 신라면세점 카페 '라'
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide with_img">
              <div className="img_section">
                <img src="./images/main/sns05.webp" alt="sns"></img>
                <FontAwesomeIcon icon={faBagShopping} className="circle_icon" />
              </div>
              <div className="hover_content">
                <div className="sns_info">
                </div>
                <div className="sns_txt">
                  <p className="user_id">@ddoyeon2_e</p>
                  <p className="user_caption">
                    #유료광고 

                    뜨거운 햇살, 자외선 아래에서 가장 힘들어하는 건 피부탄력일거에요. ☀ 특히나 야외촬영이 있을때면 피부가 푸석해지지 않을까 걱정인데요, 그럴 때 설화수 자음생라인으로 채워주면 다시금 힘있는 피부로 만들어준답니다. 
                      
                    캡슐이 들어있어 높은 흡수율로 기분 좋은 메이크업을 완성시켜줄 #자음생세럼 은 아침에, 하루종일 지쳤을 피부를 밤 사이 촉촉하고 탄탄하게 케어 해 줄 #자음생크림 은 밤에 관리해주면 수면패턴 달라지는 여행지, 그리고 호캉스에서도 탄력 있게 건강한 피부를 유지하실 수 있어요. ˇܫˇ 이날 몇시간 못 잤는데도 피부 컨디션은 최고였답니다. 
                    인삼의 귀한 성분으로 만들어져 충분한 영양감을 전달해주면서도 부담스럽지 않게 마무리되서 데일리로 쓰기 딱 좋아요! 
                      
                    안티에이징이 무겁다는 말은 이젠 옛말, 
                    설화수 자음생듀오로 가볍고 산뜻하게 안티에이징 시작하세요.🧡
                      
                    sulwhasoo.official 
                    #설화수 #sulwhasoo #자음생세럼 #자음생크림
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide with_img">
              <div className="img_section">
                <img src="./images/main/sns06.webp" alt="sns"></img>
                <FontAwesomeIcon icon={faBagShopping} className="circle_icon" />
              </div>
              <div className="hover_content">
                <div className="sns_info">
                </div>
                <div className="sns_txt">
                  <p className="user_id">@ddoyeon2_e</p>
                  <p className="user_caption">
                    #유료광고 

                    뜨거운 햇살, 자외선 아래에서 가장 힘들어하는 건 피부탄력일거에요. ☀ 특히나 야외촬영이 있을때면 피부가 푸석해지지 않을까 걱정인데요, 그럴 때 설화수 자음생라인으로 채워주면 다시금 힘있는 피부로 만들어준답니다. 
                      
                    캡슐이 들어있어 높은 흡수율로 기분 좋은 메이크업을 완성시켜줄 #자음생세럼 은 아침에, 하루종일 지쳤을 피부를 밤 사이 촉촉하고 탄탄하게 케어 해 줄 #자음생크림 은 밤에 관리해주면 수면패턴 달라지는 여행지, 그리고 호캉스에서도 탄력 있게 건강한 피부를 유지하실 수 있어요. ˇܫˇ 이날 몇시간 못 잤는데도 피부 컨디션은 최고였답니다. 
                    인삼의 귀한 성분으로 만들어져 충분한 영양감을 전달해주면서도 부담스럽지 않게 마무리되서 데일리로 쓰기 딱 좋아요! 
                      
                    안티에이징이 무겁다는 말은 이젠 옛말, 
                    설화수 자음생듀오로 가볍고 산뜻하게 안티에이징 시작하세요.🧡
                      
                    sulwhasoo.official 
                    #설화수 #sulwhasoo #자음생세럼 #자음생크림
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide with_img">
              <div className="img_section">
                <img src="./images/main/sns07.webp" alt="sns"></img>
                <FontAwesomeIcon icon={faBagShopping} className="circle_icon" />
              </div>
              <div className="hover_content">
                <div className="sns_info">
                </div>
                <div className="sns_txt">
                  <p className="user_id">@ddoyeon2_e</p>
                  <p className="user_caption">
                    #유료광고 

                    뜨거운 햇살, 자외선 아래에서 가장 힘들어하는 건 피부탄력일거에요. ☀ 특히나 야외촬영이 있을때면 피부가 푸석해지지 않을까 걱정인데요, 그럴 때 설화수 자음생라인으로 채워주면 다시금 힘있는 피부로 만들어준답니다. 
                      
                    캡슐이 들어있어 높은 흡수율로 기분 좋은 메이크업을 완성시켜줄 #자음생세럼 은 아침에, 하루종일 지쳤을 피부를 밤 사이 촉촉하고 탄탄하게 케어 해 줄 #자음생크림 은 밤에 관리해주면 수면패턴 달라지는 여행지, 그리고 호캉스에서도 탄력 있게 건강한 피부를 유지하실 수 있어요. ˇܫˇ 이날 몇시간 못 잤는데도 피부 컨디션은 최고였답니다. 
                    인삼의 귀한 성분으로 만들어져 충분한 영양감을 전달해주면서도 부담스럽지 않게 마무리되서 데일리로 쓰기 딱 좋아요! 
                      
                    안티에이징이 무겁다는 말은 이젠 옛말, 
                    설화수 자음생듀오로 가볍고 산뜻하게 안티에이징 시작하세요.🧡
                      
                    sulwhasoo.official 
                    #설화수 #sulwhasoo #자음생세럼 #자음생크림
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide with_img">
              <div className="img_section">
                <img src="./images/main/sns08.webp" alt="sns"></img>
                <FontAwesomeIcon icon={faBagShopping} className="circle_icon" />
              </div>
              <div className="hover_content">
                <div className="sns_info">
                </div>
                <div className="sns_txt">
                  <p className="user_id">@yezi_mong</p>
                  <p className="user_caption">
                    #유료광고 @sulwhasoo.official 
                    이번에 리뉴얼된 #설화수 윤조에센스를 한 달 넘게 꾸준히 사용하고 있어요🤍🥚 세안 직후 바르는 #퍼스트세럼 이라서 세안 후, 스킨케어 첫 단계에 발라줬더니🧖🏻‍♀️ 확실히 피부 속 수분감이 오래 가는 느낌! 윤조에센스만의 고유한 텍스처를 참 좋아하는데 순간 흡수 포뮬러가 피부에 사악 발리면서 흡수가 빨라서 집중 케어가 필요한 부분엔
                    3-4번 레이어링 해주고 있어요 확실히 피부결도 부드러워지고 자연스럽게 생기있는 피부가 된 거 같아요! 스킨케어에 윤조에센스만 추가해도 하루가 다르게 변화하는 피부상태를 느끼실 수 있으니까 여러분의 루틴에 #윤조에센스 를 더해보시길🫶🏻🫶🏻
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide with_img">
              <div className="img_section">
                <img src="./images/main/sns09.webp" alt="sns"></img>
                <FontAwesomeIcon icon={faBagShopping} className="circle_icon" />
              </div>
              <div className="hover_content">
                <div className="sns_info">
                </div>
                <div className="sns_txt">
                  <p className="user_id">@yezi_mong</p>
                  <p className="user_caption">
                    #유료광고 @sulwhasoo.official 
                    이번에 리뉴얼된 #설화수 윤조에센스를 한 달 넘게 꾸준히 사용하고 있어요🤍🥚 세안 직후 바르는 #퍼스트세럼 이라서 세안 후, 스킨케어 첫 단계에 발라줬더니🧖🏻‍♀️ 확실히 피부 속 수분감이 오래 가는 느낌! 윤조에센스만의 고유한 텍스처를 참 좋아하는데 순간 흡수 포뮬러가 피부에 사악 발리면서 흡수가 빨라서 집중 케어가 필요한 부분엔
                    3-4번 레이어링 해주고 있어요 확실히 피부결도 부드러워지고 자연스럽게 생기있는 피부가 된 거 같아요! 스킨케어에 윤조에센스만 추가해도 하루가 다르게 변화하는 피부상태를 느끼실 수 있으니까 여러분의 루틴에 #윤조에센스 를 더해보시길🫶🏻🫶🏻
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide with_img">
              <div className="img_section">
                <img src="./images/main/sns10.webp" alt="sns"></img>
                <FontAwesomeIcon icon={faBagShopping} className="circle_icon" />
              </div>
              <div className="hover_content">
                <div className="sns_info">
                </div>
                <div className="sns_txt">
                  <p className="user_id">@yezi_mong</p>
                  <p className="user_caption">
                    #유료광고 @sulwhasoo.official 
                    이번에 리뉴얼된 #설화수 윤조에센스를 한 달 넘게 꾸준히 사용하고 있어요🤍🥚 세안 직후 바르는 #퍼스트세럼 이라서 세안 후, 스킨케어 첫 단계에 발라줬더니🧖🏻‍♀️ 확실히 피부 속 수분감이 오래 가는 느낌! 윤조에센스만의 고유한 텍스처를 참 좋아하는데 순간 흡수 포뮬러가 피부에 사악 발리면서 흡수가 빨라서 집중 케어가 필요한 부분엔
                    3-4번 레이어링 해주고 있어요 확실히 피부결도 부드러워지고 자연스럽게 생기있는 피부가 된 거 같아요! 스킨케어에 윤조에센스만 추가해도 하루가 다르게 변화하는 피부상태를 느끼실 수 있으니까 여러분의 루틴에 #윤조에센스 를 더해보시길🫶🏻🫶🏻
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide with_img">
              <div className="img_section">
                <img src="./images/main/sns11.webp" alt="sns"></img>
                <FontAwesomeIcon icon={faBagShopping} className="circle_icon" />
              </div>
              <div className="hover_content">
                <div className="sns_info">
                </div>
                <div className="sns_txt">
                  <p className="user_id">@leey.zin</p>
                  <p className="user_caption">
                    #유료광고 @sulwhasoo.official 
                    설화수의 리뉴얼 된 윤조에센스를 한달간 사용해 봤어요
                    세안후 첫 단계로 매일 아침, 저녁에 사용했는데
                    속건조를 잡아주고 피부결이 촘촘해지는게 윤조에센스가 유명한 이유를 알겠더라구요.

                    사실 처음 테스트를 해봤을 때 제형이 가벼워서 이거 하나 추가한다고 피부가 변할까? 싶었는데
                    3일 정도 지나니 맨 얼굴에서도 속광이 올라오는 걸 보고 꾸준히 써야겠다 생각했답니다..! 
                    단순히 수분만 채워주는게 아니라 피부에 활기가 돋고 안정감을 되찾는 느낌이었어요.

                    기존 스킨케어 루틴 첫 단계에 윤조에센스 만 추가했을 뿐인데 하루가 다르게 변하는 내 피부를 보며 윤조에센스의 진가를 느껴봅니다.
                    #설화수 #suhwhasoo #윤조에센스 #퍼스트에센스 #퍼스트세럼
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide with_img">
              <div className="img_section">
                <img src="./images/main/sns12.webp" alt="sns"></img>
                <FontAwesomeIcon icon={faBagShopping} className="circle_icon" />
              </div>
              <div className="hover_content">
                <div className="sns_info">
                </div>
                <div className="sns_txt">
                  <p className="user_id">@leey.zin</p>
                  <p className="user_caption">
                    #유료광고 @sulwhasoo.official 
                    설화수의 리뉴얼 된 윤조에센스를 한달간 사용해 봤어요
                    세안후 첫 단계로 매일 아침, 저녁에 사용했는데
                    속건조를 잡아주고 피부결이 촘촘해지는게 윤조에센스가 유명한 이유를 알겠더라구요.

                    사실 처음 테스트를 해봤을 때 제형이 가벼워서 이거 하나 추가한다고 피부가 변할까? 싶었는데
                    3일 정도 지나니 맨 얼굴에서도 속광이 올라오는 걸 보고 꾸준히 써야겠다 생각했답니다..! 
                    단순히 수분만 채워주는게 아니라 피부에 활기가 돋고 안정감을 되찾는 느낌이었어요.

                    기존 스킨케어 루틴 첫 단계에 윤조에센스 만 추가했을 뿐인데 하루가 다르게 변하는 내 피부를 보며 윤조에센스의 진가를 느껴봅니다.
                    #설화수 #suhwhasoo #윤조에센스 #퍼스트에센스 #퍼스트세럼
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide with_img">
              <div className="img_section">
                <img src="./images/main/sns13.webp" alt="sns"></img>
                <FontAwesomeIcon icon={faBagShopping} className="circle_icon" />
              </div>
              <div className="hover_content">
                <div className="sns_info">
                </div>
                <div className="sns_txt">
                  <p className="user_id">@geumdami</p>
                  <p className="user_caption">
                      🕰️설화수의 제품력은 오랜시간 그 자리를 공고히하고 있는 만큼 잘 알려져 있지요📜 이를 대표하는 제품은 바로 ‘윤조에센스’🤎 벌써
                      신제품으로 '윤조에센스 6세대'까지 출시되었다는게 그 반증📚 세안 직후 바르면 피부를 건강하고 윤기있게 가꿔주죠🫧 진화를 거듭하는 동안
                      달항아리를 닮은 패키지도 정말 모던해졌어요🥚 이제 함께 사용하면 좋은 클렌저(이미 너무 유명한 순행클렌징 오일과 폼)와 팩까지 있으니 퍼스트
                      케어 루틴을 시작!🧡 sulwhasoo.official #설화수 #sulwhasoo #윤조에센스 #윤조에센스6세대 #퍼스트에센스
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide with_img">
              <div className="img_section">
                <img src="./images/main/sns14.webp" alt="sns"></img>
                <FontAwesomeIcon icon={faBagShopping} className="circle_icon" />
              </div>
              <div className="hover_content">
                <div className="sns_info">
                </div>
                <div className="sns_txt">
                  <p className="user_id">@shanai.porras</p>
                  <p className="user_caption">
                    beauty and history in the house of @sulwhasoo.official roses_are_rosie 🩷
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide with_img">
              <div className="img_section">
                <img src="./images/main/sns15.webp" alt="sns"></img>
                <FontAwesomeIcon icon={faBagShopping} className="circle_icon" />
              </div>
              <div className="hover_content">
                <div className="sns_info">
                </div>
                <div className="sns_txt">
                  <p className="user_id">@daze_motd</p>
                  <p className="user_caption">
                      #유료광고 @sulwhasoo.official 우아함과 고급미가 넘치는 오브제로 화장대를 더 빛나게 만들어주는 #설화수 의 윤조에센스 6세대를
                      만나보았어요🤍 세안 후 첫 단계에 바르는 최초의 #퍼스트에센스 로 피부능력을 깨워주는 #설화수윤조에센스 는 윤조에센스의 핵심성분을 부스팅해주고
                      피부 본연의 능력을 활성화시켜주는 인삼독점기술이 적용된 에센스에요! 인삼의 힘으로 더욱 강력해진 제형감이 가벼우면서도 촉촉하게 피부에 영양감있게
                      빠르게 흡수되어 손상된 피부 장벽과 피부노화징후를 개선시켜주기 때문에 #안티에이징 케어에도 도움을 주는 윤조에센스 랍니다✨ 프로필 링크에 있는
                      #아모레퍼시픽 데이즈 스토어에서 증정하는 설화수 안티에이징 베스트셀러 키트와 함께 설화수 윤조에센스를 합리적인 가격으로 만나보세요🥰
                      #sulwhasoo #설화수에센스 #안티에이징에센스 #에센스추천 #에센스 #기초화장품 #스킨케어
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <button type="button" className="swiper-button swiper-button-sns sns_button_prev"></button>
          <button type="button" className="swiper-button swiper-button-sns sns_button_next"></button>
        </Swiper>
      </div>
    </section>
  )
}

export default WithSulwhasoo_sec
