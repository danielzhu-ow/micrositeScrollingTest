import { useState } from 'react'
import { scroll, useScroll } from "framer-motion"
import './App.css';

import cloudstair from './images/couldStair.png'
import cloud from './images/cloud.png'
import rect from './images/rect.png'
import gradient_default from './images/Gradient_Default.png'

import { TelescopingContent, ScrollingGif, Background } from './ScrollingInteractions';

function App() {
  const cloudStairImg = <img src={cloudstair} alt="testImage" style={{ width: "100%", height: "auto" }} />
  const cloudImg = <img src={cloud} alt="testImage" style={{ width: "100%", height: "auto" }} />
  const rectImg = <img src={rect} alt="testImage" style={{ width: "100%", height: "auto" }} />

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ height: "1000vh", width: "100%" }}>
          <Background backgrounds={[gradient_default, "#202020"]} softTransitions={[0, 0.1]} scrollInfo={[0.75, 0.25]} >
            <TelescopingContent child={cloudImg} positions={[[0, 0], [-1043, -826]]} scrollInfo={[0, 0.5]} />
            <TelescopingContent child={cloudStairImg} positions={[[window.innerWidth - 1106, window.innerHeight - 779], [window.innerWidth, window.innerHeight]]} scrollInfo={[0, 0.5]} />
            {/* <Article />
            <Article /> */}
          </Background>
        </div>
      </header>
    </div>
  );
}

export default App;

function Article() {
  return (
    <article style={{ opacity: 0, padding: 100 }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        rhoncus quam.
      </p>
      <p>
        Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
        imperdiet sagittis justo. In viverra fermentum ex ac vestibulum. Aliquam
        eleifend nunc a luctus porta. Mauris laoreet augue ut felis blandit, at
        iaculis odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus,
        eu tincidunt neque tincidunt a.
      </p>
      <h2>Sub-header</h2>
      <p>
        In eget sodales arcu, consectetur efficitur metus. Duis efficitur
        tincidunt odio, sit amet laoreet massa fringilla eu.
      </p>
      <p>
        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris
        id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit
        amet lacus mollis, semper massa ut, rutrum mi.
      </p>
      <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
      <p>
        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo
        vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
      </p>
      <h2>Sub-header</h2>
      <p>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
        sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus
        ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel
        felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Pellentesque hendrerit ac augue quis pretium.
      </p>
      <p>
        Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
        elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
        ultricies, mollis mi in, euismod dolor.
      </p>
      <p>
        Quisque convallis ligula non magna efficitur tincidunt.
      </p>
      <p>
        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris
        id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit
        amet lacus mollis, semper massa ut, rutrum mi.
      </p>
      <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
      <p>
        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo
        vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
      </p>
      <h2>Sub-header</h2>
      <p>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
        sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus
        ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel
        felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Pellentesque hendrerit ac augue quis pretium.
      </p>
      <p>
        Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
        elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
        ultricies, mollis mi in, euismod dolor.
      </p>
      <p>
        Quisque convallis ligula non magna efficitur tincidunt.
      </p>
    </article>
  )
}