import React, { useEffect, useRef } from 'react'
import NavItem from './nav-item';
import './header.css';
import { section, useGlobalContext } from '../context/section/section.context';
import { sections } from '../utilities/sections';

function Header() {

  const { currentSection, setCurrentSection } = useGlobalContext();
  const listRef = useRef<HTMLUListElement>(null);

  const getItemHeight = (index: number) => {
    const el = listRef.current;
    if (!el) return;
    const listItems = el.querySelectorAll('li');
    if (!listItems) return;
    const height = listItems[index].offsetHeight;
    return height;
  }

  const accumulateDistance = (index: number) => {
    let distances;
    if (index < 2) {

      distances = sections
      .slice(index, 2)
      .map((_, i) => getItemHeight(i));
    } else {

      distances = sections
      .slice(2, index)
      .map((_, i) => getItemHeight(i));      
    };
  
    const accumulatedDistance = distances.reduce((accumulator, currentHeight) => {
      if (typeof accumulator === 'number' && typeof currentHeight === 'number') {
        return accumulator + currentHeight;
      }
      return currentHeight;
    }, 0);
  
    return accumulatedDistance;
  }

  const slide = () => {
    const el = listRef.current;
    const index = sections.findIndex((item) => item === currentSection);
    if (!el) return;

    el.style.transition = '1.5s  cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    if (index === 2) {
      el.style.transform = `translateY(0px)`;
    } else if(index < 2) {
      el.style.transform = `translateY(+${accumulateDistance(index)}px)`;
    } else {
      el.style.transform = `translateY(-${accumulateDistance(index)}px)`;
    }
  }

  const handleClick = (s: section) => {
    setCurrentSection(s);
  }

  useEffect(() => {
    slide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection]);

  return (
    <aside
      className={'header-contnainer'}
    >
      <div className='mask'/>
      <ul ref={listRef} className='nav-li'>
        {
          sections.map((i) => (
            <NavItem
              className={currentSection === i ? 'selected' : null}
              key={i}
              onClick={() => handleClick(i)}
            >
              {i}
            </NavItem>
          ))
        }
      </ul>
    </aside>
  )
}

export default Header;
