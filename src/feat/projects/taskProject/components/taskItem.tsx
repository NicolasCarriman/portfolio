import React from 'react';
import './taskItem.css';
import Avatar from './avatar';
import Status from './status';
import Category from './category';
import Priority from './priority';

interface Props extends React.ComponentProps<'li'>{}

function TaskItem(props: Props) {
  const date = new Date();
  const today = `${date.getMonth() + 1}/${date.getDate()}`;

  return (
    <li className='li-container' {...props} >
      <div className='li-item'>
        <p className='task-name'>
          taskName
        </p>
      </div>
      <div className='li-item'>
        <Avatar label='Jhon Doe' />
        <Avatar label='Jane Doe' />
      </div>
      <div className='li-item'>
        <p className='date'>
          {today}
        </p>
      </div>
      <div className='li-item'>
        <Status type='inProgress' />
      </div>
      <div className='li-item'>
        <Priority type='medium'/>
      </div>
      <div className='li-item'>
        <Category label='Marketing' />
      </div>
    </li>
  )
}

export default TaskItem