// alert("test"); 

/* 스클롤 애니메이션 */
// 스크롤 애니메이션 해당 태그 선택
let scrollAni = $('main *:not(.no_animate, .no_animate_all *)');
// console.log(scrollAni);
// 스크롤 위치 조정을 위한 offset 설정
let offset = $(window).height() - 100;
// console.log(offset)
// for문을 통해 scrollAni에 선택된 태그 순차 선택
for (let i = 0; i < scrollAni.length;  i++) {
    // 각 태그 발동 위치 설정
    let scrollAniOST = scrollAni.eq(i).offset().top - offset;
    // console.log(scrollAniOST);
    // 스크롤 함수 작동
    $(window).scroll(function(){
        // console.log($(this).scrollTop())
        // 스크롤 위치가 태그 발동 위치보다 클 경우
        if($(this).scrollTop() > scrollAniOST ){
            scrollAni.eq(i).removeClass('animate_none');
            scrollAni.eq(i).addClass('animate');
        }else {
            // 스크롤 위치가 태그 발동 위치보다 작을 경우
            scrollAni.eq(i).removeClass('animate');
            scrollAni.eq(i).addClass('animate_none');

        }
        // console.log($(this).scrollTop() )
    });
}

/* Flagship Dosan Section 2 (비디오 기능) */
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


