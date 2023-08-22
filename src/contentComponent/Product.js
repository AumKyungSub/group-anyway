import React from 'react'
import './Product.css';
import ProductBanner from '../structureComponent/product/ProductBanner';
import ProductSort from '../structureComponent/product/ProductSort';

function Product() {
  return (
    <main class="products_wrap">
      <ProductBanner></ProductBanner>

      <ProductSort></ProductSort>
    </main>
  )
}

export default Product