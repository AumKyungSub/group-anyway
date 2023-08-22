// 메인 swiper
var swiper = new Swiper('.mySwiper', {
  loop: true,
  slidesPerView: 1,
  speed: 1000,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    768: {
      navigation: {
        prevEl: '.pc_swiper_prev',
        nextEl: '.pc_swiper_next',
      },
    }
  },
  on: {
    slideChangeTransitionStart: function () {
      // 슬라이드 변경 시 텍스트 애니메이션을 초기 상태로
      var pTags = document.querySelectorAll('.slide_text_wrap p');
      var h2Tags = document.querySelectorAll('.slide_text_wrap h2');
      pTags.forEach(function (pTag) {
        pTag.style.animation = 'none';
        void pTag.offsetWidth; // 리플로우를 강제로 발생시켜 초기 상태로
        pTag.style.animation = 'textFloat 1.3s cubic-bezier(.4,0,.2,1) both';
        pTag.style.animationDelay = '0.3s';
      });
      h2Tags.forEach(function (h2Tag) {
        h2Tag.style.animation = 'none';
        void h2Tag.offsetWidth; // 리플로우를 강제로 발생시켜 초기 상태로
        h2Tag.style.animation = 'textFloat 1.3s cubic-bezier(.4,0,.2,1) both';
        h2Tag.style.animationDelay = '0.5s';
      });
    },
  },
});

$('.pause').on('click', function(e) {
  e.preventDefault(); // 기본 동작 막기
  if(swiper.autoplay.running) {
    swiper.autoplay.stop();
  }else {
    swiper.autoplay.start();
  }
  $(this).toggleClass('play');
});

// 설화수 추천 swiper
var recommend_swiper = new Swiper('.recommend_card', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
  effect: 'slide',
  pagination: {
    el: ".recommend_progressbar",
    type: "progressbar",
  },
  navigation: {
    nextEl: '.swiper_button_next',
    prevEl: '.swiper_button_prev',
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        prevEl: '.swiper_button_prev',
        nextEl: '.swiper_button_next',
      },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
  },
});

$('.recommend_container_inner .recommend_pause').on('click', function(e) {
  e.preventDefault(); // 기본 동작 막기
  if(recommend_swiper.autoplay.running) {
    recommend_swiper.autoplay.stop();
  }else {
    recommend_swiper.autoplay.start();
  }
  $(this).toggleClass('recommend_play');
});

// With Sulwhasoo swiper
var withSwiper = new Swiper('.withSwiper', {
  mousewheel: true,
  centeredSlides: true,
  loop: true,
  loopedSlides: 4, // 적절한 숫자로 조정 (보여지는 슬라이드 개수보다 큰 값으로 설정)
  loopPreventsSlide: false,
  loopFillGroupWithBlank: true,
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 10,
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
  },
});

// footer 토글 (모바일/태블릿)
$('.toggle_info').hide();
$('.footer_toggle').click(function(){
  if($(this).children('.toggle_btn').hasClass('is_open')){
    $('.toggle_btn').removeClass('is_open');
    $('.toggle_info').hide();
  }else {
    $('.toggle_btn').addClass('is_open');
    $('.toggle_info').show();
  }
});

// 사이드메뉴 열기
$('.hamburger').click(function(){
  // $('#side_bar').css('left',0);
  $(".side_header").css({ left: "0" });
  $(".side_cover").css({ left: "0" });
  $('.recommend, .bestseller, .season_recommend, .flagship, .sns_review, footer').hide();

});
// 사이드메뉴 닫기
$('.side_header .close_btn').click(function(){
  $(".side_header").css({ left: "-100vw" });
  $(".side_cover").css({ left: "-100vw" });
  $('.recommend, .bestseller, .season_recommend, .flagship, .sns_review, footer').show();

});


// depth메뉴 숨기기
$('.nav_d2_box, .nav_d3_box').hide();

$('.nav_d1 > a').on('click', function(e) {
  e.preventDefault();

  $(this).parent().siblings().removeClass('on');
  $(this).parent().toggleClass('on');

  var $depthTarget = $(this).next('.nav_d2_box');
  $depthTarget.slideToggle();
  
  $('.nav_d2_box').not($depthTarget).slideUp();
});

// 2depth 메뉴 클릭 이벤트
$('.nav_d2 > a').on('click', function(e) {
  e.preventDefault();

  $(this).parent().siblings().removeClass('on');
  $(this).parent().toggleClass('on');

  var $depthTarget = $(this).next('.nav_d3_box');
  $depthTarget.slideToggle();

  $('.nav_d3_box').not($depthTarget).slideUp();
});

// 3depth 메뉴 클릭 이벤트
$('.nav_d3 > a').on('click', function(e) {
  e.preventDefault();

  $(this).parent().siblings().removeClass('on');
  $(this).parent().toggleClass('on');
});

/* ============ PC GNB ============ */
// $('.pc_nav_d2_box').hide();
$('.pc_nav_d1').mouseover(function() {
  $('.pc_nav_d1').find('.pc_nav_d2_box').hide(); // 다른 1단계 메뉴의 2단계 메뉴를 모두 숨김
  $(this).find('.pc_nav_d2_box').show(); // 현재 1단계 메뉴의 2단계 메뉴를 나타냄
});

$('#header').mouseleave(function() {
  $(this).find('.pc_nav_d2_box').hide();
});

// With_Sulwhasoo 호버 이벤트
$('.img_section').mouseenter(function(){
  if ($(window).width() >= 1024) {
    $(this).siblings('.hover_content').css({display:'block', transform:'translateY(0px)'});
    $(this).children('img').css({transform: 'scale(1.2)'});
  }
});

$('.with_img').mouseleave(function(){
  if ($(window).width() >= 1024) {
    $(this).children('.hover_content').css({display:'none'});
    $(this).children('.img_section').children('img').css({transform: 'scale(1)'});
  }
});

// a 클릭시 기본 막기
$('a').click(function(e){
  e.preventDefault();
});