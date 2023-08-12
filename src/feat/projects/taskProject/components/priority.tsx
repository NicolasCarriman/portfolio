import React from 'react';
import './priority.css';

interface Props {
  type: 'low' | 'medium' | 'high'
}

function Priority({type}: Props) {
  let priorityStyle: string;

  switch (type) {
    case 'medium':
      priorityStyle = 'medium-priority';
      break;
    case 'high':
      priorityStyle = 'high-priority';
      break;
    case 'low':
      priorityStyle = 'low-priority';
      break;
    default:
      priorityStyle = 'medium-priority';
      break;
  }

  return (
    <div className={priorityStyle}>
      {type}
    </div>
  )
}

export default Priority