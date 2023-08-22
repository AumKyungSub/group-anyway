
const currentPageElement = document.getElementById('currentPage');
const totalPagesElement = document.getElementById('totalPages');
const prevButton = document.querySelector('.paging_prev');
const nextButton = document.querySelector('.paging_next');
const itemsPerPage = 16; // Number of products to display per page
const products = document.querySelectorAll('.product_list li');
const noGiftProducts = document.querySelectorAll('.product_list li:not(.gift)');
let currentPage = 1;

// Calculate the total number of pages
const totalItems = products.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);
totalPagesElement.textContent = totalPages;

// Function to show the products for the current page
function showCurrentPage() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const sortValue = $('#sort_select').val();
  if(sortValue==='line'){
    noGiftProducts.forEach((item, index) => {
            if (index >= startIndex && index < endIndex) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            } 
        }
      );
  }else{
      products.forEach((item, index) => {
            if (index >= startIndex && index < endIndex) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            } 
          }
        
        );
    }

  prevButton.style.display = currentPage === 1 ? 'none' : 'inline-block';
  nextButton.style.display = currentPage === totalPages ? 'none' : 'inline-block';
}

// Function to show the next page
function showNextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    currentPageElement.textContent = currentPage;
    showCurrentPage();
  }
}
// Function to show the previous page
function showPrevPage() {
    if (currentPage > 1) {
      currentPage--;
      currentPageElement.textContent = currentPage;
      showCurrentPage();
    }
  }

// Show the first page initially
showCurrentPage();


$('.swiper').hide();
const initialSelect = $('#sort_select').val();
$(`#${initialSelect}`).show();
$('#sort_select').on('change', function(){
    $('.swiper').hide();
    const selectChoiced = $(this).val();
    $(`#${selectChoiced}`).show();
    $('.product_list li').hide();
    currentPage=1;
    currentPageElement.textContent = currentPage;
    showCurrentPage();
})


$('.swiper-slide').click(function(){
    const selectedId= this.id;
    $('.swiper-slide').removeClass('selected');
    $(this).addClass('selected');
    $('.product_list li').hide();
    const selectedProducts = $(`.product_list .${selectedId}`);
    selectedProducts.show();
    const selectedProductAmount = selectedProducts.length;
    if(selectedProductAmount<=itemsPerPage){
        $('.paging').hide();
    }
    if(selectedId==="all"){
        currentPage=1;
        currentPageElement.textContent = currentPage;
        const sortValue = $('#sort_select').val();
        if(sortValue==='line'){
            $('.product_list li:not(.gift)').show();
        }else{
            $('.product_list li').show();
        }
        $('.paging').show();
        showCurrentPage();
    }
 })

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