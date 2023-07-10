import React from 'react';
import './selector.css';

export type selector = {
  el: string;
  selected: boolean;
}

interface Props {
  elements: selector[];
  setElements: (el:string) => void;
}

function Selector({ elements, setElements }: Props) {

  return (
    <div
      className='selector-container'
    >
      {
        elements.map((e) => (
          <div
            key={e.el}
            className={e.selected ? 'selector-selected' : 'selector'}
            onClick={() => setElements(e.el)}
            >.
            </div>
        ))
      }
    </div>
  )
}

export default Selector;
