import React from 'react'
import './mobile-nav.css'
import { sections } from '../utilities/sections'
import NavItem from './nav-item'

function MobileNav() {
  return (
    <header className='nav-content'>
      {
        sections.map((s) => (
          <NavItem children={s} className={null} onClick={() => console.log('test')} />
        ))
      }
    </header>
  )
}

export default MobileNav