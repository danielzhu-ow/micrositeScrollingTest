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
    const headerRef = useRef(null)

    return (
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
            <Background background={images.manifesto_gradient} height={200} scrollRef={headerRef} />
            <FadingHeader type={"manifesto"} scrollInfo={[0, 0.2]} scrollRef={headerRef} />
            <TransformingContent child={<ImgBox url={images.manifesto_01} displayDimensions={[80, 80]} rotate={0} />} positions={[[0, -50], [-10, -60]]} scrollInfo={[0, 0.5]} alignment={['left', 'top']} scrollRef={headerRef} />
            <TransformingContent child={<ImgBox url={images.manifesto_02} displayDimensions={[100, 100]} rotate={0} />} positions={[[0, -60], [-5, -65]]} scrollInfo={[0, 0.5]} alignment={['right', 'bottom']} scrollRef={headerRef} />
            <Background background={"#202020"} height={100} />
        </div>
    )
}