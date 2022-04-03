import React from 'react'
import ReactAudioPlayer from 'react-audio-player'; 
import ewokTwo from "./sounds/ewokTwo.mp3";
import ewokThree from "./sounds/ewokThree.mp3";
import ewokFour from "./sounds/ewokFour.mp3";
import Header from "./Header";
import './TextStyles.css'
import EwokNavbar from './EwokNavbar';
import background from './images/neongrid.png'

export default function Proof() {
  return (
    <div>
        <Header />
        <EwokNavbar />
        <div className="body" style={{
            height: '100vh', width: '100vw',
            backgroundImage: `url(${background})`,

        }}>
            <text>You say you need proof do you? Well how about this?</text><br></br>
            <text>We reversed and pitched down the audio of the Ewoks talking, and hear what they ACTUALLY say!</text><br></br><br></br><br></br>
            
            <div className = 'content' style={{display: 'inline-block', width: "50%"}}>
              <text>Ewok Language</text> <br></br>
            
              <ReactAudioPlayer src={ewokTwo} controls />
            </div>
            <div className = 'content' style={{display: 'inline-block', width: "50%"}}>
              <text>Translated</text>  <br></br>
              <ReactAudioPlayer src={ewokTwo} controls /><br></br><br></br>
            </div>
            <div className= 'line'></div>
            <div className = 'content' style={{display: 'inline-block', width: "50%"}}>
              <text>Ewok Language</text> <br></br>
              <ReactAudioPlayer src={ewokThree} controls />
              </div>
              <div className = 'content' style={{display: 'inline-block', width: "50%"}}>
              <text>Translated</text> <br></br>
              <ReactAudioPlayer src={ewokTwo} controls /><br></br><br></br>
            </div>
            <div className= 'line'></div>
            <div className = 'content' style={{display: 'inline-block', width: "50%"}}>
              <text>Ewok Language</text> <br></br>
              <ReactAudioPlayer src={ewokFour} controls />
              </div>
              <div className = 'content' style={{display: 'inline-block', width: "50%"}}>
              <text>Translated</text> <br></br>
              <ReactAudioPlayer src={ewokTwo} controls /><br></br><br></br>
            </div>
            


        </div>
        </div>
  )
}
