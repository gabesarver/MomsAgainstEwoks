import React from 'react'
import ReactAudioPlayer from 'react-audio-player'; 
import ewokTwo from "./sounds/ewokTwo.mp3";
import ewokThree from "./sounds/ewokThree.mp3";
import ewokFour from "./sounds/ewokFour.mp3";
import hailSatan from "./sounds/HailSatan.mp3";
import longDay from "./sounds/LongDay.mp3";
import youToo from "./sounds/YouToo.mp3";
import Header from "./Header";
import './TextStyles.css'
import EwokNavbar from './EwokNavbar';
import background from './images/pattern.png'
import Copyright from './Copyright';

export default function Proof() {
  return (
    <div>
        <Header />
        <EwokNavbar />
        <div className="body" style={{
            backgroundSize: 'auto 25%', 
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'repeat',

        }}>
            <div className = 'content'>
            <text>You say you need proof do you? Well how about this:</text><br></br>
            <text><i>We reversed and pitched down the audio of the Ewoks talking. Listen to what they ACTUALLY say!</i></text><br></br><br></br><br></br>
            </div>
            <div className = 'content' style={{display: 'inline-block', width: "40%"}}>
            
              <text>Ewok Language</text> <br></br>
            
              <ReactAudioPlayer src={ewokTwo} controls />
            </div>
            <div className = 'content' style={{display: 'inline-block', width: "40%"}}>
              <text>Translated</text>  <br></br>
              <ReactAudioPlayer src={hailSatan} controls /><br></br><br></br>
            </div>
            <div className= 'line'></div>
            <div className = 'content' style={{display: 'inline-block', width: "40%"}}>
              <text>Ewok Language</text> <br></br>
              <ReactAudioPlayer src={ewokThree} controls />
              </div>
              <div className = 'content' style={{display: 'inline-block', width: "40%"}}>
              <text>Translated</text> <br></br>
              <ReactAudioPlayer src={longDay} controls /><br></br><br></br>
            </div>
            <div className= 'line'></div>
            <div className = 'content' style={{display: 'inline-block', width: "40%"}}>
              <text>Ewok Language</text> <br></br>
              <ReactAudioPlayer src={ewokFour} controls />
              </div>
              <div className = 'content' style={{display: 'inline-block', width: "40%"}}>
              <text>Translated</text> <br></br>
              <ReactAudioPlayer src={youToo} controls /><br></br><br></br>
            </div>
            


        </div>
        <Copyright />
        </div>
  )
}
