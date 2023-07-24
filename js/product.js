
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