import React, { useState } from 'react'
import './welcome.css';
import { useNavigate } from 'react-router-dom';

declare module 'react' {
  interface CSSProperties {
    '--index'?: number;
  }
}

function Wellcome() {
  const [color, setColor] = useState('gray');
  const navigate = useNavigate();
  const welcomeText = 'BIENVENIDO';

  const changeColor = () => {
    setTimeout(() => {
      setColor('black');
      setTimeout(() => {
        navigate('/Portfolio');
      }, 600);
    }, 700);
    
  }


  return (
    <div className={`welcome-container ${color}`}>
      <div className='welcome-content'>
        {
          welcomeText.split('').map((e, index) => {
            return (
              <span
                onAnimationEnd={() => index === e.length - 1 && changeColor()}
                key={e.concat(index.toString())}
                style={{
                  '--index': index + 1
                }}
              >{e}
              </span>
            )
          })
        }
      </div>
    </div>
  )
}

export default Wellcome;
