import React from 'react'
import Header from '../../components/header';
import './main.css';
import SectionName from '../../components/section-name';
import Display from '../display/display';

function Main() {

  document.body.style.backgroundColor = '#0B0F14';
  return (
      <main className='main-content'>
        <Header />
        <section className='section-container'>
          <Display />
          <SectionName/>
        </section>
      </main>
  )
}

export default Main;
