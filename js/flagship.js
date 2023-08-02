// alert("test"); 
/* 0. 탑다운 공식상 항상 위에 있어야 하는 것들 */
let windWidth = $(window).width();


/* 1. 스클롤 애니메이션 */
// 스크롤 애니메이션 해당 태그 선택 (main에서 특정 클래스와 br빼고 전부 선택)
let scrollAni = $('main *:not(.no_animate, .no_animate_all *, br)');
let scrollAniPc = $('.animate_pc');   
if(windWidth > 1023) {
    // 스크롤 애니메이션 재설정
    scrollAni = $('main *:not(.no_animate, .no_animate_all *, br, .animate_pc)');
}
console.log(scrollAni);
console.log(scrollAniPc);
// header 높이
let headerHeight = $('header').outerHeight(true);
    // console.log('headerHeight = ' + headerHeight)
// section1 높이
let sec1Height = $('.sec_1').outerHeight(true);
    //console.log('sec1Height = ' + sec1Height)
// section2 first 높이
let sec2FirstHeight = $('.sec_2_first').outerHeight(true);
    //console.log('sec2FirstHeight = ' + sec2FirstHeight)
// 첫 스크롤 애니메이션 태그의 높이 2/3
let firstTagHeight = ((scrollAni.eq(0).outerHeight())/3)*2;
    //console.log('firstTagHeight = ' + firstTagHeight)
// 스크롤 애니메이션 발동 구간을 위한 초기 높이값 계산
let offsetHeight = headerHeight + sec1Height + sec2FirstHeight + firstTagHeight;
    // console.log('offsetHeight = ' + offsetHeight)
// 고정 뷰포트 높이값
let viewPortHeight = $(window).height();
    // console.log(viewPortHeight)
// for문을 통해 scrollAni에 선택된 모든 태그 순차 선택
for (let i = 0; i < scrollAni.length;  i++) {
    // 각 태그 높이 계산
    let tagHeight = scrollAni.eq(i).outerHeight(true);
        console.log(i+"번"+tagHeight); 
        //(도산에서는 6번이 문제..... 높이값이 가끔 너 낮게 뜸...)
    // 대입연산자를 사용하여 뷰포트 높이에 태그 높이를 순서대로 계속 더해 줌
    let MiddleOffset = offsetHeight+=tagHeight;
        // console.log("mo: "+MiddleOffset)
    // 스크롤 높이 값을 맞추기 위해 태그 일부 값을 계산
    let tagHeightTwoThird = (scrollAni.eq(i).outerHeight(true)/3)*2;
        // console.log("tth = " + tagHeightTwoThird);
    // 최종 offset값으로 대입연산자를 사용하여 (뷰포트+태그높이)에 태그 일부값을 빼줌
    let finalOffset = (MiddleOffset -= tagHeightTwoThird)+20;
        // console.log("fo: "+finalOffset);
    // 스크롤 함수 작동
    $(window).scroll(function(){
        // 스크롤 내리는 값
        let scrollNum = $(this).scrollTop();
            // console.log(scrollNum)  
        // 고정 뷰포트 높이에 스크롤 내린 값을 더하여 현재 보이는 가장 아래 y축 계산
        let viewPortYaxis = viewPortHeight + scrollNum;
            // console.log(viewPortHeight)
            // console.log("vy: "+viewPortYaxis);
        // 현재 보이는 가장 아래 y축이 해당 태그 높이 일부 보다 아래에 위치할때 발동
        if(viewPortYaxis > finalOffset ){
            scrollAni.eq(i).removeClass('animate_none');
            scrollAni.eq(i).addClass('animate');
        } else {
            // 현재 보이는 가장 아래 y축이 해당 태그 높이 일부 보다 위에 위치할때 발동
            scrollAni.eq(i).removeClass('animate');
            scrollAni.eq(i).addClass('animate_none');
        }
            // console.log($(this).scrollTop() )
        // 스크롤 내리는 값이 0일경우 발동
        if(scrollNum == 0) {
            scrollAni.eq(i).removeClass('animate');
            scrollAni.eq(i).addClass('animate_none');
        }
    });
}
/* 2. Flagship Dosan Section 2 (비디오 기능) */
// explanation 클래스 숨기기
$('.explanation').hide();
// video_play_btn class 클릭하면 iframe_video 보여지면서 자동 실행 
// explanation class는 slide down으로 표시
$('.video_play_btn').click(function(){
    $(this).css({'display':'none'});
    $('.video_area_cover').removeClass('animate').removeClass('animate_none');
    $('.video_area_cover *').removeClass('animate').removeClass('animate_none');
    $('#flagshipDosan').attr('src','https://www.youtube.com/embed/qtiyw2AyYtU?autoplay=1');
    $('.iframe_video').css({'display':'block'});
    $('.explanation').stop().slideDown();
});

