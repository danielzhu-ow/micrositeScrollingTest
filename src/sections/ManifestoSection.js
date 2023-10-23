// import universal
import { useRef, useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion"
import { sizes } from '../constants/devices.js';

// import Styles
import { ArticleHeaderBlock, ArticleBodyBlock } from '../ArticleStyles';

// import interactions
import { ScrollingGif } from "../interactions/ScrollingGif"
import { Background } from '../interactions/Background'
import { TransformingContent, ImgBox, BackgroundImgBox } from '../interactions/TransformingContent'
import { OpacityContent, OpacityParagraph } from '../interactions/OpacityContent';
import { ScrollingMovie } from '../interactions/ScrollingMovie'
import { FadingHeader } from "../interactions/FadingHeader"

export { ManifestoSection }

function ManifestoSection({ images }) {

    //Heights
    const sectionHeights = [200, 500, 500]
    const sum = sectionHeights.reduce((partialSum, a) => partialSum + a, 0)

    //Timings              Timings are adjusted to start - end of section
    //                        Fading Header  Img1      Img2
    const sectionTimings = [
        [[0, 0.6, 0.8], [0, 0.6], [0, 0.6]],
        // 0 Avocado_toast        1 Avocado_1             2 Avocado_2            3 Avocado_3             4 Avocado_4             5 Header Paragraph    6 Paragraph 1           7 Paragraph 2          8 Paragraph 3         9 Galileo            10 Paragraph 1-2 Transform Timings    11 Para 4
        [[0.25, 0.3, 0.35, 0.4], [0.25, 0.3, 0.35, 0.4], [0.25, 0.3, 0.35, 0.4], [0.25, 0.3, 0.35, 0.4], [0.25, 0.3, 0.35, 0.4], [0, 0.05, 0.15, 0.2], [0.2, 0.2, 0.4, 0.6], [0.2, 0.4, 0.6, 0.65], [0.55, 0.6, 0.8, 1], [0.75, 0.8, 0.85, 0.9], [0.15, 0.2, 0.35, 0.4, 0.55, 0.6], [0.6, 0.8, 0.95, 1], [0.55, 0.6, 0.75, 0.8, 0.95, 1]],
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
            <Background background={images.manifesto_gradient} height={sectionHeights[0]} />
            <FadingHeader type={"manifesto"} scrollInfo={adjustedTimings[0][0]} />
            <TransformingContent child={<ImgBox url={images.manifesto_01} displayDimensions={[80, 80]} rotate={0} />} positions={[[0, -50], [-10, -60]]} scrollInfo={adjustedTimings[0][1]} alignment={['left', 'top']} />
            <TransformingContent child={<ImgBox url={images.manifesto_02} displayDimensions={[100, 100]} rotate={0} />} positions={[[0, -60], [-5, -65]]} scrollInfo={adjustedTimings[0][2]} alignment={['right', 'bottom']} />

            {/* SECTION 1 */}
            <Background background={"#202020"} height={sectionHeights[1]} />

            <OpacityContent scrollInfo={adjustedTimings[1][5]} child={<ArticleHeaderBlock contentString={"To say the least, Artificial Intelligence has become one of the most transformative things to ever happen to modern society—rivaling everything that's come before it."} />} />

            <TransformingContent positions={[[50, 50, 50, 50, 50, 50], [127, 27, 27, 3, 3, -77]]} scrollInfo={adjustedTimings[1][10]} alignment={['left', 'top']} child={
                <>
                    <OpacityParagraph scrollInfo={adjustedTimings[1][6]} text={
                        [["And for good reason. It has the potential to disrupt, well, everything."], ["Early adopters and businesses have flocked in, and familiar patterns have set in, powered by both the fantasy—and fear—of the unknown. With phrases like “this will take our jobs” getting tossed around Twitter like avocado toast recipes and morning news programs running full segments dedicated to the sky falling, you'd be excused for being confused or even anxious yourself. But while caution is necessary, maybe we should choose to be cautiously optimistic."]]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[1][7]} text={
                        ["It's certainly clear that AI will change how we do business. But, for anyone that has moved past morning shows into early adoption, it’s also clear there will be plenty of business to do be done. Sure, there are still things we don't know, but there is one thing we do: AI is not going to take your next job. But a person who knows how to use it probably will."]
                    } />
                </>
            } />

            <TransformingContent positions={[[50, 50, 50, 50, 50, 50], [127, 27, 27, 3, 3, -77]]} scrollInfo={adjustedTimings[1][12]} alignment={['left', 'top']} child={
                <>
                    <OpacityParagraph scrollInfo={adjustedTimings[1][8]} text={
                        ["Creativity creates progress", "Clamping down now is a bit like the church putting Galileo under house arrest for creating alternative models of the solar system: it’s a defensive reflex. While we can’t fully predict in abstract how AI will affect our businesses, ongoing and exploratory participation can help us determine how best to integrate it into our daily professional lives."]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[1][11]} text={
                        ["Enough ink has been spilled on the power of AI. The disruption of AI. The hypothesis of how AI will change everything. But who’s experimenting? As creatives and consultants have a duty to chart a course beyond convention. In short, we can play."]
                    } />
                </>
            } />

            <TransformingContent child={<BackgroundImgBox url={images.avocado_toast} displayDimensions={[57, 60]} rotate={0} />} positions={[[24, 24, 24, 24], [-100, 6, 6, 100]]} scrollInfo={adjustedTimings[1][0]} alignment={['left', 'top']} />
            <TransformingContent child={<BackgroundImgBox url={images.avocado_4} displayDimensions={[23, 40]} rotate={0} />} positions={[[5, 5, 5, 5], [-50, 3, 3, 100]]} scrollInfo={adjustedTimings[1][3]} alignment={['right', 'top']} />
            <TransformingContent child={<ImgBox url={images.avocado_1} displayDimensions={[15, 20]} rotate={25} />} positions={[[2, 2, 2, 2], [-50, 5, 5, 100]]} scrollInfo={adjustedTimings[1][1]} alignment={['right', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.avocado_2} displayDimensions={[45, 16]} rotate={0} />} positions={[[-5, -5, -5, -5], [-50, 1, 1, 100]]} scrollInfo={adjustedTimings[1][2]} alignment={['left', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.avocado_3} displayDimensions={[20, 28]} rotate={0} />} positions={[[2, 2, 2, 2], [-50, 52, 52, 152]]} scrollInfo={adjustedTimings[1][3]} alignment={['left', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.galileo} displayDimensions={[78, 80]} rotate={0} />} positions={[[-100, 11, 11, 100], [30, 30, 30, 30]]} scrollInfo={adjustedTimings[1][9]} alignment={['left', 'top']} prioritizeHeight={true} />

            {/* SECTION 3 */}
            <Background background={images.manifesto_gradient} height={sectionHeights[2]} />

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