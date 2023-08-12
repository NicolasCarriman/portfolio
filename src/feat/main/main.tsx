import React from 'react'
import Header from '../../components/header';
import './main.css';
import SectionName from '../../components/section-name';
import Display from '../display/display';
import MobileNav from '../../components/mobile-nav';

function Main() {

  document.body.style.backgroundColor = '#0B0F14';
  return (
    <>
      <MobileNav />
      <main className='main-content'>
        <Header />
        <section className='section-container'>
          <Display />
        </section>
      </main>
      <footer className='footer-content'>
        <SectionName/>
      </footer>
    </>
  )
}

export default Main;
