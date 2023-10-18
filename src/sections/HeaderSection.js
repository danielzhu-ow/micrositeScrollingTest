// import interactions
import { ScrollingGif } from "../interactions/ScrollingGif";
import { Background } from '../interactions/Background'
import { TransformingContent } from '../interactions/TransformingContent'
import { ScrollingMovie } from '../interactions/ScrollingMovie'

//import assets
import blur from '../images/add-blur-from-nav.mp4' //video: TODO - create obj for videos
import gradientDefault from '../images/gradientDefault.png'

import { Item } from "./Section";

export {NamingHeader}

// NamingIMAGES.N_Header.cloudstair
function NamingHeader({contentImages}) {


return (
    <div style={{height: "100vh"}}>
        <Background currBackground={gradientDefault} scrollInfo={[0.5,0.5]} softTransitions={[0, 0.1]} >
            <TransformingContent child={<p>LOL</p>} positions={[[0, 500], [0, 500]]} scrollInfo={[0.5, 1]} />
            <ScrollingMovie position={[600, 100]} movieSrc={blur} displayWidth={600} scrollInfo={[0.25, 0.5]} />
            {/* <ScrollingGif position={[400, 400]} spriteSrc={contentImages.gifSpriteSheet} frames={22} imgDimension={[480, 360]} displayWidth={200} scrollInfo={[0.5, 1]} imgPerRow={5} /> */}
        </Background>
        <Background currBackground={"#202020"} scrollInfo={[0.5,0.5]} softTransitions={[0, 0.1]} ></Background>
    </div>
  );
}