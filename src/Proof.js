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
            display: 'flex',  
            justifyContent:'center', 
            alignItems:'center',  
            height: '125vh',
            backgroundImage: `url(${background})`,

        }}>
            <text>You say you need proof do you? Well how about this?</text><br></br>
            <text>We reversed and pitched down the audio of the Ewoks talking, and hear what they ACTUALLY say!</text><br></br>
            <text>Ewok Language</text><br></br>
            <ReactAudioPlayer src={ewokTwo} controls /><br></br>
            <text>Translated</text><br></br>
            <ReactAudioPlayer src={ewokTwo} controls /><br></br><br></br>
            <text>Ewok Language</text><br></br>
            <ReactAudioPlayer src={ewokThree} controls /><br></br>
            <text>Translated</text><br></br>
            <ReactAudioPlayer src={ewokTwo} controls /><br></br><br></br>
            <text>Ewok Language</text><br></br>
            <ReactAudioPlayer src={ewokFour} controls /><br></br>
            <text>Translated</text><br></br>
            <ReactAudioPlayer src={ewokTwo} controls /><br></br><br></br>


        </div>
    </div>
  )
}
