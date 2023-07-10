import React from 'react'
import Container from '../../components/container'
import TechnologyComponent, { technologies } from '../../components/technology';
import './technologies.css';

function Technologies() {
  const items: technologies[] = [
    'chakra',
    'jest',
    'lerna',
    'material',
    'next',
    'redux',
    'tailwind',
    'testing',
    'ts',
    'webpack',
    'axios'
  ];

  return (
    <Container>
      <div className='technologies-content'>
        {
          items.map((item) =>(
            <TechnologyComponent key={item} variant='medium' type={item} />
          ))
        }
      </div>
    </Container>
  )
}

export default Technologies;
