import React from 'react';
import Container from '../../components/container';
import './project.css';
import TaskList from './taskProject/taskList';
import AnimatedMouse from './taskProject/components/animatedMouse';

function Project() {
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
          <TaskList />
        </div>
        <AnimatedMouse />
      </div>
    </Container >
  )
}

export default Project;
