import './App.css';
import { useState } from 'react';

// import pages
import { NamingSection } from './sections/NamingSection';
import { ManifestoSection } from './sections/ManifestoSection'
import { HotDogSection } from './sections/HotDogSection';

//import content constants
import NAMING_STRINGS from './constants/textContent';
import { useImageLoader } from './constants/manifestoImgContent'; //usage: NamingIMAGES.cloud
import { useNamingImageLoader } from './constants/imgContent';

function App() {
  const [article, setArticle] = useState('manifesto')

  const MANIFESTO_IMAGES = useImageLoader();
  const NAMING_IMAGES = useNamingImageLoader();

  return (
    <div className="App">
      <div className='App-header'>
        
        {article === 'naming' && <NamingSection images={NAMING_IMAGES} text={NAMING_STRINGS} />}
        {article === 'manifesto' && <ManifestoSection images={MANIFESTO_IMAGES} />}
        {article === 'hotdog' && <HotDogSection />}

        <div style={{position: 'fixed', top: 0, color: 'white'}}>
          <button onClick={() => {setArticle('manifesto'); console.log('manifesto')}}>Manifesto</button>
          <button onClick={() => {setArticle('naming'); console.log('naming')}}>Naming</button>
          <button onClick={() => {setArticle('hotdo'); console.log('hotdog')}}>Naming</button>
        </div>
      </div>
    </div>
  );
}

export default App;