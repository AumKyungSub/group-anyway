const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navigation a');
const navItems = document.querySelectorAll('.navigation li');

// 네비게이션 부드러운 스크롤 기능
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      // 기본 링크 클릭 동작을 취소
      event.preventDefault();
  
      // 대상 섹션을 선택
      const target = document.querySelector(event.target.hash);
  
      // 대상 섹션으로 부드럽게 스크롤
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  

// 스와이퍼 1
const swiper = new Swiper('.swiper_created', {
  // Optional parameters
  slidesPerView: "auto",
  freeMode: "true"
});



// 스크롤에 따른 네비게이션 활성화 변경

// Intersection Observer의 옵션을 설정
const options = {
  root: null, // viewport를 root로 설정
  rootMargin: '0px',
  threshold: 0.48 // 섹션의 48%가 보일 때 교차로 간주
};

// Intersection Observer의 콜백 함수를 정의
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 현재 활성화된 네비게이션 링크의 활성화 상태를 제거
      const activeLink = document.querySelector('.navigation a.active');
      if (activeLink) {
        activeLink.classList.remove('active');
      }

      // 새로운 네비게이션 링크를 활성화
      const id = entry.target.id;
      const newActiveLink = document.querySelector(`.navigation a[href="#${id}"]`);
      newActiveLink.classList.add('active');

      // 마지막 섹션이 전체적으로 활성화되었는지 확인
      if (id === 'journey') { // 'journey'는 마지막 섹션의 ID
        // 모든 네비게이션 아이템에 'change' 클래스를 추가
        navItems.forEach((navItem) => navItem.classList.add('change'));
        }
      } else if (entry.target.id === 'journey') {
        // 'journey' 섹션을 벗어났을 때 'change' 클래스를 제거
        navItems.forEach((navItem) => navItem.classList.remove('change'));
      }

  });
}, options);

// 각 섹션에 대해 Intersection Observer를 설정
sections.forEach(section => {
  observer.observe(section);
});


// 네비게이션 박스와 첫 번째 섹션을 선택
const navBox = document.querySelector('.navigation_box');
const content = document.querySelector('.content_wrap');

// 첫 번째 섹션의 top 좌표를 가져옴
const contentStart = content.offsetTop;

// 스크롤 이벤트 리스너를 추가
window.addEventListener('scroll', () => {
    // 스크롤 위치가 첫 번째 섹션의 top 좌표를 넘었는지 확인
    if (window.scrollY >= contentStart) {
      // 스크롤 위치가 섹션의 top 좌표를 넘었을 경우, 'fixed' 클래스를 추가
      navBox.classList.add('fixed');
    } else {
      // 스크롤 위치가 섹션의 top 좌표 이전일 경우, 'fixed' 클래스를 제거
      navBox.classList.remove('fixed');
    }
});

const journeySection = (function () {
  const wrapper = document.querySelector(".journey");
  const list = wrapper.querySelector(".swiper_list");

  function onInit() {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".sticky",
        invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        start: "top top",
        end: "100%",
      },
      defaults: { ease: "none", duration: 1 },
    });

    timeline
      .add("start")
      .fromTo(
        ".indicator_bar",
        { width: "0%" },
        {
          width: "100%",
        },
        "start"
      )
      .to(
        ".swiper_list",
        {
          x: function () {
            return (
              -(list.scrollWidth - document.documentElement.clientWidth) +
              "px"
            );
          },
        },
        "start"
      );

    ScrollTrigger.refresh();
  }

  function onResize() {}

  return {
    onInit: onInit,
    onResize: onResize,
  };
})();

document.addEventListener("readystatechange", function (event) {
  if (event.target.readyState === "interactive") {
    journeySection.onInit();
  }
});

window.addEventListener("resize", function () {
  journeySection.onResize();
});

/* ================== 공통 JS ==================== */
 // 사이드메뉴 열기
 $('.hamburger').click(function(){
  $(".side_header").css({ opacity:1, left: "0" });
  $(".side_cover").css({ opacity:1, left: "0" });
  $('.recommend, .bestseller, .season_recommend, .flagship, .sns_review, footer').hide();

});
// 사이드메뉴 닫기
$('.side_header .close_btn').click(function(){
$(".side_header").css({ opacity:0, left: "-100vw" });
$(".side_cover").css({ opacity:0, left: "-100vw" });
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
$('.pc_nav_d1').find('.pc_nav_d2_box').hide();
$(this).find('.pc_nav_d2_box').show();
$('.hover_border').css('opacity', 1);
});

$('#header').mouseleave(function() {
$(this).find('.pc_nav_d2_box').hide();
$('.hover_border').css('opacity', 0);
});

/* ============ /PC GNB ============ */

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
/* ================== /공통 JS ==================== */