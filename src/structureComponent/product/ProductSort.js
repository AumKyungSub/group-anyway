import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ProductSort.css';
import ProductList from './ProductList';

function ProductSort() {
  const [select, setSelect]= useState(true);
  const [selectedSlide, setSelectedSlide] = useState('all');
  const handleSelectChange = (event) => {
    if (event.target.value === "type") {
      setSelect(true);
    } else if (event.target.value === "line") {
      setSelect(false);
    }
    setSelectedSlide('all');
  };
  const handleSlideClick = (id) => {
    setSelectedSlide(id);
  };

  const typeItems = [
    { id: "all", text: "전체" },
    { id: "gift", text: "기프트 세트" },
    { id: "cleansing", text: "클렌징" },
    { id: "boostessence", text: "부스트에센스" },
    { id: "skin", text: "스킨" },
    { id: "lotion", text: "로션t" },
    { id: "essence_ample", text: "에센스/앰플" },
    { id: "eyecream", text: "아이크림" },
    { id: "cream", text: "크림" },
    { id: "sunblock", text: "선크림" },
    { id: "mask", text: "마스크/팩" },
  ];

  const lineItems = [
    { id: "all", text: "전체" },
    { id: "yunjo", text: "윤조" },
    { id: "yunjoperfecting", text: "윤조퍼펙팅" },
    { id: "jaum", text: "자음생" },
    { id: "jaumbright", text: "자음생 브라이트닝" },
    { id: "comfort", text: "에센셜 컴포트" },
    { id: "perfect", text: "에센셜 퍼펙팅" },
    { id: "jinseol", text: "진설" },
    { id: "jjin", text: "진설명작" },
    { id: "etc", text: "기타" },
  ];

  return (
    <>
      <div className="products_sort">
          <div className="selectbox">
            <select id="sort_select" onChange={handleSelectChange}>
              <option value="type">제품 유형별</option>
              <option value="line">제품 라인별</option>
            </select>
            <span><i className="fas fa-chevron-down"></i></span>
          </div>
          <Swiper 
            className="swiper" 
            id={select ? "type" : "line"}
            slidesPerView="auto" 
            freeMode={true}
          >
            {(select ? typeItems : lineItems).map((item, index) => (
              <SwiperSlide 
                key={index} 
                className={item.id === selectedSlide ? "selected" : ""} 
                id={item.id}
                onClick={() => handleSlideClick(item.id)} // 클릭 이벤트 처리
              >
                {item.text}
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
      <ProductList selectedId={selectedSlide}/>
    </>
  )
}

export default ProductSort