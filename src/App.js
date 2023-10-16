import { useState } from 'react'
import { scroll, useScroll } from "framer-motion"
import './App.css';

import { Background } from './ScrollingInteractions';
import gifSpriteSheet from "./images/gifSpriteSheet.png"

// import sections
import { NamingHeader } from './sections/HeaderSection'
import { NamingIntro } from './sections/IntroSection'
import { NamingFirmi } from './sections/FirmiSection'
import { NamingRobot } from './sections/RobotSection'
import { Item } from './sections/DummySection';
import { TransformingContent } from './TransformingContent';
import { ScrollingGif } from './ScrollingGif';

//import content constants
import NamingSTRINGS from './constants/textContent'; //usage: NamingSTRINGS.N_Intro.paragraphs
import { useImageLoader } from './constants/imgContent'; //usage: NamingIMAGES.cloud

function App() {
  const NamingIMAGES = useImageLoader();

  return (
    <div className="App">
      <div className='App-header'>
        {/* <NamingHeader contentImages={NamingIMAGES}/> */}
        {/* <NamingIntro contentImages={NamingIMAGES} contentText={NamingSTRINGS.N_Intro}/> */}
        {/* <NamingFirmi />
        <NamingRobot /> */}
        <TransformingContent child={<p>LOL</p>} positions={[[0,500],[0,500]]}  scrollInfo={[0, 0.5]}/>
        <ScrollingGif position={[400,400]} spriteSrc={gifSpriteSheet} frames={22} imgDimension={[480, 360]} displayWidth={200} scrollInfo={[0,1]} imgPerRow={5} />
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    </div>
  );
}

export default App;
