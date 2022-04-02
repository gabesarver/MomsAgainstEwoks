import React from 'react'
import EwokNavbar from './EwokNavbar.js'
import background from './neongrid.png'
import './TextStyles.css'

function Action() {
  return (
    <body className='body'>
            <div style={{ backgroundImage: `url(${background})`, 
                backgroundRepeat: 'repeat',
            }}>
                
                <EwokNavbar />
            
                <center className='header1'> What Can YOU do?? </center><br></br>
                <text className='body'>
                To start, we need to reach out to other mothers and let them know the horrors of ewoks by
                sharing this page! The more mothers out there that know the more safe are kids are.<br></br>
                </text>


            </div>
        </body>
  )
}

export default Action
