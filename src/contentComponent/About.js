import React from 'react'
import './About.css';
import Purpose from '../structureComponent/about/Purpose';
import Content from '../structureComponent/about/Content';
function About() {
  return (
    <main id='about_main'>
      <Purpose/>
      <Content/>
    </main>
  )
}

export default About