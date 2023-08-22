import React from "react";
import { Link } from "react-router-dom";

import './MainSectionTwo.css'

function MainSectionTwo() {
  return (
    <section className="sec_2">
      <div className="text_cover">
        <h2>
          The House of <br />
          Sulwhasoo <br />
          Bukchon
        </h2>
        <p className="p_web">
          설화수의 시선으로 담아낸 <br />
          동시대적 아름다움을 경험하다
        </p>
        <div>
          <Link to="/flagshipBukchon">
            <span>자세히 보기</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainSectionTwo;
