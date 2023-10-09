import logo from './logo.svg';
import { useState } from 'react'
import { scroll } from "framer-motion/dom"
import './App.css';

import cloudstair from './couldStair.png'
import cloud from './cloud.png'
import rect from './rect.png'

import { TelescopingContent, ScrollingGif } from './ScrollingInteractions';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  scroll((progress) => { setScrollProgress(progress) })

  const cloudStairImg = <img src={cloudstair} alt="testImage" style={{ width: "100%", height: "auto" }} />
  const cloudImg = <img src={cloud} alt="testImage" style={{ width: "100%", height: "auto" }} />
  const rectImg = <img src={rect} alt = "testImage" style={{ width: "100%", height: "100%" }} />

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: "relative" }}>
          {/* <TelescopingContent child={cloudImg} position={[0, 0]} dimensions={[1042, 825]} scrollInfo={[0, 0.5]} scrollProgress={scrollProgress} scrollForward={false} />
          <TelescopingContent child={cloudStairImg} position={[window.innerWidth - 1100, window.innerHeight - 775]} dimensions={[1100, 775]} scrollInfo={[0, 0.5]} scrollProgress={scrollProgress} scrollForward={false} /> */}
          <TelescopingContent child={rectImg} position={[0, 0]} dimensions={[100, 100]} scrollInfo={[0, 1]} scrollProgress={scrollProgress} />
          <TelescopingContent child={rectImg} position={[window.innerWidth - 100, window.innerHeight - 100]} dimensions={[100, 100]} scrollInfo={[0, 1]} scrollProgress={scrollProgress} />
          <Article />
          <Article />
        </div>
      </header>
    </div>
  );
}

export default App;

function Article() {
  return (
    <article>
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