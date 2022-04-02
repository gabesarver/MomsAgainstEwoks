import React from 'react'
import './TextStyles.css'

function Homepage() {
  return (
    <body className='body'>
        <div style={{
          display: 'flex',  
          justifyContent:'center', 
          alignItems:'center',  
          height: '450px',
          }}>
            <text className='text'>
              Things
            </text>
        </div>
    </body>
  )
}

export default Homepage