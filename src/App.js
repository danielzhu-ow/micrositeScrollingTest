import { useState } from 'react'
import { scroll, useScroll } from "framer-motion"
import './App.css';

import gifSpriteSheet from "./images/gifSpriteSheet.png"
import blur from './images/add-blur-from-nav.mp4'
import gradientDefault from './images/gradientDefault.png'

// import sections
import { NamingHeader } from './sections/HeaderSection'
import { NamingIntro } from './sections/IntroSection'
import { NamingFirmi } from './sections/FirmiSection'
import { NamingRobot } from './sections/RobotSection'

import { Item } from './sections/Section'
import { TransformingContent } from './interactions/TransformingContent'
import { ScrollingGif } from './interactions/ScrollingGif'
import { ScrollingMovie } from './interactions/ScrollingMovie'
import { Background } from './interactions/Background'

//import content constants
import NamingSTRINGS from './constants/textContent'; //usage: NamingSTRINGS.N_Intro.paragraphs
import { useImageLoader } from './constants/imgContent'; //usage: NamingIMAGES.cloud

function App() {
  const NamingIMAGES = useImageLoader();

  return (
    <div className="App">
      <div className='App-header'>
        <NamingHeader contentImages={NamingIMAGES}></NamingHeader>
        <NamingIntro contentText={NamingSTRINGS.N_Intro}></NamingIntro>
      </div>
    </div>
  );
}

export default App;