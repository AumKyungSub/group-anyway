import React from "react";
import { Link } from "react-router-dom";

import './MainSectionOne.css'

function MainSectionOne() {
  return (
    <section className="sec_1">
      <div className="text_cover">
        <h2>
          Dosan <br />
          Flagship <br />
          Store
        </h2>
        <p className="p_web">
          등불이 어둠을 밝혀 길을 안내하듯 <br />
          아름다움을 널리 비추다
        </p>
        <div>
          <Link to="/flagshipDosan">
            <span>자세히 보기</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainSectionOne;
