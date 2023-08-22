// alert("Test");
/* 0. 탑다운 공식상 항상 위에 있어야 하는 것들 */
let windWidth = $(window).width();
/* 스와이퍼 */
    var swiper1 = new Swiper(".mySwiper_manual", {
        loop: true,
        pagination: {
          el: ".swiper-pagination_manual",
        },
      });

      var swiper_sec2_pc = new Swiper(".mySwiper_sec2_pc", {
        effect : 'fade',
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
      });
  /* Swiper 사용한 슬라이드 효과 */
  // 슬라이드 이동 범위 동적 계산
  let slideWidthOuter = $('.sec_2_third .swiper-slide').outerWidth(true)*2;
  let slideWidthOuterPC = $('.sec_2_third .swiper-slide').outerWidth(true)*3;
  // console.log(slideWidthOuter);
  if(windWidth < 1024) {
    $('.bukchon_tab_p').hide()
      // 자동 슬라이드, 슬라이드 이동 범위 변경
      var swiper_h = new Swiper(".mySwiper_h", {
          width: slideWidthOuter,
          autoplay: {
              delay: 3500,
              disableOnInteraction: false,
          },
          speed: 1000,
          loop: true,
          loopAdditionalSlides : 1,
          pagination: {
              el: ".paging_h",
              type: "progressbar",
          },
          slidesPerView: 2
        });
        var swiper_y = new Swiper(".mySwiper_y", {
            width: slideWidthOuter,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            speed: 1000,
            loop: true,
            loopAdditionalSlides : 1,
            pagination: {
                el: ".paging_y",
                type: "progressbar",
            },
            slidesPerView: 2
          });
  
  } else if(windWidth > 1023) {
    $('.bukchon_tab_m').hide()
      // 자동 슬라이드, 슬라이드 이동 범위 변경
      var swiper_h_p = new Swiper(".mySwiper_h", {
          width: slideWidthOuterPC,
          autoplay: {
              delay: 3500,
              disableOnInteraction: false,
          },
          speed: 1000,
          loop: true,
          loopAdditionalSlides : 1,
          pagination: {
              el: ".paging2",
              type: "progressbar",
          },
          slidesPerView: 3,
          centeredSlides: true,
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
          },
          on: {
            slideChange: function () {
              $('li[class*="text_list0"]').removeClass('active');
              $('li[class*="text_list0"]').eq(this.realIndex).addClass('active');
            }
          }
      });

      var swiper_y_p = new Swiper(".mySwiper_y", {
          width: slideWidthOuterPC,
          autoplay: {
              delay: 3500,
              disableOnInteraction: false,
          },
          speed: 1000,
          loop: true,
          loopAdditionalSlides : 1,
          pagination: {
              el: ".paging2",
              type: "progressbar",
          },
          slidesPerView: 3,
          centeredSlides: true,
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
          },
          on: {
            slideChange: function () {
                
console.log($('li[class*="text_list09"]').eq(this.realIndex))
              $('li[class*="text_list09"]').removeClass('active');
              $('li[class*="text_list09"]').eq(this.realIndex).addClass('active');
            }
          }
      });
  }
  
// 시작버튼 클릭시 자동 슬라이드 시작
$('.start').on('click',function(){
    // alert('test');
    $(this).css({'display':'none'});
    $('.stop').css({'display':'block'});
    swiper_h.autoplay.start();
    swiper_y.autoplay.start();
    return false;
})
// 정지버튼 클릭시 자동 슬라이드 정지
  $('.stop').on('click',function(){
    // alert('test');
    $(this).css({'display':'none'});
    $('.start').css({'display':'block'});
    swiper_h.autoplay.stop();
    swiper_y.autoplay.stop();
    return false;
  })
  
  $('.bukchon_tab_m button').on('click', function(){
    // alert("test");
    $('.bukchon_tab_m button').removeClass('bukchon_tabs_active');
    $(this).addClass('bukchon_tabs_active');
    if($('.bukchon_tab_m button').eq(0).hasClass('bukchon_tabs_active') == true) {
        $('.slide_imgs').removeClass('dpNone');
        $('.roomGuide2').addClass('dpNone');
        $('.start').css({'display':'none'});
        $('.stop').css({'display':'block'});
        swiper_h.slideTo(0);
        swiper_y.autoplay.stop();
        swiper_h.autoplay.start();
    }else {
        $('.slide_imgs').removeClass('dpNone');
        $('.roomGuide1').addClass('dpNone');
        $('.start').css({'display':'none'});
        $('.stop').css({'display':'block'});
        swiper_y.slideTo(0);
        swiper_h.autoplay.stop();
        swiper_y.autoplay.start();
    }
  });

  
  $('.bukchon_tab_p button').on('click', function(){
    // alert("test");
    $('.bukchon_tab_p button').removeClass('bukchon_tabs_active');
    $(this).addClass('bukchon_tabs_active');
    if($('.bukchon_tab_p button').eq(0).hasClass('bukchon_tabs_active') == true) {
        $('.slide_imgs').removeClass('dpNone');
        $('.roomGuide2').addClass('dpNone');
        $('.start').css({'display':'none'});
        $('.stop').css({'display':'block'});
        swiper_h_p.slideTo(3);
        swiper_y_p.autoplay.stop();
        swiper_h_p.autoplay.start();
    }else {
        $('.slide_imgs').removeClass('dpNone');
        $('.roomGuide1').addClass('dpNone');
        $('.start').css({'display':'none'});
        $('.stop').css({'display':'block'});
        swiper_y_p.slideTo(3);
        swiper_h_p.autoplay.stop();
        swiper_y_p.autoplay.start();
    }
  });

//   if(windWidth < 1024) {
//     $('div').remove(".sec_");
//   }