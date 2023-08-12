import React from 'react'
import { FiMousePointer } from "react-icons/fi";
import './animatedMouse.css';

function AnimatedMouse() {
  return (
    <div className='mouse-container'>
      <FiMousePointer className='mouse-animation'/>
    </div>
  )
}

export default AnimatedMouse;
