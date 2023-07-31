// JavaScript 코드
let moreBtn = document.querySelectorAll('.moreBtn');
let programsDetail = document.querySelectorAll('.programs-detail');

let activeIndex = -1; // 현재 열린 아이템의 인덱스

const moreButton = (index) => {

    if (activeIndex === index) {
    // 클릭한 아이템이 이미 열려있는 경우
    moreBtn[index].classList.add('on');
    programsDetail[index].style.display = 'none';
    activeIndex = -1;
  } else {
    // 클릭한 아이템이 닫혀있는 경우
    if (activeIndex !== -1) {
      // 이미 열린 아이템이 있는 경우 닫기
      moreBtn[activeIndex].classList.add('on');
      programsDetail[activeIndex].style.display = 'none';
    }
    moreBtn[index].classList.remove('on');
    programsDetail[index].style.display = 'block';
    activeIndex = index;
  }
};

for (let i = 0; i < moreBtn.length; i++) {
  moreBtn[i].addEventListener('click', () => moreButton(i));
}
