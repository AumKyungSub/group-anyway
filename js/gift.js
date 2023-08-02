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

/* ================== gift페이지 JS ==================== */

// 라이브러리 초기화
AOS.init();  

// 동영상 재생 제어
// 비디오 재생 및 컨트롤러 제어 함수
function playVideoAndShowControls(video) {
  video.play();
  video.controls = true;
}

// 비디오 멈추기 및 컨트롤러 숨기기 함수
function pauseVideoAndHideControls(video) {
  video.pause();
  video.controls = false;
}

// 비디오 마우스 오버 이벤트 처리
$(".video_container .content_box").on("mouseenter", function() {
  var video = $(this).find("video")[0];
  var posterImg = $(this).find(".poster_img");
  var videoTxt = $(this).find(".video_poster_txt");
  var videoBtn = $(this).find(".more_info");
  
  // 이미지와 텍스트 숨기기
  posterImg.fadeOut(1000);
  videoTxt.fadeOut();
  videoBtn.fadeOut();
  
  // 비디오 재생 및 컨트롤러 보이기
  playVideoAndShowControls(video);
});

// 비디오 마우스 리브 이벤트 처리
$(".video_container .content_box").on("mouseleave", function() {
  var video = $(this).find("video")[0];
  var posterImg = $(this).find(".poster_img");
  var videoTxt = $(this).find(".video_poster_txt");
  var videoBtn = $(this).find(".more_info");
  
  // 비디오 멈추기 및 컨트롤러 숨기기
  pauseVideoAndHideControls(video);
  
  // 이미지와 텍스트 보이기
  posterImg.stop().fadeIn(1000);
  videoTxt.stop().fadeIn();
  videoBtn.stop().fadeIn();
});




/* a 막기 */
$('a[href="#"]').on('click',function(e){
  // 기본 기능 제거
  e.preventDefault();
});

