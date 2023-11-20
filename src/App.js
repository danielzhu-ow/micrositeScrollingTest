import './App.css';
import { useState } from 'react';

// import pages
import { NamingSection } from './sections/NamingSection';
import { ManifestoSection } from './sections/ManifestoSection'
import { NamingExperimentSection } from './sections/NamingExperimentSection';
import { HotDogSection } from './sections/HotDogSection';

//import content constants
import NAMING_STRINGS from './constants/textContent';
import { useImageLoader } from './constants/manifestoImgContent'; //usage: NamingIMAGES.cloud


function App() {
  const [article, setArticle] = useState('naming experiment')

  const MANIFESTO_IMAGES = useImageLoader();


  return (
    <div className="App">
      <div className='App-header'>

        {article === 'naming' && <NamingSection text={NAMING_STRINGS} />}
        {article === 'manifesto' && <ManifestoSection images={MANIFESTO_IMAGES} />}
        {article === 'naming experiment' && <NamingExperimentSection />}
        {article === 'hotdog' && <HotDogSection />}

        <div style={{ position: 'fixed', top: 0, color: 'white' }}>
          <button onClick={() => {setArticle('manifesto'); console.log('manifesto')}}>Manifesto</button>
          <button onClick={() => { setArticle('naming'); console.log('naming'); window.scrollTo(0, 0) }}>Naming</button>
          <button onClick={() => { setArticle('naming experiment'); console.log('naming experiment'); window.scrollTo(0, 0) }}>Naming Experiment</button>
          {/* <button onClick={() => {setArticle('hotdog'); console.log('hotdog')}}>Hotdog</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;