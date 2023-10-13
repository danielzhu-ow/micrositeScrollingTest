import { useState } from 'react'
import { scroll, useScroll } from "framer-motion"
import './App.css';

import { TelescopingContent, ScrollingGif, Background } from './ScrollingInteractions';

// import sections
import { NamingHeader } from './sections/HeaderSection'
import { NamingIntro } from './sections/IntroSection'
import { NamingFirmi } from './sections/FirmiSection'
import { NamingRobot } from './sections/RobotSection'
import { Item } from './sections/Section';

//import content constants
import NamingSTRINGS from './constants/textContent'; //usage: NamingSTRINGS.N_Intro.paragraphs
import { useImageLoader } from './constants/imgContent'; //usage: NamingIMAGES.cloud

function App() {
  const NamingIMAGES = useImageLoader();

  return (
    <div className="App">
      <div className='App-header'>
        {/* <NamingHeader contentImages={NamingIMAGES}/> */}
        <NamingIntro contentImages={NamingIMAGES} contentText={NamingSTRINGS.N_Intro}/>
        {/* <NamingIntro contentImages={NamingIMAGES} contentText={NamingSTRINGS.N_Intro}/> */}
        {/* <NamingFirmi />
        <NamingRobot /> */}
        {/* <Item></Item>
        <Item></Item>
        <Item></Item> */}
      </div>
    </div>
  );
}

export default App;
