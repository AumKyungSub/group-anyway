import React from 'react'
import {Link} from 'react-router-dom'
import './flagship_sec.css'

function Flagship_sec() {
  return (
    <section class="flagship w1440">
          <div class="flagship_container">
            <div class="bukchon_box">
              <Link to="#" class="bukchon">
                <article><img src="./images/main/bukchon.jpg" alt="북촌"></img></article>
                <h2>설화수 북촌 플래그십 스토어</h2>
                <button>자세히 보기</button>
              </Link>
            </div>
            <div class="dosan_box">
              <Link to="#" class="dosan">
                <article><img src="./images/main/dosan.jpg" alt="도산"></img></article>
                <h2>설화수 도산 플래그십 스토어</h2>
                <button>자세히 보기</button>
              </Link>
            </div>
          </div>
        </section>
  )
}

export default Flagship_sec
