import React from 'react';
import './container.css';

function Container({ children }: React.ComponentProps<'div'>) {

  return (
    <div className='container'>
      { children }
    </div>
  )
}

export default Container;
