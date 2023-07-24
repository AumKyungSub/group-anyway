// alert("test"); 

/* 1. 스클롤 애니메이션 */
// 스크롤 애니메이션 해당 태그 선택 (main에서 특정 클래스와 br빼고 전부 선택)
let scrollAni = $('main *:not(.no_animate, .no_animate_all *, br)');
    // console.log(scrollAni);
// 대입연산자 +=에 사용할 뷰포트 높이값
let offsetHeight = $(window).height();
    // console.log(offsetHeight)
// 고정 뷰포트 높이값
let viewPortHeight = $(window).height();
    // console.log(viewPortHeight)
// for문을 통해 scrollAni에 선택된 모든 태그 순차 선택
for (let i = 0; i < scrollAni.length;  i++) {
    // 각 태그 높이의 1/3 값을 계산
    let tagHeight = scrollAni.eq(i).outerHeight(true)/3;
        // console.log(tagHeight)
    // 최종 offset값으로 대입연산자를 사용하여 뷰포트 높이값에 계속 태그 높이의 1/3값을 계산
    let finalOffset = offsetHeight+=tagHeight;
        // console.log("fo: "+finalOffset)
    // 스크롤 함수 작동
    $(window).scroll(function(){
        // 스크롤 내리는 값
        let scrollNum = $(this).scrollTop();
            // console.log(scrollNum)
        // 고정 뷰포트 높이에 스크롤 내린 값을 더하여 현재 보이는 가장 아래 y축 계산
        let viewPortYaxis = viewPortHeight + scrollNum;
            // console.log(viewPortHeight)
            //console.log("vy: "+viewPortYaxis)
        // 현재 보이는 가장 아래 y축이 해당 태그 높이의 1/3 보다 아래에 위치할때 발동
        if(viewPortYaxis > finalOffset ){
            scrollAni.eq(i).removeClass('animate_none');
            scrollAni.eq(i).addClass('animate');
        }else {
            // 현재 보이는 가장 아래 y축이 해당 태그 높이의 1/3 보다 위에 위치할때 발동
            scrollAni.eq(i).removeClass('animate');
            scrollAni.eq(i).addClass('animate_none');

        }
            // console.log($(this).scrollTop() )
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