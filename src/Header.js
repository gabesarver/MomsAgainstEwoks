import React from 'react'
import logo from './images/fuckewok.svg';
import './header.css';
import './TextStyles.css';

export default function Header() {
  return (
    <div className='main'>
        <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='background'>
            <div className='date'>
              <text className="body"> June 25, 1983 </text>
            </div>
        </div>
    </div>
  )
}
