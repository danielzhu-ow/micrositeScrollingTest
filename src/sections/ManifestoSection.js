// import universal
import { devices } from '../constants/devices.js';
import { useMediaQuery } from 'react-responsive';

// import interactions
import { Background, TransitionBackground } from '../interactions/Background'
import { TransformingContent, TransformingTextBox, ImgBox, BackgroundImgBox } from '../interactions/TransformingContent'
import { OpacityHeading, OpacityParagraph, OpacityList, OpacitySubheading } from '../interactions/OpacityContent';
import { FadingHeader } from "../interactions/FadingHeader"
import { ContactCard } from './ContactCard';

export { ManifestoSection }

function ManifestoSection({ images }) {

    //Heights
    const sectionHeights = [300, 500, 600]

    //Timings | Timings are adjusted to start - end of section
    const sectionTimings = [
        //Fading Header  Img1     Img2
        [[0, 0.4, 0.7], [0, 0.6], [0, 0.6], [0.8, 0.9, 1]],
        // 0 Avocado_toast        1 Avocado_1             2 Avocado_2            3 Avocado_3             4 Avocado_4             5 Header Paragraph        6 Paragraph 1           7 Paragraph 2          8 Paragraph 3         9 Galileo             10 1-2 Trans Timings    11 Para 4            12                   13 Mobile Avocado Op    14 Mobile Para 1       15 Mobile Para 2
        [[0.25, 0.3, 0.35, 0.4], [0.2, 0.3, 0.35, 0.45], [0.2, 0.3, 0.35, 0.45], [0.2, 0.3, 0.35, 0.45], [0.25, 0.3, 0.35, 0.4], [-0.05, 0.08, 0.12, 0.2], [0.2, 0.25, 0.4, 0.6], [0.2, 0.4, 0.6, 0.65], [0.55, 0.6, 0.8, 1], [0.7, 0.75, 0.85, 0.9], [0.2, 0.25, 0.55, 0.6], [0.6, 0.8, 0.95, 1], [0.55, 0.6, 0.9, 1], [0.25, 0.25, 0.4, 0.6], [0.2, 0.3, 0.5, 0.6], [0.2, 0.5, 0.6, 0.65]],
        //0 Para 1 Trans    1 robots Trans         2 Para 2 Opacity           3 Para 3-1 Opacity       4 Para 3 Trans             5 Beach Robot Trans                    6 Para 3-3 Opacity    7 Para 2 Trans           8 Card Move  9 Para 3-2              10 
        [[0, 0.125, 0.25], [0, 0.18, 0.22, 0.25], [0.25, 0.375, 0.385, 0.5], [0.4, 0.5, 0.75, 1.5], [0.45, 0.5, 0.75, 0.8, 1.5], [0.25, 0.35, 0.4, 0.525, 0.575, 0.75], [0.4, 0.75, 1.2, 1.25], [0.2, 0.25, 0.45, 0.5], [0.75, 1], [0.4, 0.615, 0.75, 1.25], [0, 0.2, 0.21, 0.25]]]
    let adjustedTimings = []

    const header = { subtitleTop_section: "LIPPINCOTT + AI", subtitleTop_subsection: "PERSPECTIVE", title: "We need to talk about AI", subtitleBottom: "By Tom Ajello | [Month] 2023" }
    const contactCard = { header: "Reach out to us to talk about AI", body: "For inquiries and specific AI opportunities in branding and experience" }

    const sum = sectionHeights.reduce((partialSum, a) => partialSum + a, 0)
    for (let i = 0; i < sectionHeights.length; i++) {
        let start = sectionHeights.slice(0, i).reduce((partialSum, a) => partialSum + a, 0) / sum
        let localSum = sectionHeights[i] / sum
        let adjusted = sectionTimings[i]
        for (let j = 0; j < adjusted.length; j++) {
            adjusted[j] = adjusted[j].map(c => c * localSum + start)
        }
        adjustedTimings.push(adjusted)
    }

    const isLaptop = useMediaQuery({ query: devices.laptop });
    const isMobile = useMediaQuery({ query: devices.mobileL });

    const mobileHowPlay = (
        <TransformingTextBox positions={[-100, -30, -30, 0, 0]} scrollInfo={adjustedTimings[2][4]} alignment={'bottom'} child={
            <>
                <OpacitySubheading scrollInfo={adjustedTimings[2][3]} dark={false} text={
                    ["How we'll play"]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[2][9]} dark={false} text={
                    ["A cross-functional group of Lippincotters (spanning strategy, engineering, design and more) is getting our hands in the dirt to show how we can harness the power of AI in the field of creative consulting. We’ll touch different facets of our work, from brand name generation to customer research to brand expression design and beyond."]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[2][6]} dark={false} text={
                    ["We choose creativity-led progress. We choose to believe humans and machines can be powerful together. And we choose not to talk about it from afar—but to test it out, get our hands in the sandbox, and really see what all this means."]
                } />
                <ContactCard scrollInfo={adjustedTimings[2][8]} portrait={images.tom_gif} text={contactCard} />
            </>
        } />
    );

    const desktopHowPlay = (
        <TransformingTextBox positions={[-100, -10, -10, 0, 0]} scrollInfo={adjustedTimings[2][4]} alignment={'bottom'} child={
            <>
                <OpacitySubheading scrollInfo={adjustedTimings[2][3]} dark={false} text={
                    ["How we'll play"]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[2][9]} dark={false} text={
                    ["A cross-functional group of Lippincotters (spanning strategy, engineering, design and more) is getting our hands in the dirt to show how we can harness the power of AI in the field of creative consulting. We’ll touch different facets of our work, from brand name generation to customer research to brand expression design and beyond."]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[2][6]} dark={false} text={
                    ["We choose creativity-led progress. We choose to believe humans and machines can be powerful together. And we choose not to talk about it from afar—but to test it out, get our hands in the sandbox, and really see what all this means."]
                } />
                <ContactCard scrollInfo={adjustedTimings[2][8]} portrait={images.tom_gif} text={contactCard} />
            </>
        } />
    );

    const mobilePara1 = (
        <TransformingTextBox positions={[127, 27, -30, -77]} scrollInfo={adjustedTimings[1][10]} alignment={'top'} child={
            <>
                <ImgBox url={images.avocado_toast} displayDimensions={[80, 100]} rotate={0} fixWidth={true} />

                <OpacityParagraph scrollInfo={adjustedTimings[1][14]} text={
                    [["And for good reason. It has the potential to disrupt, well, everything."], ["Early adopters and businesses have flocked in, and familiar patterns have set in, powered by both the fantasy—and fear—of the unknown. With phrases like “this will take our jobs” getting tossed around Twitter like avocado toast recipes and morning news programs running full segments dedicated to the sky falling, you'd be excused for being confused or even anxious yourself. But while caution is necessary, maybe we should choose to be cautiously optimistic."]]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[1][15]} text={
                    ["It's certainly clear that AI will change how we do business. But, for anyone that has moved past morning shows into early adoption, it’s also clear there will be plenty of business to do be done. Sure, there are still things we don't know, but there is one thing we do: AI is not going to take your next job. But a person who knows how to use it probably will."]
                } />

                {/* <MediaQuery maxWidth={sizes.mobileL}>
                <OpacityContent scrollInfo={adjustedTimings[1][13]} baseOpacity={0} child={<ImgBox url={images.avocado_mobile} displayDimensions={[80, 100]} rotate={0} />} />
            </MediaQuery> */}
            </>
        } />
    );

    const desktopPara1 = (
        <TransformingTextBox positions={[127, 27, 3, -77]} scrollInfo={adjustedTimings[1][10]} alignment={'top'} child={
            <>
                <OpacityParagraph scrollInfo={adjustedTimings[1][6]} text={
                    [["And for good reason. It has the potential to disrupt, well, everything."], ["Early adopters and businesses have flocked in, and familiar patterns have set in, powered by both the fantasy—and fear—of the unknown. With phrases like “this will take our jobs” getting tossed around Twitter like avocado toast recipes and morning news programs running full segments dedicated to the sky falling, you'd be excused for being confused or even anxious yourself. But while caution is necessary, maybe we should choose to be cautiously optimistic."]]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[1][7]} text={
                    ["It's certainly clear that AI will change how we do business. But, for anyone that has moved past morning shows into early adoption, it’s also clear there will be plenty of business to do be done. Sure, there are still things we don't know, but there is one thing we do: AI is not going to take your next job. But a person who knows how to use it probably will."]
                } />
            </>
        } />
    )

    const mobileAvocados = (
        <TransformingContent child={<ImgBox url={images.galileo} displayDimensions={[78, 40]} rotate={0} fixHeight={true} />} positions={[[-100, 8, 14, 100], [0, 0, 0, 0]]} scrollInfo={adjustedTimings[1][9]} alignment={['left', 'bottom']} />
    );

    const desktopAvocados = (
        <>
            <TransformingContent child={<BackgroundImgBox url={images.avocado_toast} displayDimensions={[57, 60]} rotate={0} />} positions={[[24, 24, 24, 24], [-100, 6, 6, 100]]} scrollInfo={adjustedTimings[1][0]} alignment={['left', 'top']} />
            <TransformingContent child={<BackgroundImgBox url={images.avocado_4} displayDimensions={[23, 40]} rotate={0} />} positions={[[5, 5, 5, 5], [-50, 3, 3, 100]]} scrollInfo={adjustedTimings[1][3]} alignment={['right', 'top']} />
            <TransformingContent child={<ImgBox url={images.avocado_1} displayDimensions={[15, 20]} rotate={25} />} positions={[[2, 2, 2, 2], [-50, 5, 5, 100]]} scrollInfo={adjustedTimings[1][1]} alignment={['right', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.avocado_2} displayDimensions={[45, 16]} rotate={0} />} positions={[[-5, -5, -5, -5], [-50, 1, 1, 100]]} scrollInfo={adjustedTimings[1][2]} alignment={['left', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.avocado_3} displayDimensions={[20, 28]} rotate={0} />} positions={[[2, 2, 2, 2], [-50, 42, 52, 152]]} scrollInfo={adjustedTimings[1][3]} alignment={['left', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.galileo} displayDimensions={[78, 60]} rotate={0} fixHeight={true} />} positions={[[-100, 8, 14, 100], [0, 0, 0, 0]]} scrollInfo={adjustedTimings[1][9]} alignment={['left', 'bottom']} />
        </>
    );

    const mobileRobots = (
        <>
            <TransformingContent child={<ImgBox url={images.cute_robot1} displayDimensions={[50, 40]} rotate={195} />} positions={[[100, 40, 40, 100], [-50, -20, -20, -50]]} scrollInfo={adjustedTimings[2][1]} alignment={['left', 'top']} />
            <TransformingContent child={<ImgBox url={images.tin_robot3} displayDimensions={[40, 40]} rotate={30} />} positions={[[-50, -20, -20, -50], [-10, -10, -10, -10]]} scrollInfo={adjustedTimings[2][1]} alignment={['left', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.orange_robot1} displayDimensions={[45, 40]} rotate={-30} />} positions={[[100, 60, 60, 100], [-10, -10, -10, -10]]} scrollInfo={adjustedTimings[2][1]} alignment={['left', 'bottom']} />
        </>
    );

    const desktopRobots = (
        <>
            <TransformingContent child={<ImgBox url={images.cute_robot1} displayDimensions={[50, 40]} rotate={195} />} positions={[[-30, -20, -20, -30], [-50, -30, -30, -50]]} scrollInfo={adjustedTimings[2][1]} alignment={['right', 'top']} />
            <TransformingContent child={<ImgBox url={images.tin_robot3} displayDimensions={[30, 40]} rotate={30} />} positions={[[-30, -10, -10, -30], [-10, -10, -10, -10]]} scrollInfo={adjustedTimings[2][1]} alignment={['left', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.orange_robot1} displayDimensions={[45, 40]} rotate={-30} />} positions={[[100, 70, 70, 100], [-10, -10, -10, -10]]} scrollInfo={adjustedTimings[2][1]} alignment={['left', 'bottom']} />
        </>
    )

    return (
        <div style={{ position: "relative", height: "100%", width: "100%" }}>

            {/* HEADER */}
            <TransitionBackground background={images.manifesto_gradient} height={sectionHeights[0]} startHeight={0} hasTransition={true} />
            <FadingHeader text={header} scrollInfo={adjustedTimings[0][0]} />
            <TransformingContent child={<ImgBox url={images.manifesto_01} displayDimensions={[80, 80]} rotate={0} />} positions={[[0, -50], [-10, -60]]} scrollInfo={adjustedTimings[0][1]} alignment={['left', 'top']} />
            <TransformingContent child={<ImgBox url={images.manifesto_02} displayDimensions={[100, 90]} rotate={0} />} positions={[[0, -60], [-5, -65]]} scrollInfo={adjustedTimings[0][2]} alignment={['right', 'bottom']} />

            {/* SECTION 1 */}
            <Background background={"#202020"} height={sectionHeights[1]} />

            <TransformingTextBox positions={[0, 0, 0, 0]} scrollInfo={adjustedTimings[1][5]} alignment={'center'} child={
                <OpacityHeading scrollInfo={adjustedTimings[1][5]} simpleFade={true} baseOpacity={0} text={
                    ["To say the least, Artificial Intelligence has become one of the most transformative things to ever happen to modern society—rivaling everything that's come before it."]
                } />
            } />

            {isMobile ? mobilePara1 : desktopPara1}

            <TransformingTextBox positions={[127, 27, 3, -77]} scrollInfo={adjustedTimings[1][12]} alignment={'top'} child={
                <>
                    <OpacitySubheading scrollInfo={adjustedTimings[1][8]} text={
                        ["Creativity creates progress"]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[1][8]} text={
                        ["Clamping down now is a bit like the church putting Galileo under house arrest for creating alternative models of the solar system: it’s a defensive reflex. While we can’t fully predict in abstract how AI will affect our businesses, ongoing and exploratory participation can help us determine how best to integrate it into our daily professional lives."]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[1][11]} text={
                        ["Enough ink has been spilled on the power of AI. The disruption of AI. The hypothesis of how AI will change everything. But who’s experimenting? As creatives and consultants have a duty to chart a course beyond convention. In short, we can play."]
                    } />
                </>
            } />

            {isMobile ? mobileAvocados : desktopAvocados}

            {/* SECTION 3 */}
            <Background background={images.manifesto_gradient} height={sectionHeights[2]} />

            {isMobile ? mobileRobots : desktopRobots}

            <TransformingTextBox positions={[127, 27, 27]} scrollInfo={adjustedTimings[2][0]} alignment={'top'} child={
                <>
                    <OpacitySubheading scrollInfo={adjustedTimings[2][1]} dark={false} simpleFade={true} baseOpacity={0} text={
                        ["We choose play"]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[2][1]} dark={false} simpleFade={true} baseOpacity={0} text={
                        ["These next few months, we're going deep on a grand experiment. We are still in the early stages of understanding AI and its full potential and limitations. By experimenting with AI, we aim to gain a deeper understanding of its capabilities and limitations and make informed decisions about how best to use it. And you get to follow along."]
                    } />
                </>
            } />

            <TransformingContent child={<ImgBox url={images.robot_beach} displayDimensions={[174, 50]} rotate={0} />} positions={[[-175, -75, -75, -40, -35, 100], [0, 0, 0, 0, 0, 0]]} scrollInfo={adjustedTimings[2][5]} alignment={['left', 'bottom']} />
            <TransformingTextBox positions={[27, 27, 27, -50]} scrollInfo={adjustedTimings[2][7]} alignment={'top'} child={
                <>
                    <OpacitySubheading scrollInfo={adjustedTimings[2][2]} dark={false} simpleFade={true} baseOpacity={0} text={
                        ["Where we'll play"]
                    } />
                    <OpacityList scrollInfo={adjustedTimings[2][2]} dark={false} simpleFade={true} baseOpacity={0} text={
                        ["Customer & User Research", "Messaging, Writing & Naming", "Value Propositions & Concept Testing", "Art Direction & Design", "Asset Production", "Risk & Governance", "HR & Recruitment"]
                    } />
                </>
            } />

            {isLaptop ? mobileHowPlay : desktopHowPlay}
        </div>
    )
}