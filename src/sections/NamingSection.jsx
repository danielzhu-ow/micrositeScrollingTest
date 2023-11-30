// import universal
import { devices } from '../constants/devices.js';
import { useMediaQuery } from 'react-responsive';

//import assets
import { getImageByKey } from '../constants/imgContent.js';
import namezap1 from '../images/naming/NameZap1.mp4'

// import interactions
import { Background, TransitionBackground } from '../interactions/Background.js'
import { TransformingContent, ImgBox, VideoBox, ScalingImgBox, RotatingImgBox } from '../interactions/TransformingContent.js'
import { TransformingTextBox } from '../interactions/TransformingTextBox.jsx';
import { AnchoredTransformingContent } from '../interactions/AnchoredTransformingContent.jsx';
import { VideoTextBox } from '../interactions/VideoTextBox.js';
import { DoubleColumn } from '../interactions/DoubleColumn.js';
import { ColumnImage } from '../interactions/ColumnImage.js';
import { ScrollingColumn } from '../interactions/ScrollingColumn.jsx';
// import { ArticleLink } from '../ArticleStyles.jsx';
import { Go } from '../ArticleStyles.jsx';
import { OpacityContent, OpacityParagraph, OpacitySubheading, OpacityList } from '../interactions/OpacityContent.js';
import { FadingHeader } from "../interactions/FadingHeader.js"
import { HotDogSection } from './HotDogSection.js';

export { NamingSection }

