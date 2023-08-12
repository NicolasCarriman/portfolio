import React from 'react'
import './category.css';

interface Props {
  label: string
}

function Category({ label } : Props) {
  return (
    <div
      className='category-container'
    >
      <div className='category-content'>
        {label}
      </div>
    </div>
  )
}

export default Category;
