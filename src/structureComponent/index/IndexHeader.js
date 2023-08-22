import React, { useState } from "react";
import "./index_header.css";
import { Link } from "react-router-dom";

function Header() {
  /* 사이드메뉴 오픈 */
  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!isOpen);
    console.log(isOpen);
  };
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeTwoDepth, setActiveTwoDepth] = useState(-1);
  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1); // If the item is already active, deactivate it
    } else {
      setActiveIndex(index);
    }
  };
  const twoDepthToggle = (index, event) => {
    event.stopPropagation(); // 이벤트 버블링 방지
    if (activeTwoDepth === index) {
      setActiveTwoDepth(-1);
    } else {
      setActiveTwoDepth(index);
    }
  };

  return (
    <div>
      <header id="index_header">
        <div className="moblie_header_inner">
          <div className="hamburger">
            <button type="button" id="sideBar_open" onClick={toggleMenu}>
              <i className="icon_menu"></i>
            </button>
          </div>
          <div className="logo">
            <Link to="/" className="logo_a">
              <img
                src="./images/main/sulwhasoo_white_logo.png"
                alt="설화수로고"
              ></img>
            </Link>
          </div>
          <div className="search">
            <img
              src="./images/main/icon/search_white_icon.png"
              alt="서치아이콘"
            ></img>
          </div>
        </div>

        <div className="pc_header_inner">
          <div className="pc_lnb w1100">
            <div className="language_select">
              한국/한국어{" "}
              <img
                src="./images/main/icon/language_arrow_white.png"
                alt="언어선택탭"
                id="language_icon"
              ></img>
            </div>
            <div className="pc_logo">
              <Link to="/">
                <img
                  src="./images/main/sulwhasoo_white_logo.png"
                  alt="설화수로고"
                  id="pc_orange_logo"
                ></img>
              </Link>
            </div>
            <div className="search_area">
              <span>매장찾기</span>
              <span>구매하기</span>
              <span>
                <img
                  src="./images/main/icon/search_white_icon.png"
                  alt="서치아이콘"
                  id="search_icon"
                ></img>
              </span>
            </div>
          </div>
          <div className="pc_nav">
            <ul className="pc_gnb_menu">
              <li className="pc_nav_d1">
                <Link to="yunjo" className="d1_menu">
                  윤조
                </Link>
              </li>
              <li className="pc_nav_d1">
                <Link to="ginseng" className="d1_menu">
                  자음생
                </Link>
              </li>
              <li className="pc_nav_d1">
                <Link to="gift" className="d1_menu">
                  기프트
                </Link>
              </li>
              <li className="pc_nav_d1">
                <Link to="product" className="d1_menu">
                  제품
                </Link>
                <ul className="pc_nav_d2_box">
                  <div className="pc_nav_d2_container d2_box1">
                    <li className="pc_nav_d2">
                      <Link to="#" className="d2_hover">
                        스킨케어
                      </Link>
                    </li>
                    <li className="pc_nav_d2">
                      <Link to="#" className="d2_hover">
                        메이크업
                      </Link>
                    </li>
                    <li className="pc_nav_d2">
                      <Link to="#" className="d2_hover">
                        남성
                      </Link>
                    </li>
                  </div>
                </ul>
              </li>
              <li className="pc_nav_d1">
                <Link to="spaintro" className="d1_menu">
                  스파
                </Link>
                <ul className="pc_nav_d2_box">
                  <div className="pc_nav_d2_container d2_box2">
                    <li className="pc_nav_d2">
                      <Link to="spaintro" className="d2_hover">
                        소개
                      </Link>
                    </li>
                    <li className="pc_nav_d2">
                      <Link to="spaprogram" className="d2_hover">
                        스파 프로그램
                      </Link>
                    </li>
                    <li className="pc_nav_d2">
                      <Link to="#" className="d2_hover">
                        예약
                      </Link>
                    </li>
                    <li className="pc_nav_d2">
                      <Link to="#" className="d2_hover">
                        매장 찾기
                      </Link>
                    </li>
                  </div>
                </ul>
              </li>
              <li className="pc_nav_d1">
                <Link to="flagshipMain" className="d1_menu">
                  플래그십 스토어
                </Link>
                <ul className="pc_nav_d2_box">
                  <div className="pc_nav_d2_container d2_box3">
                    <li className="pc_nav_d2">
                      <Link to="flagshipBukchon" className="d2_hover">
                        설화수 북촌
                      </Link>
                    </li>
                    <li className="pc_nav_d2">
                      <Link to="flagshipDosan" className="d2_hover">
                        설화수 도산
                      </Link>
                    </li>
                  </div>
                </ul>
              </li>
              <li className="pc_nav_d1">
                <Link to="about" className="d1_menu">
                  ABOUT 설화수
                </Link>
                <ul className="pc_nav_d2_box">
                  <div className="pc_nav_d2_container d2_box4">
                    <li className="pc_nav_d2">
                      <Link to="#" className="d2_menu">
                        브랜드 스토리
                      </Link>
                      <ul className="pc_nav_d3_box">
                        <li className="pc_nav_d3">
                          <Link to="#">브랜드 빌리프</Link>
                        </li>
                        <li className="pc_nav_d3">
                          <Link to="#">브랜드 캠페인</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="pc_nav_d2">
                      <Link to="#" className="d2_menu">
                        브랜드 앰버서더
                      </Link>
                      <ul className="pc_nav_d3_box">
                        <li className="pc_nav_d3">
                          <Link to="#">로제</Link>
                        </li>
                        <li className="pc_nav_d3">
                          <Link to="#">틸다 스윈튼</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="pc_nav_d2">
                      <Link to="#" className="d2_menu">
                        ART
                      </Link>
                      <ul className="pc_nav_d3_box">
                        <li className="pc_nav_d3">
                          <Link to="#">MET</Link>
                        </li>
                        <li className="pc_nav_d3">
                          <Link to="#">설화문학전</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="pc_nav_d2">
                      <Link to="#" className="d2_menu">
                        HERITAGE
                      </Link>
                      <ul className="pc_nav_d3_box">
                        <li className="pc_nav_d3">
                          <Link to="#">SINCE 1932</Link>
                        </li>
                        <li className="pc_nav_d3">
                          <Link to="#">명작컬렉션</Link>
                        </li>
                      </ul>
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
          <div className="hover_border"></div>
        </div>
      </header>

      <div className={`side_cover ${isOpen ? "open" : ""}`}>
        <div className={`side_header ${isOpen ? "open" : ""}`}>
          <Link to="#" className="orange_logo"></Link>
          <button className="close_btn" onClick={toggleMenu}></button>
        </div>
        <nav id="side_bar" className="side_bar">
          <div className="sideBox">
            <div className="side_content">
              <ul id="global_nav" className="nav_list">
                <li className="nav_d1">
                  <Link to="yunjo" class="no_depth_menu">
                    윤조
                  </Link>
                </li>
                <li className="nav_d1">
                  <Link to="ginseng" className="no_depth_menu">
                    자음생
                  </Link>
                </li>
                <li className="nav_d1">
                  <Link to="gift" className="no_depth_menu">
                    기프트
                  </Link>
                </li>
                <li
                  className={`nav_d1 ${activeIndex === 0 ? "on" : ""}`}
                  onClick={() => handleToggle(0)}
                >
                  <Link to="product" className="depth_toggle">
                    제품
                  </Link>
                  <ul className="nav_d2_box">
                    <li className="nav_d2">
                      <Link to="#" className="nav_d2_menu">
                        스킨케어
                      </Link>
                    </li>
                    <li className="nav_d2">
                      <Link to="#" className="nav_d2_menu">
                        메이크업
                      </Link>
                    </li>
                    <li className="nav_d2">
                      <Link to="#">남성</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav_d1 ${activeIndex === 1 ? "on" : ""}`}
                  onClick={() => handleToggle(1)}
                >
                  <Link to="spaintro" className="depth_toggle">
                    스파
                  </Link>
                  <ul className="nav_d2_box">
                    <li className="nav_d2">
                      <Link to="spaintro" className="nav_d2_menu">
                        소개
                      </Link>
                    </li>
                    <li className="nav_d2">
                      <Link to="spaprogram" className="nav_d2_menu">
                        스파 프로그램
                      </Link>
                    </li>
                    <li className="nav_d2">
                      <Link to="#" className="nav_d2_menu">
                        예약
                      </Link>
                    </li>
                    <li className="nav_d2">
                      <Link to="#">매장 찾기</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav_d1 ${activeIndex === 2 ? "on" : ""}`}
                  onClick={() => handleToggle(2)}
                >
                  <Link to="flagshipMain" className="depth_toggle">
                    플래그십 스토어
                  </Link>
                  <ul className="nav_d2_box">
                    <li className="nav_d2">
                      <Link to="flagshipMain" className="nav_d2_menu">
                        플래그십 스토어
                      </Link>
                    </li>
                    <li className="nav_d2">
                      <Link to="flagshipBukchon" className="nav_d2_menu">
                        설화수 북촌
                      </Link>
                    </li>
                    <li className="nav_d2">
                      <Link to="flagshipDosan">설화수 도산</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav_d1 ${activeIndex === 3 ? "on" : ""}`}
                  onClick={() => handleToggle(3)}
                >
                  <Link to="about" className="depth_toggle">
                    ABOUT 설화수
                  </Link>
                  <ul className="nav_d2_box">
                    <li
                      className={`nav_d2 ${activeTwoDepth === 1 ? "on" : ""}`}
                      onClick={(e) => twoDepthToggle(1, e)}
                    >
                      <Link to="#" className="nav_d2_menu nav_d3_menu">
                        브랜드 스토리
                      </Link>
                      <ul className="nav_d3_box">
                        <li className="nav_d3">
                          <Link to="#">브랜드 빌리프</Link>
                        </li>
                        <li className="nav_d3">
                          <Link to="#">브랜드 캠페인</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={`nav_d2 ${activeTwoDepth === 2 ? "on" : ""}`}
                      onClick={(e) => twoDepthToggle(2, e)}
                    >
                      <Link to="#" className="nav_d2_menu nav_d3_menu">
                        브랜드 앰버서더
                      </Link>
                      <ul className="nav_d3_box">
                        <li className="nav_d3">
                          <Link to="#">로제</Link>
                        </li>
                        <ul className="nav_d4_box">
                          <li className="nav_d4">
                            <Link to="#">PART 1 SULWHASOO REBLOOM</Link>
                          </li>
                          <li className="nav_d4">
                            <Link to="#">PART 2 ROSÉ IN BUKCHON</Link>
                          </li>
                        </ul>
                        <li className="nav_d3">
                          <Link to="#" className="nav_d2_menu">
                            틸다 스윈튼
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={`nav_d2 b500 ${
                        activeTwoDepth === 3 ? "on" : ""
                      }`}
                      onClick={(e) => twoDepthToggle(3, e)}
                    >
                      <Link to="#" className="nav_d2_menu nav_d3_menu">
                        ART
                      </Link>
                      <ul className="nav_d3_box">
                        <li className="nav_d3 b500">
                          <Link to="#">MET</Link>
                        </li>
                        <li className="nav_d3">
                          <Link to="#" className="nav_d2_menu">
                            설화문화전
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={`nav_d2 b500 ${
                        activeTwoDepth === 4 ? "on" : ""
                      }`}
                      onClick={(e) => twoDepthToggle(4, e)}
                    >
                      <Link to="#" className="nav_d2_menu nav_d3_menu">
                        HERITAGE
                      </Link>
                      <ul className="nav_d3_box">
                        <li className="nav_d3 b500">
                          <Link to="#">SINCE 1932</Link>
                        </li>
                        <li className="nav_d3">
                          <Link to="#">명작컬렉션</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="other_info">
                <ul>
                  <li>
                    <Link to="#">로그인</Link>
                  </li>
                  <li>매장찾기</li>
                </ul>
                <button type="button" className="mobile_select_language">
                  <span>LANGUAGE</span>
                  <span className="language_select">
                    한국/한국어{" "}
                    <img
                      src="/images/main/icon/plus.png"
                      alt="플러스아이콘"
                    ></img>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Header;