/* 3. Swiper 사용한 슬라이드 효과 */
// 슬라이드 이동 범위 동적 계산
let slideWidthOuter = $('.swiper-slide').outerWidth(true)*2;
let slideWidthOuterPC = $('.swiper-slide').outerWidth(true)*3;
let mlSwiperWrap = windWidth/2;
// console.log(slideWidthOuter);
if(windWidth < 1024) {
    // 슬라이드 영역 사라지고 다시 나타날때 슬라이드 처음부터(시작/정지 버튼) 초기화
    $(window).scroll(function(){
      if($('.slide_imgs').is('.restart') === true) {
          swiper.slideTo(0);
      }
  });
    // 자동 슬라이드, 슬라이드 이동 범위 변경
    var swiper = new Swiper(".mySwiper", {
        width: slideWidthOuter,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        loopAdditionalSlides : 1,
        pagination: {
            el: ".paging1",
            type: "progressbar",
        },
        slidesPerView: 2
      });

} else if(windWidth > 1023) {
    // 슬라이드 영역 사라지고 다시 나타날때 슬라이드 처음부터(시작/정지 버튼) 초기화
    $(window).scroll(function(){
      if($('.slide_imgs').is('.restart') === true) {
          swiper.slideTo(3);
      }
    });
    // 자동 슬라이드, 슬라이드 이동 범위 변경
    var swiper = new Swiper(".mySwiper", {
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
}


  // 슬라이드 영역 사라지고 다시 나타날때 슬라이드 처음부터(시작/정지 버튼) 초기화
  $(window).scroll(function(){
    if($('.slide_imgs').is('.restart') === true) {
        swiper.autoplay.start();
        // swiper.slideTo(3);
        $('.start').css({'display':'none'});
        $('.stop').css({'display':'block'});
        $('.slide_imgs').addClass('restart');
        $('.slide_imgs').removeClass('restart');
    }else if($('.slide_imgs').is('.animate_none') === true) {
        swiper.autoplay.stop();
        $('.stop').css({'display':'none'});
        $('.start').css({'display':'block'});
        $('.slide_imgs').addClass('restart');
    }
});

// 시작버튼 클릭시 자동 슬라이드 시작
$('.start').on('click',function(){
    // alert('test');
    $(this).css({'display':'none'});
    $('.stop').css({'display':'block'});
    swiper.autoplay.start();
    return false;
})
// 정지버튼 클릭시 자동 슬라이드 정지
  $('.stop').on('click',function(){
    // alert('test');
    $(this).css({'display':'none'});
    $('.start').css({'display':'block'});
    swiper.autoplay.stop();
    return false;
  })

  
/* 1-1. 위 스트롤 애니메이션으로 못한 구간은 AOS Library로 대체 */
if(windWidth > 1023) {
    $('.sec_2_fifth ul li').addClass('aos-ini').addClass('aos-animate').attr('data-aos','fade-up');
}
if(windWidth <1024) {
    $('.sec_2_fifth ul li').removeClassClass('aos-ini').removeClassClass('aos-animate').removeAttr('data-aos');
}
/* 비고 */
// 1. jQuery로 IntersectionObserver 사용해서 스크롤 애니메이션 하려 했지만 못하겠음....
// const Observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // do something
//             let el = $(entry.target);
//             el.toggleClass('animate')
//             observer.observe(entry.target);
//         } else {
//             let el = $(entry.target);
//             el.removeClass('animate')
//             observer.unobserve(entry.target);
//         }
//     });
// });
// let test = $('.test').get();
// test.forEach(obj => {
//     Observer.observe(obj);
// });
// console.log(test)
//----------------------------------------------------------------------------------------------


