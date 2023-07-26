const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navigation a');

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

  
// 스크롤에 따른 네비게이션 활성화 변경

// Intersection Observer의 옵션을 설정
const options = {
    root: null, // viewport를 root로 설정
    rootMargin: '0px',
    threshold: 0.5 // 섹션의 50%가 보일 때 교차로 간주
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
