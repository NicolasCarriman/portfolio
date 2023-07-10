import React, { useEffect, useState } from 'react';
import './slider-img.css';

interface SliderImgProps {
  imgs: string[];
  isSlide: boolean;
}

function SliderImg({ imgs, isSlide }: SliderImgProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideImages = () => {
    if (currentIndex >= 0 && currentIndex < imgs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex === imgs.length - 1) {
      setCurrentIndex(0);
    }
  }

  useEffect(() => {
    if (!isSlide) return;
    setTimeout(() => {
      slideImages();
    }, 2000);
  });

  return (
    <div className='image-container'>
      <img src={imgs[currentIndex]} alt={imgs[currentIndex]} ></img>
    </div>
  )
}

export default SliderImg;
