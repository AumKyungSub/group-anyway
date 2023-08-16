import React, {useEffect, useState} from 'react';
import '../css/YunjoSec09.css';

function YunjoSec09({mobile,pc}) {
    // bgi 넣기
   const [bgImg, setBgImg] = useState(
        mobile?'./images/yunjo/yunjo_mobile/shadowCream_m.png':'./images/yunjo/yunjo_pc/shadowCream_pc.png'
    );
    useEffect(()=>{
        const handleResize = () => {
            const newBgImg = window.innerWidth <= 767
                ? './images/yunjo/yunjo_mobile/shadowCream_m.png'
                : './images/yunjo/yunjo_pc/shadowCream_pc.png';
            setBgImg(newBgImg);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);
    const style = {
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: mobile?'100%':'contain'
    };
  return (
    <section className="yunjo_sec09" style={style} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
        <div className="cream_text_wrap">
            <div className="cream_text">
                <h2  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
                    설화수의<br className="mo"/>
                    지속가능한 내일.
                </h2>
                <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                윤조에센스 6세대는<br className="mo"/>
                천연유래지수 94% <sup>*</sup>의 포뮬러,<br/>
                유리 중량이 감축된 용기, 재활용 플라스틱 캡,<br className="mo"/>
                FSC 인증 용지를 사용합니다.
                </p>
                <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
                *ISO 16128 가이드라인에 따라 계산한 지수<br/>
                다만, 이 지수는 식품의약품안전처의 천연 화장품 기준에 따른<br className="mo"/>
                </p>
            </div>
            <div className="product_set">
                <ul className="yunjo_product">
                <li className="product01" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                    <div className="product01_img">
                    <picture>
                        <source srcSet="./images/yunjo/yunjo_pc/yunjo_product01_pc.png" media="(min-width:768px)"/>
                        <img src="./images/yunjo/yunjo_mobile/yunjo_product01_m.png" alt="제품1"/>
                    </picture>
                    </div>
                    <h2>윤조에센스 6세대</h2>
                    <p>FIRST CARE ACTIVATING SERUM VI</p>
                    <button>구매하러 가기</button>
                </li>
                <li className="product02" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
                    <div className="product02_img">
                    <picture>
                        <img src="./images/yunjo/yunjo_mobile/yunjo_product02_m.png" alt="제품2"/>
                    </picture>
                    </div>
                    <h2>첫 설화수 세트</h2>
                    <p>MY FIRST SULWHASOO SET</p>
                    <button>자세히 보기</button>
                </li>
                <li className="product03" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                    <div className="product03_img">
                    <picture>
                        <source srcSet="./images/yunjo/yunjo_pc/yunjo_product03_pc.png" media="(min-width:768px)"/>
                        <img src="./images/yunjo/yunjo_mobile/yunjo_product03_m.png" alt="제품3"/>
                    </picture>
                    </div>
                    <h2>설화수 베스트셀러 컬렉션</h2>
                    <p>SULWHASOO BESTSELLERS</p>
                    <button>자세히 보기</button>
                </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default YunjoSec09