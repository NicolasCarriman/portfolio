import React from 'react';
import './avatar.css';

interface Props {
  label: string;
}

function Avatar({ label }: Props) {
  return (
    <div className='avatar-container'>
      <div className='avatar-content'>
        {
          label[0]
        }
      </div>
      <p>
        {
          label
        }
      </p>
    </div>
  )
}

export default Avatar