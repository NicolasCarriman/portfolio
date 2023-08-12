import React from 'react';
import './threeDBox.css';

interface Props extends React.ComponentProps<'div'>{
}

function ThreeDBox({ children, ...rest }: Props) {

  return (
    <div className='box-container' {...rest} >
      <div className='box-content'>
        {children}
      </div>
    </div>
  )
}

export default ThreeDBox;
