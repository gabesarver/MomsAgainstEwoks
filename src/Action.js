import React from 'react'
import EwokNavbar from './EwokNavbar.js'
import background from './images/neongrid.png'
import './TextStyles.css'
import Header from './Header.js'
import adPic1 from './images/ad_03.PNG'
import Ad from './components/Ads.js'

function Action() {
  return (
    
            <div className = 'body' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
            }}>
                <Header />
                <EwokNavbar />
            
                <div className = 'content' style={{display: 'inline-block'}}>
                
            
                
            
                <center className='header1'> What You Can Do to Help </center><br></br>
                <center className='header2'> Spread the Word </center>
                <text className='body'>
                To start, we need to reach out to other mothers and let them know the horrors of Ewoks by
                sharing this page! The more mothers out there that know of the true nature of Ewoks, the more safe our kids will be.
                </text> <br></br>

                <center className='header2'> Boycott Satanist Businesses </center>
                <text className='body'>
                Any businesses that peddle these demonic idols to children will NOT be getting any of my money, and they should
                not get any of yours either! Refuse to shop at any businesses that sell even a single Ewok-related product. 
                Other Star Wars products are of course fine.
                </text> <br></br>

                <center className='header2'> Write a Letter To Your Representatives </center>
                <text className='body'>
                Unfortunately, sometimes the only way to enact real change is to get the government involved. Contact your 
                local, state, and federal representatives and demand the prohibition of Ewok-related products!
                </text> <br></br>

                <center className='header2'> Support Our Cause </center>
                <text className='body'>
                Strength in numbers is not to be underestimated. Donate to our cause or sign up for our mailing list to help
                 us save the children.
                </text> <br></br>
                </div>

                <Ad img = {adPic1} width = '271' height = '369'/>


            </div>
        
  )
}

export default Action
