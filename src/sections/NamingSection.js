// import universal
import { useRef } from 'react'
import { styled } from 'styled-components';
import { useScroll, useMotionValueEvent } from "framer-motion"

// import Styles
import { ArticleHeaderBlock, ArticleBodyBlock } from '../ArticleStyles';

// import interactions
import { ScrollingGif } from "../interactions/ScrollingGif"
import { Background } from '../interactions/Background'
import { TransformingContent, ImgBox, BackgroundImgBox } from '../interactions/TransformingContent'
import { OpacityContent } from '../interactions/OpacityContent';
import { ScrollingMovie } from '../interactions/ScrollingMovie'
import { FadingHeader } from "../interactions/FadingHeader"

export { NamingSection }

function NamingSection({ images, text }) {

    //Heights
    const sectionHeights = [200, 500, 500]
    const sum = sectionHeights.reduce((partialSum, a) => partialSum + a, 0)


    const sectionTimings = [
        // section 0
        [[0, 0.6, 0.8],             // Fading Header
        [0, 0.6],                   // Img 1
        [0, 0.6]],                  // Img 2
        // section 1
        [
        [0.1, 0.2, 0.8, 1.0],       // [0] Paragraph 1 //start, ,out
        [0.1, 0.2, 0.8, 1.0],       // [1] Paragraph 2
        [0.1, 0.2, 0.8, 1.0],       // [2] Paragraph 3
        [0.25, 0.3, 0.4, 0.45],    // [3] verizon
        [0.25, 0.3, 0.4, 0.45],    // [4] sprite
        [0.5, 0.6, 0.65, 0.7],    // [5] dino day
        [0.65, 0.67, 0.75, 0.8],    // [6] dino night
       
        ],    
        [[]]]
        // [0.2, 0.25, 0.35, 1], [0.2, 0.45, 0.55, 0.6]
    let adjustedTimings = []

    for (let i = 0; i < sectionHeights.length; i++) {
        let start = sectionHeights.slice(0, i).reduce((partialSum, a) => partialSum + a, 0) / sum
        let localSum = sectionHeights[i] / sum
        let adjusted = sectionTimings[i]
        for (let j = 0; j < adjusted.length; j++) {
            adjusted[j] = adjusted[j].map(c => c * localSum + start)
        }
        adjustedTimings.push(adjusted)
    }

    console.log(adjustedTimings)

    return (
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
            {/* HEADER */}
            <Background background={images.naming_gradient} height={sectionHeights[0]} />
            <FadingHeader text={text.Header} scrollInfo={adjustedTimings[0][0]} />
            <TransformingContent child={<ImgBox url={images.naming_01} displayDimensions={[50, 50]} rotate={0} />} positions={[[0, -50], [-10, -60]]} scrollInfo={adjustedTimings[0][1]} alignment={['left', 'top']} />
            <TransformingContent child={<ImgBox url={images.naming_02} displayDimensions={[50, 50]} rotate={0} />} positions={[[0, -60], [-5, -65]]} scrollInfo={adjustedTimings[0][2]} alignment={['right', 'bottom']} />

            {/* SECTION 1 */}
            <Background background={"#202020"} height={sectionHeights[1]} />

            {/* Paragraphs */}
            {/* difference of paragraphs plus 8 */}
            <TransformingContent positions={[[50, 50, 50, 50], [-50, 13, 13, 100]]} scrollInfo={adjustedTimings[1][0]} alignment={['left', 'top']} child={
                <OpacityContent scrollInfo={adjustedTimings[1][0]} child={<ArticleBodyBlock contentString={text.Intro.paragraphs[0]} />} />
             } />
            <TransformingContent positions={[[50, 50, 50, 50], [-42, 21, 21, 118]]} scrollInfo={adjustedTimings[1][1]} alignment={['left', 'top']} child={
                <OpacityContent scrollInfo={adjustedTimings[1][1]} child={<ArticleBodyBlock contentString={text.Intro.paragraphs[1]} />} />
              } />
              <TransformingContent positions={[[50, 50, 50, 50], [-34, 29, 29, 126]]} scrollInfo={adjustedTimings[1][2]} alignment={['left', 'top']} child={
                <OpacityContent scrollInfo={adjustedTimings[1][2]} child={<ArticleBodyBlock contentString={text.Intro.paragraphs[2]} />} />
              } />
            
            <TransformingContent child={<ImgBox url={images.sprite} displayDimensions={[10, 10]} rotate={22.5} />} positions={[[25, 25, 25, 25], [-50, 5, 5, -50]]} scrollInfo={adjustedTimings[1][3]} alignment={['right', 'bottom']} />
            
            <TransformingContent child={<ImgBox url={images.verizon} displayDimensions={[27, 27]} rotate={0} />} positions={[[15, 15, 15, 15], [-50, 1, 1, -50]]} scrollInfo={adjustedTimings[1][4]} alignment={['left', 'bottom']} />
            
            <TransformingContent child={<ImgBox url={images.dino_night} displayDimensions={[60, 60]} rotate={0} />} positions={[[-50, 1, 1, -50], [15, 15, 15, 15]]} scrollInfo={adjustedTimings[1][5]} alignment={['left', 'bottom']} />
            
            <TransformingContent child={<ImgBox url={images.dino_day} displayDimensions={[60, 60]} rotate={0} />} positions={[[10, 10, 10, 10], [-50, 1, 1, -50]]} scrollInfo={adjustedTimings[1][6]} alignment={['left', 'bottom']} />
            
            {/* SECTION 2 */}
            <Background background={images.manifesto_gradient} height={sectionHeights[2]} />
        </div>
    )
}