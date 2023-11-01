// import universal
import { devices } from '../constants/devices.js';
import { useMediaQuery } from 'react-responsive';

// import interactions
import { Background, TransitionBackground } from '../interactions/Background'
import { TransformingContent, TransformingTextBox, ImgBox, VideoBox } from '../interactions/TransformingContent'
import { OpacityParagraph, OpacityList, OpacitySubheading } from '../interactions/OpacityContent';
import { FadingHeader } from "../interactions/FadingHeader"
import { FadingSectionHeader } from '../interactions/FadingSectionHeader';

import baseline_fullscreen_01 from '../images/naming/baseline_fullscreen_01.mp4'
import words_fullscreen_02A from '../images/naming/words_fullscreen_02A.mp4'
import abstract_fullscreen_03A from '../images/naming/abstract_fullscreen_03A.mp4'

export { NamingExperimentSection }

function NamingExperimentSection({ images }) {

    //Heights
    const sectionHeights = [300, 400, 400, 200, 300, 400, 200, 200, 400, 200]

    //Timings | Timings are adjusted to start - end of section
    const sectionTimings = [
    //0 Fading Header
        [[0, 0.4, 0.7]],
    //1 Para 1              Para 2              Para 3              Text Motion
        [[0, 0.05, 0.28, 1], [0, 0.38, 0.61, 1], [0, 0.71, 0.95, 1], [- 0.05, 0, 0.33, 0.66, 1]],
    //2 Fading Section Header
        [[0.1, 0.3, 1]],
    //3 Video
        [[0, 0.5, 1]],
    //4 Para 1                 Para 2                    Para 3                Text Motion
        [[0, 0.05, 0.28, 0.33], [0.33, 0.38, 0.61, 0.66], [0.66, 0.71, 0.95, 1], [- 0.05, 0, 0.33, 0.66, 1]],
    //5 Fading Section Header
        [[0.1, 0.3, 1]],
    //6 Video
        [[0, 0.5, 1]],
    //7 Para 1
        [[0, 0.05, 0.45, 0.5]],
    //8 Fading Section Header
        [[0.1, 0.3, 1]],
    //9 Video
        [[0, 0.5, 1]]
    ]
    let adjustedTimings = []

    //HEADING TEXT
    const header = { subtitleTop_section: "NAMING + AI", subtitleTop_subsection: "EXPERIMENTS", title: "Naming: The Next Generation", subtitleBottom: "By [Author Name] | [Month] 2023" }
    const sectionHeader01 = { title_label: "Experiment 01", title: "Establishing the baseline", body: ["Starting with ChatGPT, we are setting out to understand the way the tool generates names without any help. How valuable are its “innate” instincts when looking to ideate new options for a brand name?", "So, let's create a realistic prompt, but limit our guidance or framing to see how it does."] }
    const sectionHeader02 = { title_label: "Experiment 02", title: "Is the word “name” a problem?", body: ["One early observation as we’ve played with GPT’s naming capabilities: its go-to understanding of the word “name.”", "We first asked GPT to generate 10 “words” that abstractly evoke intelligence, and some of the results were interesting and could conceivably be used as, or modified into viable brand names."] }
    const sectionHeader03 = { title_label: "Experiment 03", title: "GPT is literally, so literal. Can we teach it abstraction?", body: ["If you’ve ever asked GPT to create names, you know it tends to over-index on expected category terms. For example, ask it to generate names for a tech brand that suggest intelligence, you’ll get results like the following:"] }

    //CALCULATING TIMINGS
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

    //RESPONSIVE SECTIONS
    // const isLaptop = useMediaQuery({ query: devices.laptop });
    const isMobile = useMediaQuery({ query: devices.mobileL });

    //SECTION 2
    const inCase = (
        <TransformingTextBox positions={[127, 27, 27, 3, -21]} scrollInfo={adjustedTimings[1][3]} alignment={'top'} child={
            <>
                <OpacitySubheading scrollInfo={adjustedTimings[1][0]} text={
                    ["In case you missed it..."]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[1][0]} text={
                    ["Lippincott has been a leader in brand name development for 80 years, and creator of classic household brand names like Duracell, Sprite, and Off! and more recent market-changers like Kenvue, Refinitiv, and Marcus. But as the limitations of language, trademark, name real estate and other stakes get even higher, AI represents a powerful opportunity to supercharge our naming power as long as we can manage for quality. "]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[1][1]} text={
                    ["For perspective, Lippincott typically generates 2,000 names against a project brief before narrowing to the 20 we present. But when you consider that Ai could access 217 billion other possibilities for names with 8 letters or less, it’s clear we may be missing some gems. An equally sobering counterpoint is that efforts to date point to an AI that is good at generating quantity, but bad at producing or selecting quality."]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[1][2]} text={
                    ["So we’ve decided to play – to challenge this notion, by using more sophisticated prompts, deeper training, and test-and-learn methodology to see if we can get more viable results from AI."]
                } />
            </>
        } />
    )

    const desktopOff = (
        <>
            <TransformingContent child={<ImgBox url={images.duracell} displayDimensions={[26, 26]} rotate={-48} />} positions={[[1, 1, 1, 1], [-100, 5, 5, -100]]} scrollInfo={adjustedTimings[1][0]} alignment={['left', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.off} displayDimensions={[20, 87]} rotate={10} />} positions={[[1, 1, 1, 1], [-100, 5, 5, -100]]} scrollInfo={adjustedTimings[1][0]} alignment={['right', 'bottom']} />
        </>
    )

    //SECTION 3
    const mobileVideoBaseline01 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 30, 100]]} scrollInfo={adjustedTimings[3][0]} alignment={['center', 'center']}
            child={<VideoBox url={baseline_fullscreen_01} displayWidth={95} />}
        />
    );

    const desktopVideoBaseline01 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 3, 100]]} scrollInfo={adjustedTimings[3][0]} alignment={['center', 'center']}
            child={<VideoBox url={baseline_fullscreen_01} displayWidth={70} />}
        />
    );

    //SECTION 4
    const desktopTheGood = (
        <TransformingTextBox positions={[127, 27, 3, -21]} scrollInfo={adjustedTimings[4][0]} alignment={'top'} child={
            <>
                <OpacitySubheading scrollInfo={adjustedTimings[4][0]} dark={false} simpleFade={true} text={
                    ["The good:"]
                } />
                <OpacityList scrollInfo={adjustedTimings[4][0]} dark={false} simpleFade={true} baseOpacity={0} text={
                    ["It’s fast: while experienced namers take several hours to generate a list of 100 names, GPT can produce that amount instantaneously", "It’s accurate: the names feel appropriate to the request, and tend to leverage familiar, and well-understood terms to ground names in the offering we’re defining. Even more, it demonstrates an understanding of a technical category, and the relevant words commonly used in the space."]
                } />
            </>
        } />
    )

    const desktopTheBad = (
        <TransformingTextBox positions={[127, 27, 3, -21]} scrollInfo={adjustedTimings[4][1]} alignment={'top'} child={
            <>
                <OpacitySubheading scrollInfo={adjustedTimings[4][1]} dark={false} simpleFade={true} text={
                    ["The bad:"]
                } />
                <OpacityList scrollInfo={adjustedTimings[4][1]} dark={false} simpleFade={true} baseOpacity={0} text={
                    ["Literal and limited: The concepts are highly literal and directly guided by words in the prompt, suggesting a lack of ability for abstraction or thinking more conceptually.", "Lack of craft: A bias toward compound “CamelCap” names that can feel dated, clunky, or less distinctive, the names don’t have the intangible feel of a good name that’s easy to say and remember.", "Non-viable: Generic terminology would be challenging to clear legal. We need to be able to stretch into less expected spaces to navigate the crowded trademark territories our clients occupy"]
                } />
            </>
        } />
    )

    const desktopTheOpportunity = (
        <TransformingTextBox positions={[127, 27, 3, -21]} scrollInfo={adjustedTimings[4][2]} alignment={'top'} child={
            <>
                <OpacitySubheading scrollInfo={adjustedTimings[4][2]} dark={false} simpleFade={true} text={
                    ["The opportunity:"]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[4][2]} dark={false} simpleFade={true} baseOpacity={0} text={
                    ["It’s clear that GPT at baseline doesn’t give us what we need, but we have a number of options through creative prompting and context-setting that can help drive toward more interesting results. Can we teach GPT different types of names? Can we train it to think more abstractly or creatively? Can we diversify the naming approaches or themes it explores? Can feeding it past examples or IC on our best practices help coach it to think more like we do about naming?"]
                } />
            </>
        } />
    )

    //SECTION 6
    const mobileVideoBaseline02 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 30, 100]]} scrollInfo={adjustedTimings[6][0]} alignment={['center', 'center']}
            child={<VideoBox url={words_fullscreen_02A} displayWidth={95} />}
        />
    );

    const desktopVideoBaseline02 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 3, 100]]} scrollInfo={adjustedTimings[6][0]} alignment={['center', 'center']}
            child={<VideoBox url={words_fullscreen_02A} displayWidth={70} />}
        />
    );

    //SECTION 7
    const desktopWhileThese = (
        <TransformingTextBox positions={[127, 27, 3, -21]} scrollInfo={adjustedTimings[7][0]} alignment={'top'} child={
            <>
                <OpacityParagraph scrollInfo={adjustedTimings[7][0]} dark={false} simpleFade={true} text={
                    ["While these results may not reflect the most viable names, we’ve quickly demonstrated that through simple priming around a certain type of name, and the intention behind it, GPT is able to apply this guidance to deliver a set of options with a more focused approach."]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[7][0]} dark={false} simpleFade={true} text={
                    ["Let’s play on to see how this priming technique can be further expanded and refined to deliver even more interesting results."]
                } />
            </>
        } />
    )

    //SECTION 9
    const mobileVideoAbstract01= (
        <TransformingContent positions={[[0, 0, 0], [-100, 30, 100]]} scrollInfo={adjustedTimings[9][0]} alignment={['center', 'center']}
            child={<VideoBox url={abstract_fullscreen_03A} displayWidth={95} />}
        />
    );

    const desktopVideoAbstract01 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 3, 100]]} scrollInfo={adjustedTimings[9][0]} alignment={['center', 'center']}
            child={<VideoBox url={abstract_fullscreen_03A} displayWidth={70} />}
        />
    );

    return (
        <div style={{ position: "relative", height: "100%", width: "100%" }}>

            {/* HEADER */}
            <TransitionBackground background={images.naming_gradient} height={sectionHeights[0]} startHeight={0} hasTransition={true} />
            <FadingHeader text={header} scrollInfo={adjustedTimings[0][0]} />

            {/* SECTION 1 */}
            <Background background={"#202020"} height={sectionHeights[1]} />
            {inCase}
            {desktopOff}

            {/* SECTION 2 | HEADER */}
            <FadingSectionHeader text={sectionHeader01} scrollInfo={adjustedTimings[2][0]} />
            <TransitionBackground background={images.experiment_01} height={sectionHeights[2]} startHeight={sectionHeights[0] + sectionHeights[1]} endOpacity={0.8} hasTransition={true} />

            {/* SECTION 3 | VIDEO 1*/}
            <Background background={images.naming_gradient} height={sectionHeights[3]} />
            {isMobile ? mobileVideoBaseline01 : desktopVideoBaseline01}

            {/* SECTION 4 */}
            <Background background={images.naming_gradient} height={sectionHeights[4]} />
            {desktopTheGood}
            {desktopTheBad}
            {desktopTheOpportunity}

            {/* SECTION 5 | HEADER */}
            <FadingSectionHeader text={sectionHeader02} scrollInfo={adjustedTimings[5][0]} />
            <TransitionBackground background={images.experiment_02} height={sectionHeights[5]} startHeight={sectionHeights.slice(0, 5).reduce((partialSum, a) => partialSum + a, 0)} endOpacity={0.8} hasTransition={true} />

            {/* SECTION 6 | VIDEO 2*/}
            <Background background={images.naming_gradient} height={sectionHeights[6]} />
            {isMobile ? mobileVideoBaseline02 : desktopVideoBaseline02}

            {/* SECTION 7 */}
            <Background background={images.naming_gradient} height={sectionHeights[7]} />
            {desktopWhileThese}

            {/* SECTION 8 */}
            <FadingSectionHeader text={sectionHeader03} scrollInfo={adjustedTimings[8][0]} />
            <TransitionBackground background={images.experiment_03} height={sectionHeights[8]} startHeight={sectionHeights.slice(0, 8).reduce((partialSum, a) => partialSum + a, 0)} endOpacity={0.8} hasTransition={true} />

            {/* SECTION 9 */}
            <Background background={images.naming_gradient} height={sectionHeights[9]} />
            {isMobile ? mobileVideoAbstract01 : desktopVideoAbstract01}
        </div>
    )
}