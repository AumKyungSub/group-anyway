  import React, { useEffect, useState } from 'react'
  import './ProductList.css';
  import './ProductPaging.css';
  import { allProducts } from './ProductsData';
  import { Link } from 'react-router-dom';

  function ProductList({selectedId}) {

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;
    useEffect(() => {
      setCurrentPage(1);
    }, [selectedId]);

    // 선택된 ID에 따라 제품 목록을 필터링합니다.
    const filteredProducts = selectedId === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.type === selectedId || product.line === selectedId);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const showPrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }

    const showNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    }

    const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);


    return (
      <>
        <div class="product_list_wrap">
            <ul class="product_list cf">
                {currentProducts.map(product=>(
                  <li className={`${product.type} ${product.line}`}>
                    <Link to="#" className="product">
                      <div className="badge_wrap">
                        {product.badge && <p className="badge"><span className={product.badge}>{product.badge}</span></p>}
                      </div>
                      <div className="product_info">
                        <h1>{product.name}</h1>
                        <h2>{product.nameEn}</h2>
                        <h3>{product.price}<span>원{product.size.includes('size') && '~'}</span></h3>
                        {product.size && <h4>{product.size}</h4>}
                      </div>
                      <figure>
                        <img src={product.image} alt="제품 이미지" />
                      </figure>
                    </Link>
                  </li>
                ))}
            </ul>
        </div>
        <div className="paging" style={{display: filteredProducts.length>productsPerPage?'block':'none'}}>
          <strong id="currentPage">{currentPage}</strong>
          &nbsp;of&nbsp;
          <span id="totalPages">{totalPages}</span>
          <button className="paging_prev" onClick={showPrevPage} style={{ display: currentPage === 1 ? 'none' : 'inline-block' }}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="paging_next" onClick={showNextPage} style={{ display: currentPage === totalPages ? 'none' : 'inline-block' }}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </>
    )
  }

  export default ProductList