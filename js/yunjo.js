/* aos 라이브러리 사용 js */
AOS.init();

/* 비디오 미디어에 맞게 태그 변경 */
const video01 = document.getElementById('video01');
const video02 = document.getElementById('video02');
const video03 = document.getElementById('video03');

/* 삼항조건연산자 */
// window.onresize = function(event){
//     const innerWidth = window.innerWidth;
//     innerWidth >= "768" ? video01.src = './media/yunjo_video/video_pc/yunjo_video01_pc.mp4' : video01.src = './media/yunjo_video/video_m/yunjo_video01_m.mp4';
//     innerWidth >= "768" ? video02.src = './media/yunjo_video/video_pc/yunjo_video02_pc.mp4' : video02.src = './media/yunjo_video/video_m/yunjo_video02_m.mp4';
//     innerWidth >= "768" ? video03.src = './media/yunjo_video/video_pc/yunjo_video03_pc.mp4' : video03.src = './media/yunjo_video/video_m/yunjo_video03_m.mp4';
// }
window.onresize = function(event){
    const innerWidth = window.innerWidth;
    innerWidth <= "767" ? video01.src = './media/yunjo_video/video_m/yunjo_video01_m.mp4' : video01.src = './media/yunjo_video/video_pc/yunjo_video01_pc.mp4';
    innerWidth <= "767" ? video02.src = './media/yunjo_video/video_m/yunjo_video02_m.mp4' : video02.src = './media/yunjo_video/video_pc/yunjo_video02_pc.mp4';
    innerWidth <= "767" ? video03.src = './media/yunjo_video/video_m/yunjo_video03_m.mp4' : video03.src = './media/yunjo_video/video_pc/yunjo_video03_pc.mp4';
}