function NamingSection({ text }) {
    //Heights                0    1    2    3    4    5    6    7
    const sectionHeights = [250, 400, 400, 300, 200, 0, 400, 500]
    const sum = sectionHeights.reduce((partialSum, a) => partialSum + a, 0)

    //Timings 
    const sectionTimings = [
        // [0] Header
        [[0, 0.2, 0.5, 0.8],                               // [0] Fading Header [s, h, e]
        [0, 0.6],                                     // [1] Img 1
        [0, 0.6],
        [0, 0, 0.2, 0.5]],                                    // [2] Img 2

        // [1] Section 1
        [[0, 0.25, 0.3, 0.4],                     // [0] Verizon    
        [0, 0.25, 0.3, 0.4],                      // [1] Sprite             
        [-0.1, 0.05, 0.8, 1],             // [2] Paragraph 1-2 Transform Timings    
        [-0.1, -0.1, 0.35, 1.0],                      // [3] Paragraph 1           
        [-0.1, 0.35, 0.65, 1.0],                      // [4] Paragraph 2          
        [-0.1, 0.65, 0.95, 1.0],                      // [5] Paragraph 3    
        [0.35, 0.5, 0.65],                     // [6] Dino Night            
        [0.65, 0.7, 1.0545]],                       // [7] Dino Day 

        // [2] Section 2
        //s,   tIn  - tOut tIn - tOut   e
        [[0, 0.15, 0.55, 0.75, 1.0],               // [0] Paragraph Transform Timings
        [0, 0.15, 0.75, 1],                      // [1] Paragraph 1
        [0, 0.15, 0.3, 0.75, 1.0],                // [2] Meet Firmi Transform Timings
        [0.3, 0.45, 0.5, 1],
        [0.7, 0.9, 1]],                       // [3] "Meet Firmi 1.0"

        // [3] Section 3
        [[0.0, 0.3, 0.5, 0.75, 1.2],                 // [0] Firmi img
        [0.0, 0.45, 0.5, 0.75, 1.2],                // [1] Paragraph Transform Timings
        [0.5, 0.6, 0.75, 1.0],                        // [2] paragraph opacites
        [0.15, 0.5, 1, 1.7]],

        // [4] Section 4
        [[0, 0.4, 1, 1.2], [0.6, 0.8, 1.2, 1.2], [0, 1.2]],                        // [0] Name Zap Video

        // [5] Section 5
        [[0, 1],                  //VideoT             
        [0, 0.45, 0.55, 1],                  // [0] Paragraph timings
        [0, 0.3, 0.7, 1],                      // [1] post video paragraph
        [0, 0.8, 1],
        [0, 0, 1, 1]],

        // [6] Section 6 - hotdog
        [[0.5, 0.55, 0.75, 1.2],                          //TEXT
        [0, 0.25, 0.3, 0.5],                            //TOYPILE
        [0, 0.25, 0.28, 0.53, 0.75, 1.1],                // hotdog scroll
        [0, 0.25, 0.75, 1.2]],                          //HOTDOG opacity

        // [7] Section 7
        [[-0.2, 0.2, 0.8, 1], //Motion
        [-0.2, 0.22, 0.27, 1], //Opacity 1
        [-0.2, 0.73, 0.77, 1], //Opacity 2
        [-0.2, -0.2, 0.2, 0.8, 1, 1], // Image Opacity
        [0, 1 / 4, 2 / 3],
        [1 / 3, 3 / 4, 1]
        ]
    ]
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

    const isMobile = useMediaQuery({ query: devices.mobileL });

    const mobileSection1 = (
        <>
            <TransformingContent child={<ImgBox url={getImageByKey("dino_night")} displayDimensions={[50, 50]} rotate={0} />}
                positions={[[100, -35, -150], [-2, -2, -2]]} scrollInfo={adjustedTimings[1][6]} alignment={['left', 'bottom']} prioritizeHeight={true} />
            <TransformingContent child={<ImgBox url={getImageByKey("dino_day")} displayDimensions={[50, 50]} rotate={0} />}
                positions={[[100, -35, -200], [0, 0, 0]]} scrollInfo={adjustedTimings[1][7]} alignment={['left', 'bottom']} prioritizeHeight={true} />
        </>
    );
    const desktopSection1 = (
        <>
            <TransformingContent child={<ImgBox url={getImageByKey("dino_night")} displayDimensions={[70, 70]} rotate={0} />}
                positions={[[100, 45, 40], [0, 0, 0]]} scrollInfo={adjustedTimings[1][6]} alignment={['left', 'bottom']} prioritizeHeight={true} />
            <TransformingContent child={<ImgBox url={getImageByKey("dino_day")} displayDimensions={[70, 70]} rotate={0} />}
                positions={[[100, 45, 40], [0, 0, 0]]} scrollInfo={adjustedTimings[1][7]} alignment={['left', 'bottom']} prioritizeHeight={true} />
        </>
    );

    const mobileLippincottHas = (
        <TransformingTextBox positions={[127, 27, -60, -160]} scrollInfo={adjustedTimings[1][2]} alignment={'top'} child={
            <>
                <ImgBox url={getImageByKey("mobile_sprite_verizon")} displayDimensions={[80, 26]} rotate={0} fixWidth={true} />
                <OpacityParagraph scrollInfo={adjustedTimings[1][3]} complexFade text={
                    [["Lippincott has been creating standout brand names for 80 years. In those early days, a physical thesaurus was the most valuable naming tool. From those well-worn pages, household names such as Sprite and Wisk emerged, and words were paired together in novel ways to invent the likes of Duracell, Citgo, and Verizon."]]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[1][4]} complexFade text={
                    ["Those analog days of name development are a distant memory in today’s landscape. In a world with 64.4 million active trademarks, and an average adult vocabulary of 30,000 words, finding a strong, available name is harder than ever – and that tattered thesaurus no longer “sufficiently suffonsifies.”"]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[1][5]} complexFade text={
                    ["As a result, naming might just be one of the ripest territories for AI enhancement in the world of branding, and we’ve only scratched the surface."]
                } />
            </>
        } />
    )

    const desktopLippincottHas = (
        <TransformingTextBox positions={[127, 27, -16, -100]} scrollInfo={adjustedTimings[1][2]} alignment={'top'} child={
            <>
                <OpacityParagraph scrollInfo={adjustedTimings[1][3]} complexFade text={
                    [["Lippincott has been creating standout brand names for 80 years. In those early days, a physical thesaurus was the most valuable naming tool. From those well-worn pages, household names such as Sprite and Wisk emerged, and words were paired together in novel ways to invent the likes of Duracell, Citgo, and Verizon."]]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[1][4]} complexFade text={
                    ["Those analog days of name development are a distant memory in today’s landscape. In a world with 64.4 million active trademarks, and an average adult vocabulary of 30,000 words, finding a strong, available name is harder than ever – and that tattered thesaurus no longer “sufficiently suffonsifies.”"]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[1][5]} complexFade text={
                    ["As a result, naming might just be one of the ripest territories for AI enhancement in the world of branding, and we’ve only scratched the surface."]
                } />
            </>
        } />
    )

    const mobileFinding = (
        <TransformingTextBox positions={[80, 27, 27, 27, 27]} scrollInfo={adjustedTimings[2][0]} alignment={'top'} child={
            <>
                <OpacityParagraph scrollInfo={adjustedTimings[2][1]} simpleFade={true} baseOpacity={0} text={
                    [<p>Finding the right name involves many steps. Exhaustive name generation is just one of them. But there are many legal, linguistic, and strategic hurdles to navigate— from defining the right filters for evaluation, to connecting back to the business and brand strategy, to making a case for a single name that leadership teams can rally around. <b>And the question for us is: which of these steps can we successfully AI-ify</b> to enhance the strategic and creative rigor behind what it takes to develop iconic names?</p>]
                } />
                <OpacitySubheading scrollInfo={adjustedTimings[2][3]} simpleFade={true} baseOpacity={0} text={
                    ["...Meet Firmi 1.0"]
                } />
            </>
        } />
    )

    const desktopFinding = (
        <TransformingTextBox positions={[80, 27, 27, 27, 27]} scrollInfo={adjustedTimings[2][0]} alignment={'top'} child={
            <>
                <OpacityParagraph scrollInfo={adjustedTimings[2][1]} simpleFade={true} baseOpacity={0} text={
                    [<p>Finding the right name involves many steps. Exhaustive name generation is just one of them. But there are many legal, linguistic, and strategic hurdles to navigate— from defining the right filters for evaluation, to connecting back to the business and brand strategy, to making a case for a single name that leadership teams can rally around. <b>And the question for us is: which of these steps can we successfully AI-ify</b> to enhance the strategic and creative rigor behind what it takes to develop iconic names?<br /><br /><br /></p>]
                } />
                <OpacitySubheading scrollInfo={adjustedTimings[2][3]} simpleFade={true} baseOpacity={0} text={
                    ["...Meet Firmi 1.0"]
                } />
            </>
        } />
    )

    const mobileFirmiSection = (
        <>
            <TransformingContent child={<OpacityContent scrollInfo={adjustedTimings[3][3]} baseOpacity={0} child={<ScalingImgBox url={getImageByKey("firmi")} displayDimensions={[30, 30, 15, 15, 15]} scrollInfo={adjustedTimings[3][0]} />} />} positions={[[10, 10, 30, 30, 30], [15, 15, 0, 0, -100]]} scrollInfo={adjustedTimings[3][0]} alignment={['left', 'top']} />
            <TransformingTextBox positions={[20, 20, 20, 20, -80]} scrollInfo={adjustedTimings[3][1]} alignment={'top'} child={
                <OpacityParagraph scrollInfo={adjustedTimings[3][2]} dark={true} simpleFade={true} baseOpacity={0} text={
                    [<p>The Lippincott naming team has been exploring the creative potential of AI since 2018. That's when we first developed a proprietary AI-trained naming tool to augment our human-led name generation.<br/><br/>
                        Simple by today's standards, the tool was originally trained on 50,000 names created over 50+ Lippincott projects that embodied best practices and had passed legal viability filters over the years. The idea is it could pull form this repository of knowledge to amplify our overall name ideation with high fidelity names.<br/><br/>
                        And the first name it developed— its own, did not disappoint. The name FIRMI is inspired in the idea of the “firm's intelligence” plus an ability to “engineer” new names in a nod to physicist Enrico Fermi.<br/><br/>
                        <b>Cut to today. Firmi now leaps and bounds ahead of where it started.</b></p>]
                } />
            } /></>
    );

    const desktopFirmiSection = (
        <TransformingTextBox positions={[20, 20, 20, 20, -80]} scrollInfo={adjustedTimings[3][1]} alignment={'top'} child={
            <>
                <AnchoredTransformingContent center={[60, 75]} child={<ScalingImgBox url={getImageByKey('firmi')} displayDimensions={[64, 64, 26, 26, 26]} scrollInfo={adjustedTimings[3][0]} />} positions={[[60, 60, 0, 0, 0], [50, 50, 0, 0, -100]]} scrollInfo={adjustedTimings[3][0]} alignment={['left', 'top']} />
                <OpacityParagraph scrollInfo={adjustedTimings[3][2]} dark={true} simpleFade={true} baseOpacity={0} text={
                    [<p>The Lippincott naming team has been exploring the creative potential of AI since 2018. That's when we first developed a proprietary AI-trained naming tool to augment our human-led name generation.<br/><br/>
                        Simple by today's standards, the tool was originally trained on 50,000 names created over 50+ Lippincott projects that embodied best practices and had passed legal viability filters over the years. The idea is it could pull form this repository of knowledge to amplify our overall name ideation with high fidelity names.<br/><br/>
                        And the first name it developed— its own, did not disappoint. The name FIRMI is inspired in the idea of the “firm's intelligence” plus an ability to “engineer” new names in a nod to physicist Enrico Fermi.<br/><br/>
                        <b>Cut to today. Firmi now leaps and bounds ahead of where it started.</b></p>]
                } />
            </>
        } />
    );

    const mobileVideo = (
        <>
            <TransformingContent child={<VideoBox url={namezap1} displayWidth={80} scrollInfo={adjustedTimings[4][2]}
                child={<VideoTextBox scrollInfo={adjustedTimings[4][1]} displayWidth={80} heightRatio={0.657} child={
                    <OpacityParagraph scrollInfo={adjustedTimings[4][1]} simpleFade={true} text={
                        ["The recent explosion of new generative AI represents an opportunity to experiment with ways to supercharge Firmi amping the natural language and machine learning capacity it lacked in early instances to become a more dynamic resource and relevant extension to our teams. We are on a mission to find ways to effectively harness the immense data sources, processing power, and intuitive interface now available, without sacrificing quality, data integrity, security, and ownership rights plaguing many OpenAi tools today."]
                    } />}
                />} />}
                positions={[[0, 0, 0, 0], [-100, 5, 5, 100]]} scrollInfo={adjustedTimings[4][0]} alignment={['center', 'center']} />
        </>
    );

    const desktopVideo = (
        <>
            <TransformingContent child={<VideoBox url={namezap1} displayWidth={80} scrollInfo={adjustedTimings[4][2]}
                child={<VideoTextBox scrollInfo={adjustedTimings[4][1]} displayWidth={80} heightRatio={0.657} child={
                    <OpacityParagraph scrollInfo={adjustedTimings[4][1]} simpleFade={true} text={
                        ["The recent explosion of new generative AI represents an opportunity to experiment with ways to supercharge Firmi amping the natural language and machine learning capacity it lacked in early instances to become a more dynamic resource and relevant extension to our teams. We are on a mission to find ways to effectively harness the immense data sources, processing power, and intuitive interface now available, without sacrificing quality, data integrity, security, and ownership rights plaguing many OpenAi tools today."]
                    } />}
                />} />}
                positions={[[0, 0, 0, 0], [-100, 5, 5, 100]]} scrollInfo={adjustedTimings[4][0]} alignment={['center', 'center']} />
        </>
    );

    //SECTION 14
    const mobileVideoText01 = (
        <>
            <Background background={'#202020'} height={sectionHeights[5]} />
            {/* <TransformingContent positions={[[0, 0, 0, 0], [-70, 30, 30, 130]]} scrollInfo={adjustedTimings[5][2]} alignment={['center', 'center']}
                child={
                    <OpacityParagraph scrollInfo={adjustedTimings[5][1]} text={
                        ["The recent explosion of new generative AI represents an opportunity to experiment with ways to supercharge Firmi amping the natural language and machine learning capacity it lacked in early instances to become a more dynamic resource and relevant extension to our teams. We are on a mission to find ways to effectively harness the immense data sources, processing power, and intuitive interface now available, without sacrificing quality, data integrity, security, and ownership rights plaguing many OpenAi tools today."]
                    } />
                }
            /> */}
        </>
    )

    const desktopVideoText01 = (
        <>
            <Background background={getImageByKey("naming_gradient")} height={sectionHeights[5]} />
            {/* <TransformingContent positions={[[0, 0, 0], [5, 5, 100]]} scrollInfo={adjustedTimings[5][3]} alignment={['center', 'center']}
                child={<VideoTextBox scrollInfo={adjustedTimings[5][4]} displayWidth={80} heightRatio={0.657} child={
                    <OpacityParagraph scrollInfo={adjustedTimings[5][1]} simpleFade={true} text={
                        ["The recent explosion of new generative AI represents an opportunity to experiment with ways to supercharge Firmi amping the natural language and machine learning capacity it lacked in early instances to become a more dynamic resource and relevant extension to our teams. We are on a mission to find ways to effectively harness the immense data sources, processing power, and intuitive interface now available, without sacrificing quality, data integrity, security, and ownership rights plaguing many OpenAi tools today."]
                    } />
                } />}
            /> */}
        </>
    )

    const mobileRobotSection = (
        <>
            <TransformingContent positions={[[10, 10, 10, 10], [80, 80, 80, 80]]} scrollInfo={adjustedTimings[7][0]} alignment={['top', 'left']} child={<OpacitySubheading scrollInfo={adjustedTimings[7][1]} dark={false} simpleFade={true} baseOpacity={0} text={["So, it’s time to play."]} />} />
            <TransformingContent child={<RotatingImgBox url={getImageByKey('cute_robot_idle')} displayDimensions={[190, 210]} rotateDimensions={[40, 40, 0, 0]} scrollInfo={adjustedTimings[7][1]} />} positions={[[-150, -45, -45, -45], [-10, -10, -10, 100]]} scrollInfo={adjustedTimings[7][1]} alignment={['left', 'bottom']} />
            <TransformingContent positions={[[0, 0, 0, 0], [35, 35, 35, 35]]} scrollInfo={adjustedTimings[7][2]} alignment={['bottom', 'right']} child={
                <OpacityParagraph scrollInfo={adjustedTimings[7][2]} dark={false} simpleFade={true} baseOpacity={0} text={["Let’s go →"]} />
            } />

        </>
    );

    const desktopRobotSection = (
        <>
            <TransformingTextBox positions={[127, 10, 10, -100]} scrollInfo={adjustedTimings[7][0]} alignment={'top'} doubled child={
                <DoubleColumn>
                    <ColumnImage scrollInfo={adjustedTimings[7][3]} backY={-12} fadeOut={false} child={<ImgBox url={getImageByKey('cute_robot')} displayDimensions={[70, 80]} rotate={0} />} />
                    <div>
                        <ScrollingColumn scrollOut={false} scrollInfo={adjustedTimings[7][5]}>
                            <OpacitySubheading scrollInfo={adjustedTimings[7][2]} dark={false} simpleFade={true} baseOpacity={0} text={[<p>So, it’s time to play.</p>]} />
                            <OpacityParagraph scrollInfo={adjustedTimings[7][2]} baseOpacity={0} dark={false} simpleFade={true} text={
                                [<p>We'll document our learning in real time to the advantage of our clients and the work we deliver. <b>Ultimately, we'll test the hypothesis that this ChatGPT era can supercharge our expertise and creative processes to arrive at stronger names than ever before.</b><br /><br />First up in our list of experiments - name generation.</p>]
                            } />
                            <OpacityParagraph scrollInfo={adjustedTimings[7][2]} dark={false} simpleFade={true} baseOpacity={0} text={[<Go>Let's go →</Go>]} />
                        </ScrollingColumn>
                        <ScrollingColumn scrollIn={false} scrollInfo={adjustedTimings[7][4]}>
                            <OpacityParagraph scrollInfo={adjustedTimings[7][1]} dark={false} simpleFade={true} baseOpacity={0} text={
                                [<p>Our team is investing in a series of open, iterative trials to explore the potential new utility of AI to push the bounds of our naming capability, considering…</p>]
                            } />
                            <OpacityList scrollInfo={adjustedTimings[7][1]} dark={false} simpleFade={true} baseOpacity={0} text={
                                ["Can we coach AI to deliver more creative ideas than it can at first blush?", "Which use cases is it great at? Where does it have limitations?", "Beyond mere generation, can it help refine, iterate, or even select optimal names?", "How do we balance the risks of AI with the immense upside to our creative capabilities?", "How do we build the Firmi 2.0 to take advantage of the opportunity?"]
                            } />
                        </ScrollingColumn>
                    </div>
                </DoubleColumn>
            } />
        </>
    );

    return (
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
            {/* HEADER: Section 0 */}
            <TransitionBackground background={getImageByKey("naming_gradient")} height={sectionHeights[0]} startHeight={0} hasTransition={true} delayed={[0.5, 1]} />
            <TransformingContent child={<OpacityContent baseOpacity={0} scrollInfo={adjustedTimings[0][3]} child={<ImgBox url={getImageByKey("headerShadeExperiment")} displayDimensions={[85, 25]} rotate={0} />} />} positions={[[7.5, 7.5, 7.5, 7.5], [0, 0, 0, 0]]} scrollInfo={adjustedTimings[0][0]} alignment={['left', 'bottom']} />
            <FadingHeader text={text.Header} scrollInfo={adjustedTimings[0][0]} startOn={true} />
            <TransformingContent child={<ImgBox url={getImageByKey("naming_01")} displayDimensions={[50, 70]} rotate={0} />} positions={[[-10, -60], [0, -50]]} scrollInfo={adjustedTimings[0][1]} alignment={['left', 'top']} />
            <TransformingContent child={<ImgBox url={getImageByKey("naming_02")} displayDimensions={[55, 68]} rotate={0} />} positions={[[0, -50], [-10, -65]]} scrollInfo={adjustedTimings[0][2]} alignment={['right', 'bottom']} />

            {/* SECTION 1 */}
            <Background background={"#202020"} height={sectionHeights[1]} />
            {isMobile ? mobileLippincottHas : desktopLippincottHas}
            {isMobile ? mobileSection1 : desktopSection1}

            {/* SECTION 2 */}
            <Background background={'#202020'} height={sectionHeights[2]} />
            {/* <TransitionBackground background={getImageByKey('naming_gradient')} height={sectionHeights[2]} startHeight={650} hasTransition={true} delayed={[0.6, 0.9]} /> */}
            {isMobile ? mobileFinding : desktopFinding}

            {/* SECTION 3 */}
            <Background background={"#202020"} height={sectionHeights[3]} />
            {isMobile ? mobileFirmiSection : desktopFirmiSection}

            {/* Section 4 */}
            <Background background={getImageByKey("naming_gradient")} height={sectionHeights[4]} />
            {isMobile ? mobileVideo : desktopVideo}

            {/* Section 5  */}
            {isMobile ? mobileVideoText01 : desktopVideoText01}

            {/* Section 6 - HotDog */}
            <HotDogSection sectionHeights={sectionHeights} adjustedTimings={adjustedTimings}></HotDogSection>

            {/* Section 7 */}
            <Background background={getImageByKey('naming_gradient')} height={sectionHeights[7]} />
            {isMobile ? mobileRobotSection : desktopRobotSection}
        </div>
    )
}



