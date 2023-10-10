import { useState } from 'react'
import { scroll, useScroll } from "framer-motion"
import './App.css';

import cloudstair from './images/couldStair.png'
import cloud from './images/cloud.png'
import rect from './images/rect.png'
import gradient_default from './images/Gradient_Default.png'

import { TelescopingContent, ScrollingGif, Background } from './ScrollingInteractions';
import {HighlightText} from './TextInteractions';
import NamingSTRINGS from './constants/textContent';

function App() {
  const cloudStairImg = <img src={cloudstair} alt="testImage" style={{ width: "100%", height: "auto" }} />
  const cloudImg = <img src={cloud} alt="testImage" style={{ width: "100%", height: "auto" }} />
  const rectImg = <img src={rect} alt="testImage" style={{ width: "100%", height: "auto" }} />

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ height: "1000vh", width: "100%" }}>
          {/* <Background backgrounds={[gradient_default, "#202020"]} softTransitions={[0, 0.1]} scrollInfo={[0.75, 0.25]} >
            <TelescopingContent child={cloudImg} positions={[[0, 0], [-1043, -826]]} scrollInfo={[0, 0.5]} />
            <TelescopingContent child={cloudStairImg} positions={[[window.innerWidth - 1106, window.innerHeight - 779], [window.innerWidth, window.innerHeight]]} scrollInfo={[0, 0.5]} />
          </Background> */}
          <HighlightText paragraphs={NamingSTRINGS.N_Intro_paragraphs}/>
        </div>
      </header>
    </div>
  );
}

export default App;
