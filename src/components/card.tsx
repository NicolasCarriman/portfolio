import React, { useRef, useState } from 'react';
import './card.css';
import { FiMousePointer } from "react-icons/fi";
import SliderImg from './slider-img';
import TechnologyComponent from './technology';
import { IProject } from '../models/project.model';

export type linkType = {
  github: string,
  demo: string,
}

interface Props {
  data: IProject
}

function Card({data}: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  const getElements = () => {
    const el = sliderRef.current;
    if (!el) return;
    if (!el.firstChild) return;
    const children = el.firstChild as HTMLDivElement;

    return { el, children };
  }

  const handleHover = () => {
    setHover(true);
    const elements = getElements();
    if (!elements) return;

    const { el, children } = elements;
    const width = children.offsetWidth;

    el.style.transition = 'all 0.4s ease-out';
    el.style.transform = `translateX(-${width}px)`;
  }

  const handleOut = () => {
    setHover(false);
    const elements = getElements();
    if (!elements) return;

    const { el } = elements;

    el.style.transition = 'all 0.4s ease';
    el.style.transform = `translateX(0px)`;
  }

  return (
    <div
      className='card-container'
      onMouseEnter={handleHover}
      onMouseLeave={handleOut}
    >
      <SliderImg imgs={data.imgs} isSlide={hover} />
      <div className='card-content'>
        <div className='card-slider' ref={sliderRef}>
          <div className='card-section'>
            <h1>{data.tittle}</h1>
            <FiMousePointer className='mouse-animation' />
          </div>
          <div className='card-section'>
            <div className='section-mask'>
              <div className='card-description'>
                {
                  data.descriptions.map((d, i) => <p key={i}>
                    {d}
                  </p>)
                }
                <div className='card-links'>
                  <a href={data.links.github}>Github</a>
                  <a href={data.links.demo}>Demo</a>
                </div>
                <div className='card-technologies'>
                  {
                    data.technoloiges.map((t) => (
                      <TechnologyComponent  key={t} type={t}/>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
