/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './status.css';

interface Props {
  type: 'inProgress' | 'done' | 'stuck'
}

function Status({ type }: Props) {
  let status: string;
  let statusStyle: string = '';

  switch (type) {
    case 'done':
      status = 'done';
      statusStyle = 'status-done';
      break;
    case 'stuck':
      status = 'stuck';
      statusStyle = 'status-stuck';
      break;
    case 'inProgress':
      status = 'in progress';
      statusStyle = 'status-in-progress';
      break;
    default:
      status = 'in progress';
      break;
  }

  return (
    <div className='status-container'>
      <div className={statusStyle}>
          {status && status}
      </div>
    </div>
  )
}

export default Status;
