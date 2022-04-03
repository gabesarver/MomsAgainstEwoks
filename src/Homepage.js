import React from 'react'
import './TextStyles.css'
import {Nav} from 'react-bootstrap'
import EwokNavbar from './EwokNavbar.js'

import background from './images/neongrid.png'
import scaryEwok from './images/scary_ewok.jpg'
import Header from './Header'

function Homepage() {
  return (
        
      <div className='body' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover',

      
  }}>
      <center className='header1'> Welcome! </center><br></br>
          <div className = 'content' style={{display: 'inline-block', width: '40%'}}>
              
          
              
          
              <center className='header2'> What is the point of this incredibly-designed website? </center>
              <text className='body'>
              Moms Against Ewoks (MAE) hope to inform the public of the plot to indoctrinate our children by marketing
              Satanistic Ewok "toys". By raising awareness we can rouse other concerned mothers to action, and protect
              the world's children.
              </text> <br></br> <br></br>

              <center className='header2'> Who created this website? </center>
              <text className='body'>

              Our cause is global, but this website was created by a single person. We prefer to remain a decentralized organization
              to avoid arousing the attention of the Soviets or the CIA, who may be involved in this plot. Learn more about us
              <Nav.Link href='/MomsAgainstEwoks/AboutUs' className='navText' style={{fontSize:'25px'}}>here.</Nav.Link>
               
              </text> <br></br> <br></br>

              <center className='header2'> What are Ewoks? </center>
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
                 
              </text> <br></br> <br></br>

              <center className='header2'> 
                <img src =  {scaryEwok} justify-content='center'/>
              </center>
              
              

              <center className='header2'>Do you have evidence?</center>
              <text className='body'>
               Do you really think that we would create an entire organization around this issue if we had not researched it extensively
               and compiled an irrefutable base of evidence? Please see our
               <Nav.Link href='/MomsAgainstEwoks/Proof' className='navText' style={{fontSize:'25px'}}>proof</Nav.Link>page for more details.
              </text> <br></br> <br></br>

              <center className='header2'>When did you become enlightened to this insidious plot?</center>
              <text className='body'>
                I was running errands with my two children when it dawned on me. I had gotten my perm done and went to my Jazzercise, and was excited to
                take the kids to the mall. At first it was great, we took some Glamour Shots and I took them to the arcade. I even bought them their own
                leg warmers! But once we got to the toy store, it was Hell on earth. Words could not do it justice, but just imagine a scene from Dawn of the Dead... 
                <br></br> <br></br>
                I immediately knew something was wrong with these Ewok toys, and purchased one of these new computer machines to conduct some serious research. Sometimes,
                I wish I hadn't, ignorance really can be bliss.
               
              </text> <br></br> <br></br>

              <center className='header2'>Is there a way for me to calculate a numerical score which indicates how likely it is
              that my child has been indoctrinated by Ewok marketing?</center>
              <text className='body'>
                An oddly specific question, but in-fact there <i>is</i>! You can find our Ewok quiz<Nav.Link href='/MomsAgainstEwoks/Proof' className='navText' style={{fontSize:'25px'}}>here.</Nav.Link>
               
              </text> <br></br> <br></br>


          </div>

          <div className = 'content' style={{display: 'inline-block', width: '30%', marginLeft: '20%'}}>
              
              
          
              <center className='header2'> Does anybody really take you seriously? </center>
              <text className='body'>
              Absolutely! Take a look at what our fans had to say:
              </text> <br></br> <br></br>

              <div className= 'line'></div>
              <text className='body'>
              "I can hardly express how grateful I am to have found this website! The last time I was this happy was when Godfather Part II came out." -John from Louisville, KY.
              </text> <br></br> <br></br>

              <div className= 'line'></div>
              <text className='body'>
              "Ever since I dislocated my hip doing aerobics, I've been looking for a way to spend my time. Moms Against Ewoks has inspired me
              to help create a safer world for my children!" -Helen from Gatlinburg, TN.
              </text> <br></br> <br></br>

              <div className= 'line'></div>
              <text className='body'>
              "When I learned the truth, I was stunned. I haven't been this scared since John Lennon was killed. Thank you MAE for bringing me out of the dark.
              Billy will certainly not be playing with any more Ewok toys. And if I catch him mimicking their speech again, I'll make
              him read gospel until he doesn't even remember what an Ewok sounds like." -Prudence from Cambridge, MA.
              </text> <br></br> <br></br>

              <div className= 'line'></div>
              <text className='body'>
              "This website is so stupid. You have the world at your fingertips and this is what you decide to make?" -Dustin from Hawkins, IN.
              </text> <br></br> <br></br>

              <div className= 'line'></div>
              <text className='body'>
              "I have come from the future to warn you that you are correct. Soon all of the children will be hippies, communists, and Satanists.
              We have to go back! Back to the way things were before Ewoks!" -Emmett from Hill Valley, CA.
              </text> <br></br> <br></br>

              <div className= 'line'></div>
              <text className='body'>
              "I fought in Vietnam to protect our nation. Now, thanks to Moms Against Ewoks I fight to protect the children." -John from Bowie, AZ.
              </text> <br></br> <br></br>

              <div className= 'line'></div>
              <text className='body'>
              "I'm somewhat of a researcher myself, and I am amazed at how you were able to find such solid evidence so easily!
              I was a doubter at first, but I can assure you that has changed." -Indiana from Princeton, NJ.
              </text> <br></br> <br></br>

              <div className= 'line'></div>
              <text className='body'>
              "I must eliminate this threat to protect and serve my city and its residents. Thank you for the assistance, civilian." -Alex from Detroit, MI.
              </text> <br></br> <br></br>


              


          </div>

          

          
      </div>
  )
}

export default Homepage