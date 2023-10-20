// import universal
import { useRef } from 'react'
import { styled } from 'styled-components';
import { useScroll, useMotionValueEvent } from "framer-motion"

// import interactions
import { ScrollingGif } from "../interactions/ScrollingGif"
import { Background } from '../interactions/Background'
import { TransformingContent, ImgBox } from '../interactions/TransformingContent'
import { ScrollingMovie } from '../interactions/ScrollingMovie'
import { FadingHeader } from "../interactions/FadingHeader"

// import assets

export { ManifestoSection }

function ManifestoSection({ images }) {

    //Heights
    const sectionHeights = [200, 500, 500]
    const sum = sectionHeights.reduce((partialSum, a) => partialSum + a, 0)

    //Timings
    const sectionTimings = [[[0, 1], [0, 0.6], [0, 0.6]], [[]], [[]]]
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
            <Background background={images.manifesto_gradient} height={sectionHeights[0]} />
            <FadingHeader type={"manifesto"} scrollInfo={adjustedTimings[0][0]} />
            <TransformingContent child={<ImgBox url={images.manifesto_01} displayDimensions={[80, 80]} rotate={0} />} positions={[[0, -50], [-10, -60]]} scrollInfo={adjustedTimings[0][1]} alignment={['left', 'top']} />
            <TransformingContent child={<ImgBox url={images.manifesto_02} displayDimensions={[100, 100]} rotate={0} />} positions={[[0, -60], [-5, -65]]} scrollInfo={adjustedTimings[0][2]} alignment={['right', 'bottom']} />

            {/* SECTION 1 */}
            <Background background={"#202020"} height={sectionHeights[1]} />

            <Background background={images.manifesto_gradient} height={sectionHeights[2]} />
        </div>
    )
}