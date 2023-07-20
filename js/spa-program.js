let moreBtn = document.querySelectorAll('.moreBtn')[0];
let programsDetail = document.querySelectorAll('.programs-detail');

const moreButton = () => {
    if( moreBtn.classList.value.includes('on') ){
        moreBtn.classList.remove('on');
        programsDetail[0].style.display = 'none';
    } else {
        moreBtn.classList.add('on');
        programsDetail[0].style.display = 'block';
    }
};

moreBtn.addEventListener('click',moreButton);