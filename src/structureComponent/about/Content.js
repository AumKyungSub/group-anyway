import React, { useEffect, useRef, useState } from 'react'
import './Content.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionBelief from './SectionBelief';
import SectionIngredient from './SectionIngredient';
import SectionInnovation from './SectionInnovation';
import SectionCreated from './SectionCreated';
import SectionJourney from './SectionJourney';

function Content() {
    AOS.init();

    const [activeSection, setActiveSection] = useState('belief');
    const [isNavFixed, setIsNavFixed] = useState(false);

    const handleScroll = () => {
        const yOffset = window.scrollY;
        const beliefElem = document.getElementById('belief');
        const journeyElem = document.getElementById('journey');
        const sections = ['belief', 'ingredient', 'innovation', 'created', 'journey'];

        if (beliefElem) {
            const y = beliefElem.getBoundingClientRect().top + window.scrollY;
            
            if (yOffset >= y) {
                setIsNavFixed(true);
            } else {
                setIsNavFixed(false);
            }
        }

        if (journeyElem) {
            const y = journeyElem.getBoundingClientRect().top;
            const navigationLis = document.querySelectorAll('.navigation_box ul.navigation li');

            if (y <= 0) {
                navigationLis.forEach(li => li.classList.add('change'));
            } else {
                navigationLis.forEach(li => li.classList.remove('change'));
            }
        }

        for (let section of sections) {
            const elem = document.getElementById(section);
            if (elem) {
                const y = elem.getBoundingClientRect().top + window.scrollY;
                const height = elem.getBoundingClientRect().height;
                if (yOffset >= y && yOffset <= y + height) {
                    setActiveSection(section);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        const scrollEvent = () => {
            requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', scrollEvent);
        return () => window.removeEventListener('scroll', scrollEvent);
    }, []);

    const scrollToSection = (sectionId) => {
        const elem = document.getElementById(sectionId);
        if (elem) {
            const yOffset = 40; // Adjust this value according to your fixed header's height
            const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

  return (
    <div class="content_wrap">
        <div className={`navigation_box ${isNavFixed ? 'fixed' : ''}`}>
          <ul class="navigation list-group">
            {['belief', 'ingredient', 'innovation', 'created', 'journey'].map(section => (
                <li key={section}>
                    <a
                        href={`#${section}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(section);
                        }}
                        className={section === activeSection ? 'active' : ''}
                    >
                        {section==='created'?section.toUpperCase()+' BY SULWHASOO':'OUR '+section.toUpperCase()}
                    </a>
                </li>
            ))}
          </ul>
        </div>
        <SectionBelief/>
        <SectionIngredient/>
        <SectionInnovation/>
        <SectionCreated/>
        <SectionJourney/>
    </div>
  )
}

export default Content