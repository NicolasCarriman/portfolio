import React, { useState } from 'react';
import './taskList.css';
import ThreeDBox from '../../../components/threeDBox';
import TaskItem from './components/taskItem';

const list = ['t-1', 't-2', 't-3', 't-4'];

interface Props {
  hideMouse: () => void;
}

function TaskInteractiveProject({ hideMouse }: Props) {
  const [hoverId, setHoverId] = useState('');

  const handleHover = (id: string) => {
    setHoverId(id)
    hideMouse();
  }

  const handleOut = () => {
    setHoverId('');
  }

  const hoverStyle = {
    filter: 'drop-shadow(black 2px 4px 6px)',
    zIndex: 100,
    transform: 'rotate3d(2, 9, 1, 45deg) scale(1.05) translate(-3vw, 1.2vw)',
    transition: 'transform 0.5s cubic-bezier(0.01, 0.68, 0.58, 1) 0s',
  };

  const notHoverStyle = {
    filter: 'blur(2px)',
  };


  return (
    <div className='task-list-container' >
      {
        list.map((item) => (
          <ThreeDBox
            style={item === hoverId ? hoverStyle : {}}
            key={item}
            onMouseEnter={() => handleHover(item)}
            onMouseLeave={handleOut}
          >
            <TaskItem style={hoverId !== '' && hoverId !== item ? notHoverStyle : {}} />
          </ThreeDBox>
        ))
      }
    </div>
  )
}

export default TaskInteractiveProject;
