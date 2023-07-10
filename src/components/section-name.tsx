import React, { useContext, useEffect, useState } from 'react'
import './section-name.css';
import { SectionContext } from '../context/section/section.context';

function SectionName() {
  const { currentSection } = useContext(SectionContext);
  const [ animation, setAnimation ] = useState(true);

  useEffect(() => {
    if (!animation) {
      setAnimation(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection])

  return (
    <div className={ animation ? 'name-content active': 'name-content'} onAnimationEnd={() => setAnimation(false)}>
      <p>{currentSection}</p>
      <p>{currentSection}</p>
      <p>{currentSection}</p>
    </div>
  )
}

export default SectionName;
