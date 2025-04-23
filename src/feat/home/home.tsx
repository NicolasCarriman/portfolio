import React, { useEffect, useRef } from 'react';
import './home.css'

function Home() {
  const descriptionRef = useRef(null);

  useEffect(() => {
    const selectTextContent = () => {
      const
    }
    console.log(descriptionRef.current)
  }, [])
  return (
    <div className='home-content'>
      <h2 ref={descriptionRef}>Front End Developer </h2>
      <h1 className='main-title'>
        Nicolas Carriman
      </h1>
      <p className='main-country'>
        ARGENTINA
      </p>
    </div>
  )
}

export default Home;
