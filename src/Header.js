import React from 'react'
import logo from './images/fuckewok.svg';
import './css/header.css';
import './css/TextStyles.css';

export default function Header() {
  return (
    <div className='main'>
        <div className="logo">     
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='background'>
        </div>
    </div>
  )
}
