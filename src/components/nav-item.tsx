import React from 'react';
import './nav-item.css';

interface NavItemProps {
  children: React.ReactNode;
  className: string | null;
  onClick: React.MouseEventHandler<HTMLLIElement> 
}

function NavItem({ children, className, onClick }: NavItemProps) {

  return (
    <li  onClick={onClick} className={`nav-item ${className}`} >{ children }</li>
  )
}

export default NavItem;

