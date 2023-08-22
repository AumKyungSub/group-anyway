import React from 'react'
import './ProductBanner.css';

function ProductBanner() {
  return (
    <picture class="products_banner">
        <source media="(max-width: 767px)" srcset="./images/product/230309_final_banner_best-seller_mo_1.jpg"/>
        <source media="(min-width: 768px) and (max-width: 1023px)" srcset="./images/product/2303096_final_banner_best-seller_pc_1.jpg"/>
        <img src="./images/product/2303096_final_banner_best-seller_pc_1.jpg" alt="배너"/>
    </picture>
  )
}

export default ProductBanner