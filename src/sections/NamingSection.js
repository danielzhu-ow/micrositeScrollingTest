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
import { OpacityContent, OpacityParagraph } from '../interactions/OpacityContent';
import { ScrollingMovie } from '../interactions/ScrollingMovie'
import { FadingHeader } from "../interactions/FadingHeader"

export { NamingSection }

function NamingSection({ images, text }) {

    //Heights
    const sectionHeights = [200, 500, 500]
    const sum = sectionHeights.reduce((partialSum, a) => partialSum + a, 0)

    //Timings              Timings are adjusted to start - end of section
    const sectionTimings = [
        // [0] Header
        [[0, 0.3, 0.8],                         // [0] Fading Header [s, h, e]
        [0, 0.6],                               // [1] Img 1
        [0, 0.6]],                              // [2] Img 2
        // [1] Section 1
        [[0.2, 0.25, 0.30, 0.35],                // [0] Verizon    
        [0.2, 0.25, 0.30, 0.35],                 // [1] Sprite             

        // [0.15, 0.2, 0.35, 0.4, 0.55, 0.6]
        [0, 0.35, 0.55, 0.65, 0.75, 1],      // [2] Paragraph 1-2 Transform Timings    
        [0.15, 0.15, 0.35, 1],               // [3] Paragraph 1           
        [0.15, 0.35, 0.65, 1],               // [4] Paragraph 2          
        [0.15, 0.65, 0.95, 1],               // [5] Paragraph 3    

        [0.35, 0.4, 0.6, 0.65],                // [6] Dino Night            
        [0.6, 0.65, 0.8, 1.5],                 // [9] Dino Day 
        [0.6, 0.8, 0.95, 1],                    // [7] Para 4
        [0.55, 0.6, 0.75, 0.8, 0.95, 1]],       // [8]
        // [2] Section 2
        //s,   tIn  - tOut tIn - tOut   e
        [[0.2, 0.25, 0.45, 0.5, 0.7, 0.75], [0, 0, 0.25, 0.3], [0.2, 0.25, 0.5, 0.55]]]
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

    return (
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
            {/* HEADER */}
            <Background background={images.naming_gradient} height={sectionHeights[0]} />
            <FadingHeader text={text.Header} scrollInfo={adjustedTimings[0][0]} />
            <TransformingContent child={<ImgBox url={images.naming_01} displayDimensions={[60, 60]} rotate={0} />} positions={[[0, -50], [-10, -60]]} scrollInfo={adjustedTimings[0][1]} alignment={['left', 'top']} />
            <TransformingContent child={<ImgBox url={images.naming_02} displayDimensions={[55, 55]} rotate={0} />} positions={[[0, -50], [-10, -65]]} scrollInfo={adjustedTimings[0][2]} alignment={['right', 'bottom']} />

            {/* SECTION 1 */}
            <Background background={"#202020"} height={sectionHeights[1]} />
            {/*                                                         [0.15, 0.2, 0.35, 0.4, 0.55, 0.6] */}
            <TransformingContent positions={[[50, 50, 50, 50, 50, 50], [35, 35, 35, 35, 35, 35]]} scrollInfo={adjustedTimings[1][2]} alignment={['left', 'top']} child={
                <>
                    <OpacityParagraph scrollInfo={adjustedTimings[1][3]} text={
                        [["Lippincott has been creating standout brand names for 80 years. In those early days, a physical thesaurus was the most valuable naming tool. From those well-worn pages, household names such as Sprite and Wisk emerged, and words were paired together in novel ways to invent the likes of Duracell, Citgo, and Verizon."]]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[1][4]} text={
                        ["Those analog days of name development are a distant memory in today’s landscape. In a world with 64.4 million active trademarks, and an average adult vocabulary of 30,000 words, finding a strong, available name is harder than ever – and that tattered thesaurus no longer “sufficiently suffonsifies.”"]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[1][5]} text={
                        ["As a result, naming might just be one of the ripest territories for AI enhancement in the world of branding, and we’ve only scratched the surface."]
                    } />
                </>
            } />

            <TransformingContent child={<ImgBox url={images.verizon} displayDimensions={[30, 30]} rotate={0} />}
            positions={[[5, 5, 5, 5], [100, 20, 20, 100]]} scrollInfo={adjustedTimings[1][0]} alignment={['left', 'top']} />
            <TransformingContent child={<ImgBox url={images.sprite} displayDimensions={[10, 10]} rotate={22.22} />}
            positions={[[20, 20, 20, 20], [100, 40, 40, 100]]} scrollInfo={adjustedTimings[1][1]} alignment={['right', 'top']} />
           
            <TransformingContent child={<ImgBox url={images.dino_night} displayDimensions={[70, 70]} rotate={0} />} 
            //          [0.35, 0.475, 0.6, 0.65]
            positions={[[100, 35, 35, -100], [0, 0, 0, 0]]} scrollInfo={adjustedTimings[1][6]} alignment={['left', 'bottom']} prioritizeHeight={true} />
            <TransformingContent child={<ImgBox url={images.dino_day} displayDimensions={[70, 70]} rotate={0} />} 
            //          [0.35, 0.475, 0.6, 0.65]
            positions={[[100, 40, 40, 40], [0, 0, 0, 300]]} scrollInfo={adjustedTimings[1][7]} alignment={['left', 'bottom']} prioritizeHeight={true} />
    

            {/* SECTION 3 */}
            <Background background={images.naming_gradient} height={sectionHeights[2]} />

            <TransformingContent positions={[[50, 50, 50, 50, 50, 50], [127, 27, 27, 3, 3, -77]]} scrollInfo={adjustedTimings[2][0]} alignment={['left', 'top']} child={
                <>
                    <OpacityParagraph scrollInfo={adjustedTimings[2][1]} dark={false} text={
                        ["We choose play", "These next few months, we’re going deep on a grand experiment. We are still in the early stages of understanding AI and its full potential and limitations. By experimenting with AI, we aim to gain a deeper understanding of its capabilities and limitations and make informed decisions about how best to use it. And you get to follow along."]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[2][2]} dark={false} text={
                        ["Enough ink has been spilled on the power of AI. The disruption of AI. The hypothesis of how AI will change everything. But who’s experimenting? As creatives and consultants have a duty to chart a course beyond convention. In short, we can play."]
                    } />
                </>
            } />

        </div>
    )
}