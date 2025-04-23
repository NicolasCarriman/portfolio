import React, { useState } from 'react';
import Container from '../../components/container';
import './project.css';
import TaskList from './taskProject/taskList';
import AnimatedMouse from './taskProject/components/animatedMouse';
import TaskInteractiveProject from './taskProject/taskList';

function Project() {
  const [showMouseEffect, setShowMouseEffect] = useState(true);
  return (
    <Container>
      <div className='project-content'>
        <div className='project-presentation'>
          <p>
            T-Task
          </p>
          <p>
            t task permite trabajar en tareas de manera colavorativa
          </p>
        </div>
        <div
          className='project-element'
        >
          <TaskInteractiveProject hideMouse={() => setShowMouseEffect(false)} />
        </div>
        {
          showMouseEffect && <AnimatedMouse />
        }
      </div>
    </Container >
  )
}

export default Project;
