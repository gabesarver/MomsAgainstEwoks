import React from 'react'
import './TextStyles.css'
import EwokNavbar from './EwokNavbar.js'

import background from './images/neongrid.png'
import Header from './Header'

import adPic from './Ad_01.PNG'

import Ad from './components/Ads.js'

//import './components/TextStyles.'


function AboutUs() {
    return (
        
        <div className='body' style={{ backgroundImage: `url(${background})`, width: '100vw',
        height: '100vh',

        backgroundRepeat: 'repeat',
    }}>
        <Header />
        
        <EwokNavbar />
            <div className = 'content' style={{display: 'inline-block'}}>
                
            
                
            
                <center className='header1'> About Us </center><br></br>
                <text className='body'>
                We are Moms Against Ewoks (MAE), and our mission is to 
                protect the world’s children from the satanic man-eating 
                creatures marketed to them. We hope that by raising 
                awareness and informing the public about this issue we 
                can enact change in retailers nationwide, and end the 
                efforts to indoctrinate our children through the selling 
                of Ewok toys.<br></br>
                </text>

                <center className='header1'>What are Ewoks?<br></br></center>
                <text className='body'>
                 These furry friends of Mephistopheles appear in the new 
                 movie Star Wars: Return of the Jedi, and help the “heroes”
                 of the movie commit violent acts of terrorism with the 
                 aid of Satanic forces. They are short creatures with 
                 dog-like noses to remind children of their loyal furry 
                 friends, human-looking faces to trick our kids into 
                 seeing them as being created in God’s image, and a teddy
                  bear anatomy complimented with beady eyes to lure our
                 children into the embrace of Lucifer. 
                </text>


            </div>
            <Ad img = {adPic}/>

            
        </div>
        
    );


    
}
export default AboutUs