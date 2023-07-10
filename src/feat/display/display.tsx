import React, { useContext, useEffect, useRef, useState } from 'react'
import Project from '../projects/project';
import { SectionContext } from '../../context/section/section.context';
import Home from '../home/home';
import './display.css';
import Technologies from '../technologies/technologies';
import Curriculum from '../curriculum/curriculum';
import Contact from '../contact/contact';
import { sections } from '../../utilities/sections';

function Display() {
  const { currentSection, setCurrentSection } = useContext(SectionContext);
  const [currentIndex, setCurrentIndex] = useState(2);
  const contentRef = useRef<HTMLDivElement>(null);

  const slideUp = (el: HTMLDivElement, index: number) => {
    const elementStyle = el.style;
    elementStyle.transform = `translateY(-${index * 100}vh)`;
  };

  const slideDown = (el: HTMLDivElement, index: number) => {
    const elementStyle = el.style;
    elementStyle.transform = `translateY(-${index * 100}vh)`;
  }

  const handleScrolling = (e: React.WheelEvent<HTMLElement>) => {
    const deltaY = e.deltaY;

    if (contentRef.current) {
      if (deltaY > 0 && currentIndex + 1 < 5) {

        const index = currentIndex + 1;
        const nextSection = sections[index];
        
        setCurrentIndex(index);
        setCurrentSection(state => nextSection);
        
      } else if (deltaY < 0 &&  currentIndex > 0) {
        
        const index = currentIndex - 1;
        const nextSection = sections[index];

        setCurrentIndex(index);
        setCurrentSection(state => nextSection);
        
      }
    }
  };

  useEffect(() => {
    setCurrentIndex(sections.findIndex(section => section === currentSection))
  }, [currentSection]);

  useEffect(() => {
    if (!contentRef.current) return;
    if ( currentIndex < 5) {
      const index = currentIndex;
      slideDown(contentRef.current, index);

    } else if (currentIndex > 0) {
      const index = currentIndex;
      slideUp(contentRef.current, index);

    }
  }, [currentIndex]);

  return (
    <div
      ref={contentRef}
      className='section-content'
      onWheel={handleScrolling}>
      <Technologies />
      <Project />
      <Home />
      <Curriculum />
      <Contact />
    </div>
  )
}

export default Display;
