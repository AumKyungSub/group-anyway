import React from 'react'
import { Link } from 'react-router-dom'


const SpaArticle = (props) => {
    const {id, part, en, kr, desc, price} = props;

  return (
  <article className="program-part">
      <h3>
          <p>{part}</p>
          <p className="spa-en">{en}</p>
          <p className="spa-ko">{kr}</p>
      </h3>
      <p className="spa-desc">
          {desc}
          <br/>
          <br/>
          <span className="spa-price">{price}</span>
      </p>
      <button>
          <Link to="#" className="linked">예약</Link>
      </button>
  </article>

  )
}

export default SpaArticle