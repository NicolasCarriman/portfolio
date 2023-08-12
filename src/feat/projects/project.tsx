import React, { useEffect, useRef, useState } from 'react'
import './project.css';
import Container from '../../components/container';
import Card from '../../components/card';
import Selector, { selector } from '../../components/selector';
import { projectData } from '../../utilities/cardData';

const elements: selector[] = [
  {
    el: 'card1',
    selected: true
  },
  {
    el: 'card2',
    selected: false
  },
]

export default function Project() {
  const [cards, setCards] = useState(elements);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);


  const getElements = () => {
    const el = sliderRef.current;
    if (!el) return;
    if (!el.firstChild) return;
    const children = el.firstChild as HTMLDivElement;

    return { el, children };
  }

  const next = () => {
    const elements = getElements();
    if (!elements) return;

    const { el, children } = elements;
    const width = children.offsetWidth;

    el.style.transition = 'all 0.4s ease-out';
    el.style.transform = `translateX(-${width + 40}px)`;
  }

  const prev = () => {
    const elements = getElements();
    if (!elements) return;

    const { el } = elements;

    el.style.transition = 'all 0.4s ease-out';
    el.style.transform = `translateX(0px)`;
  }

  const handleSelect = (el: string) => {
    const updatedSelected = cards.map((c) => {
      if (c.el === el) {
        return { ...c, selected: true };
      } else return { ...c, selected: false };
    });
    const selectedIndex = updatedSelected.findIndex((c) => c.selected === true);

    if (selectedIndex < cards.length && selectedIndex !== 0) {
      next();
    } else prev();
    setCards(updatedSelected);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 480px)');

    const actualizarEsMobile = (event: any) => {
      setIsMobile(event.matches);
    };
    actualizarEsMobile(mediaQuery);

    mediaQuery.addListener(actualizarEsMobile);

    return () => {
      mediaQuery.removeListener(actualizarEsMobile);
    };
  }, []);

  return (
    <Container>
      <div className='project-content'>
        <div className='project-section'>
          <div ref={sliderRef} className='project-slider'>
            {
                projectData.map((c, i) => (
                  <Card data={c} key={i} />
                ))
            }
          </div>
        </div>
        {
          !isMobile &&
          <Selector setElements={handleSelect} elements={cards} />
        }
      </div>
    </Container >
  )
};
