// import universal
import { devices } from '../constants/devices.js';
import { useMediaQuery } from 'react-responsive';

// import interactions
import { Background, TransitionBackground } from '../interactions/Background'
import { TransformingContent, TransformingTextBox, ImgBox, VideoBox } from '../interactions/TransformingContent'
import { OpacityParagraph, OpacityList, OpacitySubheading } from '../interactions/OpacityContent';
import { FadingHeader } from "../interactions/FadingHeader"
import { FadingSectionHeader } from '../interactions/FadingSectionHeader';
import { ColumnImage } from '../interactions/ColumnImage.js';
import { DoubleColumn } from '../interactions/DoubleColumn.js';
import { VideoTextBox, VideoTextScroller } from '../interactions/VideoTextBox.js';

import baseline_fullscreen_01 from '../images/naming/baseline_fullscreen_01.mp4'
import words_fullscreen_02A from '../images/naming/words_fullscreen_02A.mp4'
import names_fullscreen_02B from '../images/naming/names_fullscreen_02B.mp4'
import coined_fullscreen_02C from '../images/naming/coined_fullscreen_02C.mp4'
import abstract_fullscreen_03A from '../images/naming/abstract_fullscreen_03A.mp4'
import abstract_fullscreen_03B from '../images/naming/abstract_fullscreen_03B.mp4'
import abstract_fullscreen_03C from '../images/naming/abstract_fullscreen_03C.mp4'

export { NamingExperimentSection }

function NamingExperimentSection({ images }) {

    //Heights               0    1    2    3    4    5    6    7    8    9    10   11   12   13   14   15   16   17   18
    const sectionHeights = [300, 400, 400, 200, 300, 400, 200, 200, 200, 600, 200, 200, 400, 200, 400, 200, 600, 200, 1200]

    //Timings | Timings are adjusted to start - end of section
    const sectionTimings = [
        //0 Fading Header
        [[0, 0.4, 0.7]],
        //1 Para 1                   Para 2                 Para 3                 Text Motion
        [[-0.1, 0.05, 0.28, 1], [-0.1, 0.38, 0.61, 1], [-0.1, 0.71, 0.95, 1], [-0.1, 0.05, 0.8, 1]],
        //2 Fading Section Header
        [[0.1, 0.3, 1]],
        //3 Video
        [[-0.1, 0.25, 1.2]],
        //4 Para 1                 Para 2                    Para 3                Text Motion
        [[-0.2, 0.16, 0.17, 0.33], [0.33, 0.49, 0.5, 0.66], [0.66, 0.82, 0.83, 1], [-0.05, 0, 0.33, 0.66, 1]],
        //5 Fading Section Header
        [[0.1, 0.3, 1]],
        //6 Video
        [[0, 0.4, 1]],
        //7 Video Text
        [[0, 1], [0, 0.45, 0.55, 1]],
        //8, Video
        [[0, 0.4, 1]],
        //9 Video Text
        [[0, 1], [0, 0, 0.33, 1], [0, 0.33, 0.66, 1], [0, 0.66, 0.99, 1]],
        //10, Video
        [[0, 0.4, 1]],
        //11 Para 1
        [[-0.2, 0.05, 0.45, 0.5]],
        //12 Fading Section Header
        [[0.1, 0.3, 1]],
        //13 Video
        [[0, 0.5, 1]],
        //14 Video Text
        [[0, 1], [0, 0, 0.5, 1], [0, 0.5, 0.99, 1]],
        //15 Video
        [[0, 0.5, 1]],
        //16 Video Text
        [[0, 1], [0, 0, 0.33, 1], [0, 0.33, 0.66, 1], [0, 0.66, 0.99, 1]],
        //17 Video
        [[0, 0.5, 1]],
        //18 Section 1 TF        Section 2 TF              Section 3 TF
        [[0, 0.05, 0.33, 0.33], [0.33, 0.33, 0.66, 0.66], [0.66, 0.66, 1, 1]],
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
    const mobileInCase = (
        <TransformingTextBox positions={[127, 27, -100, -160]} scrollInfo={adjustedTimings[1][3]} alignment={'top'} child={
            <>
                <ImgBox url={images.mobile_duracell_off} displayDimensions={[80, 26]} rotate={0} fixWidth={true} />
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

    const desktopInCase = (
        <TransformingTextBox positions={[127, 27, -21, -100]} scrollInfo={adjustedTimings[1][3]} alignment={'top'} child={
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

    const mobileOff = (
        <></>
    )

    //SECTION 3
    const mobileVideoBaseline01 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 5, 100]]} scrollInfo={adjustedTimings[3][0]} alignment={['center', 'center']}
            child={<VideoBox url={baseline_fullscreen_01} displayWidth={85} />}
        />
    );

    const desktopVideoBaseline01 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 5, 100]]} scrollInfo={adjustedTimings[3][0]} alignment={['center', 'center']}
            child={<VideoBox url={baseline_fullscreen_01} displayWidth={85} />}
        />
    );

    //SECTION 4
    const desktopTheGood = (
        <TransformingTextBox positions={[127, 27, 27, 27]} scrollInfo={adjustedTimings[4][0]} alignment={'top'} child={
            <DoubleColumn>
                <ColumnImage scrollInfo={adjustedTimings[4][0]} child={<ImgBox url={images.cute_robot} displayDimensions={[18, 50]} rotate={0} />} />
                <div>
                    <OpacitySubheading scrollInfo={adjustedTimings[4][0]} baseOpacity={0} dark={false} simpleFade={true} text={
                        ["The good:"]
                    } />
                    <OpacityList scrollInfo={adjustedTimings[4][0]} dark={false} simpleFade={true} baseOpacity={0} text={
                        ["It’s fast: while experienced namers take several hours to generate a list of 100 names, GPT can produce that amount instantaneously", "It’s accurate: the names feel appropriate to the request, and tend to leverage familiar, and well-understood terms to ground names in the offering we’re defining. Even more, it demonstrates an understanding of a technical category, and the relevant words commonly used in the space."]
                    } />
                </div>
            </DoubleColumn>
        } />
    )

    const desktopTheBad = (
        <TransformingTextBox positions={[27, 27, 27, 27]} scrollInfo={adjustedTimings[4][1]} alignment={'top'} child={
            <DoubleColumn>
                <ColumnImage scrollInfo={adjustedTimings[4][1]} child={<ImgBox url={images.orange_robot1} displayDimensions={[18, 50]} rotate={0} />} />
                <div>
                    <OpacitySubheading scrollInfo={adjustedTimings[4][1]} dark={false} simpleFade={true} baseOpacity={0} text={
                        ["The bad:"]
                    } />
                    <OpacityList scrollInfo={adjustedTimings[4][1]} dark={false} simpleFade={true} baseOpacity={0} text={
                        ["Literal and limited: The concepts are highly literal and directly guided by words in the prompt, suggesting a lack of ability for abstraction or thinking more conceptually.", "Lack of craft: A bias toward compound “CamelCap” names that can feel dated, clunky, or less distinctive, the names don’t have the intangible feel of a good name that’s easy to say and remember.", "Non-viable: Generic terminology would be challenging to clear legal. We need to be able to stretch into less expected spaces to navigate the crowded trademark territories our clients occupy"]
                    } />
                </div>
            </DoubleColumn>
        } />
    )

    const desktopTheOpportunity = (
        <TransformingTextBox positions={[27, 27, 27, -60]} scrollInfo={adjustedTimings[4][2]} alignment={'top'} child={
            <DoubleColumn>
                <ColumnImage scrollInfo={adjustedTimings[4][2]} child={<ImgBox url={images.tin_robot3} displayDimensions={[18, 50]} rotate={0} />} />
                <div>
                    <OpacitySubheading scrollInfo={adjustedTimings[4][2]} dark={false} simpleFade={true} baseOpacity={0} text={
                        ["The opportunity:"]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[4][2]} dark={false} simpleFade={true} baseOpacity={0} text={
                        ["It’s clear that GPT at baseline doesn’t give us what we need, but we have a number of options through creative prompting and context-setting that can help drive toward more interesting results. Can we teach GPT different types of names? Can we train it to think more abstractly or creatively? Can we diversify the naming approaches or themes it explores? Can feeding it past examples or IC on our best practices help coach it to think more like we do about naming?"]
                    } />
                </div>
            </DoubleColumn>
        } />
    )

    //SECTION 6
    const mobileVideoBaseline02 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 5, 5]]} scrollInfo={adjustedTimings[6][0]} alignment={['center', 'center']}
            child={<>
                <VideoBox url={words_fullscreen_02A} displayWidth={85} />
            </>}
        />
    );

    const desktopVideoBaseline02 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 5, 5]]} scrollInfo={adjustedTimings[6][0]} alignment={['center', 'center']}
            child={<VideoBox url={words_fullscreen_02A} displayWidth={85} />}
        />
    );

    //SECTION 7
    const mobileVideoText01 = (
        <TransformingContent positions={[[0, 0], [5, 5]]} scrollInfo={adjustedTimings[7][0]} alignment={['center', 'center']}
            child={<VideoTextBox scrollInfo={adjustedTimings[7][0]} displayWidth={85} heightRatio={0.625} child={
                <VideoTextScroller scrollInfo={adjustedTimings[7][0]} scrollToFrom={[100, -100]}>
                    <OpacityParagraph scrollInfo={adjustedTimings[7][1]} simpleFade={true} baseOpacity={0} text={
                        ["It’s clear that GPT at baseline doesn’t give us what we need, but we have a number of options through creative prompting and context-setting that can help drive toward more interesting results. Can we teach GPT different types of names? Can we train it to think more abstractly or creatively? Can we diversify the naming approaches or themes it explores? Can feeding it past examples or IC on our best practices help coach it to think more like we do about naming?"]
                    } />
                </VideoTextScroller>
            } />}
        />
    )

    const desktopVideoText01 = (
        <TransformingContent positions={[[0, 0], [5, 5]]} scrollInfo={adjustedTimings[7][0]} alignment={['center', 'center']}
            child={<VideoTextBox scrollInfo={adjustedTimings[7][0]} displayWidth={85} heightRatio={0.625} child={
                <VideoTextScroller scrollInfo={adjustedTimings[7][0]} scrollToFrom={[500, -500]}>
                    <OpacityParagraph scrollInfo={adjustedTimings[7][1]} simpleFade={true} baseOpacity={0} text={
                        ["It’s clear that GPT at baseline doesn’t give us what we need, but we have a number of options through creative prompting and context-setting that can help drive toward more interesting results. Can we teach GPT different types of names? Can we train it to think more abstractly or creatively? Can we diversify the naming approaches or themes it explores? Can feeding it past examples or IC on our best practices help coach it to think more like we do about naming?"]
                    } />
                </VideoTextScroller>
            } />}
        />
    )

    //SECTION 8
    const mobileVideoNames02 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 5]]} scrollInfo={adjustedTimings[8][0]} alignment={['center', 'center']}
            child={<VideoBox url={names_fullscreen_02B} displayWidth={85} />}
        />
    );

    const desktopVideoNames02 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 5]]} scrollInfo={adjustedTimings[8][0]} alignment={['center', 'center']}
            child={<VideoBox url={names_fullscreen_02B} displayWidth={85} />}
        />
    );

    //SECTION 9
    const mobileVideoText0202 = (
        <TransformingContent positions={[[0, 0], [5, 5]]} scrollInfo={adjustedTimings[9][0]} alignment={['center', 'center']}
            child={<VideoTextBox scrollInfo={adjustedTimings[9][0]} displayWidth={85} heightRatio={0.625} child={
                <VideoTextScroller scrollInfo={adjustedTimings[9][0]} scrollToFrom={[100, -100]}>
                    <OpacityParagraph scrollInfo={adjustedTimings[9][1]} simpleFade={true} baseOpacity={0} text={
                        ["It is safe to say this convention is exceedingly common among brand names across categories, PayPal, YouTube, Salesforce, Facebook… but many of the most famous, aspirational brand names use coined/invented words (Google, Hulu, Zappos, Xerox) or real, abstract dictionary words (Amazon, Apple, Peloton, Uber) – none of which would be delivered if we left GPT to its own naming devices."]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[9][2]} simpleFade={true} baseOpacity={0} text={
                        ["The lesson learned? We may be better off asking GPT for “words” or “ideas” than “names” when trying to name a brand, helping it garner results more aligned to the range of possibilities. Or better yet, we can teach it to understand the different types of names through more detailed prompts, in order to be more targeted in our exploration."]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[9][3]} simpleFade={true} baseOpacity={0} text={
                        ["Part of our name criteria process includes pinpointing the most relevant name type for a given brand based on conventions and white space in the category, the intended tone and level of clarity, or even the idea that a certain type of name conveys. Here's an oversimplified example…"]
                    } />
                </VideoTextScroller>
            } />}
        />
    )

    const desktopVideoText0202 = (
        <TransformingContent positions={[[0, 0], [5, 5]]} scrollInfo={adjustedTimings[9][0]} alignment={['center', 'center']}
            child={<VideoTextBox scrollInfo={adjustedTimings[9][0]} displayWidth={85} heightRatio={0.625} child={
                <VideoTextScroller scrollInfo={adjustedTimings[9][0]} scrollToFrom={[500, -500]}>
                    <OpacityParagraph scrollInfo={adjustedTimings[9][1]} text={
                        ["It is safe to say this convention is exceedingly common among brand names across categories, PayPal, YouTube, Salesforce, Facebook… but many of the most famous, aspirational brand names use coined/invented words (Google, Hulu, Zappos, Xerox) or real, abstract dictionary words (Amazon, Apple, Peloton, Uber) – none of which would be delivered if we left GPT to its own naming devices."]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[9][2]} text={
                        ["The lesson learned? We may be better off asking GPT for “words” or “ideas” than “names” when trying to name a brand, helping it garner results more aligned to the range of possibilities. Or better yet, we can teach it to understand the different types of names through more detailed prompts, in order to be more targeted in our exploration."]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[9][3]} text={
                        ["Part of our name criteria process includes pinpointing the most relevant name type for a given brand based on conventions and white space in the category, the intended tone and level of clarity, or even the idea that a certain type of name conveys. Here's an oversimplified example…"]
                    } />
                </VideoTextScroller>
            } />}
        />
    )

    //Section 10
    const mobileVideoCoined0203 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 127]]} scrollInfo={adjustedTimings[10][0]} alignment={['center', 'center']}
            child={<VideoBox url={coined_fullscreen_02C} displayWidth={85} />}
        />
    );

    const desktopVideoCoined0203 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 127]]} scrollInfo={adjustedTimings[10][0]} alignment={['center', 'center']}
            child={<VideoBox url={coined_fullscreen_02C} displayWidth={85} />}
        />
    );

    //SECTION 11
    const desktopWhileThese = (
        <TransformingTextBox positions={[127, 27, 27, 27]} scrollInfo={adjustedTimings[11][0]} alignment={'top'} child={
            <DoubleColumn>
                <ColumnImage scrollInfo={adjustedTimings[11][0]} child={<ImgBox url={images.cute_robot} displayDimensions={[18, 50]} rotate={0} />} />
                <div>
                    <OpacityParagraph scrollInfo={adjustedTimings[11][0]} baseOpacity={0} dark={false} simpleFade={true} text={
                        ["While these results may not reflect the most viable names, we’ve quickly demonstrated that through simple priming around a certain type of name, and the intention behind it, GPT is able to apply this guidance to deliver a set of options with a more focused approach."]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[11][0]} dark={false} simpleFade={true} baseOpacity={0} text={
                        ["Let’s play on to see how this priming technique can be further expanded and refined to deliver even more interesting results."]
                    } />
                </div>
            </DoubleColumn>
        } />
    )

    //SECTION 13
    const mobileVideoAbstract01 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 5, 5]]} scrollInfo={adjustedTimings[13][0]} alignment={['center', 'center']}
            child={<VideoBox url={abstract_fullscreen_03A} displayWidth={85} />}
        />
    );

    const desktopVideoAbstract01 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 5, 5]]} scrollInfo={adjustedTimings[13][0]} alignment={['center', 'center']}
            child={<VideoBox url={abstract_fullscreen_03A} displayWidth={85} />}
        />
    );

    //SECTION 14
    const mobileVideoText0301 = (
        <TransformingContent positions={[[0, 0], [5, 5]]} scrollInfo={adjustedTimings[14][0]} alignment={['center', 'center']}
            child={<VideoTextBox scrollInfo={adjustedTimings[14][0]} displayWidth={85} heightRatio={0.625} child={
                <VideoTextScroller scrollInfo={adjustedTimings[14][0]} scrollToFrom={[100, -100]}>
                    <OpacityParagraph scrollInfo={adjustedTimings[14][1]} text={
                        ["Unsurprisingly GPT interprets the suggestion of intelligence through words that literally, and unimaginatively communicate the idea. Intelligent, wise, brain, insight, savvy are all closely associated or synonyms, and GPT has not yet outperformed the thesaurus in this creative exercise."]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[14][2]} text={
                        ["We came upon the idea to dissect the creative process and literally spell it out for GPT. "]
                    } />
                </VideoTextScroller>
            } />}
        />
    )

    const desktopVideoText0301 = (
        <TransformingContent positions={[[0, 0], [5, 5]]} scrollInfo={adjustedTimings[14][0]} alignment={['center', 'center']}
            child={<VideoTextBox scrollInfo={adjustedTimings[14][0]} displayWidth={85} heightRatio={0.625} child={
                <VideoTextScroller scrollInfo={adjustedTimings[14][0]} scrollToFrom={[500, -500]}>
                    <OpacityParagraph scrollInfo={adjustedTimings[14][1]} text={
                        ["Unsurprisingly GPT interprets the suggestion of intelligence through words that literally, and unimaginatively communicate the idea. Intelligent, wise, brain, insight, savvy are all closely associated or synonyms, and GPT has not yet outperformed the thesaurus in this creative exercise."]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[14][2]} text={
                        ["We came upon the idea to dissect the creative process and literally spell it out for GPT. "]
                    } />
                </VideoTextScroller>
            } />}
        />
    )

    //SECTION 15
    const mobileVideoAbstract02 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 5]]} scrollInfo={adjustedTimings[15][0]} alignment={['center', 'center']}
            child={<VideoBox url={abstract_fullscreen_03B} displayWidth={85} />}
        />
    );

    const desktopVideoAbstract02 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 5]]} scrollInfo={adjustedTimings[15][0]} alignment={['center', 'center']}
            child={<VideoBox url={abstract_fullscreen_03B} displayWidth={85} />}
        />
    );

    //SECTION 16
    const mobileVideoText0302 = (
        <TransformingContent positions={[[0, 0], [5, 5]]} scrollInfo={adjustedTimings[16][0]} alignment={['center', 'center']}
            child={<VideoTextBox scrollInfo={adjustedTimings[16][0]} displayWidth={85} heightRatio={0.625} child={
                <VideoTextScroller scrollInfo={adjustedTimings[16][0]} scrollToFrom={[500, -500]}>
                    <OpacityParagraph scrollInfo={adjustedTimings[16][1]} text={
                        ["Again unsurprisingly, GPT interprets the notion of “abstract” literally. Rather than using abstract ideas, metaphors, or creative leaps of the imagination, the tool finds words that mean “abstract” – like enigma, ethereal, mirage – to force-fit abstraction into its name options."]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[16][2]} text={
                        ["We tested a wide range of prompts trying to explain metaphor, abstraction, the use of associated ideas to communicate a theme, and the results were consistently limited in their imagination. Asking GPT to “imagine” words yields words like dream, reverie, and…imagine."]
                    } />
                    <OpacitySubheading scrollInfo={adjustedTimings[16][3]} text={
                        ["A breakthrough: “creative chaining”"]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[16][3]} text={
                        ["We came upon the idea to dissect the creative process and literally spell it out for GPT. Why does Oracle suggest intelligence? Because oracles are associated with predicting the future. An action that requires omniscience, and therefore conveys to us a notion of impressive intellect. Making that mental leap requires a chaining of associations, and that seemed like something we could teach GPT to do."]
                    } />
                </VideoTextScroller>
            } />}
        />
    )

    const desktopVideoText0302 = (
        <TransformingContent positions={[[0, 0], [5, 5]]} scrollInfo={adjustedTimings[16][0]} alignment={['center', 'center']}
            child={<VideoTextBox scrollInfo={adjustedTimings[16][0]} displayWidth={85} heightRatio={0.625} child={
                <VideoTextScroller scrollInfo={adjustedTimings[16][0]} scrollToFrom={[500, -500]}>
                    <OpacityParagraph scrollInfo={adjustedTimings[16][1]} text={
                        ["Again unsurprisingly, GPT interprets the notion of “abstract” literally. Rather than using abstract ideas, metaphors, or creative leaps of the imagination, the tool finds words that mean “abstract” – like enigma, ethereal, mirage – to force-fit abstraction into its name options."]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[16][2]} text={
                        ["We tested a wide range of prompts trying to explain metaphor, abstraction, the use of associated ideas to communicate a theme, and the results were consistently limited in their imagination. Asking GPT to “imagine” words yields words like dream, reverie, and…imagine."]
                    } />
                    <OpacitySubheading scrollInfo={adjustedTimings[16][3]} text={
                        ["A breakthrough: “creative chaining”"]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[16][3]} text={
                        ["We came upon the idea to dissect the creative process and literally spell it out for GPT. Why does Oracle suggest intelligence? Because oracles are associated with predicting the future. An action that requires omniscience, and therefore conveys to us a notion of impressive intellect. Making that mental leap requires a chaining of associations, and that seemed like something we could teach GPT to do."]
                    } />
                </VideoTextScroller>
            } />}
        />
    )

    //SECTION 17
    const mobileVideoAbstract03 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 100]]} scrollInfo={adjustedTimings[17][0]} alignment={['center', 'center']}
            child={<VideoBox url={abstract_fullscreen_03C} displayWidth={85} />}
        />
    );

    const desktopVideoAbstract03 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 100]]} scrollInfo={adjustedTimings[17][0]} alignment={['center', 'center']}
            child={<VideoBox url={abstract_fullscreen_03C} displayWidth={85} />}
        />
    );

    //SECTION 18
    const desktopWeFound = (
        <TransformingTextBox positions={[127, 27, 27, 27]} scrollInfo={adjustedTimings[18][0]} alignment={'top'} child={
            <DoubleColumn>
                <ColumnImage scrollInfo={adjustedTimings[18][0]} child={<ImgBox url={images.cute_robot} displayDimensions={[18, 50]} rotate={0} />} />
                <div>
                    <OpacitySubheading scrollInfo={adjustedTimings[18][0]} baseOpacity={0} dark={false} simpleFade={true} text={
                        ["We found the results exciting for a couple of reasons:"]
                    } />
                    <OpacityList scrollInfo={adjustedTimings[18][0]} dark={false} simpleFade={true} baseOpacity={0} text={
                        ["We were reaching a point where the words were less expected, but still had a root in themes of intelligence. Prior tests would not have yielded words like Quill, Marble, Canvas, or Hive – but through creative chaining, we got GPT there", "When asking GPT to show its chains, we could observe the “thought” progression, and intermediate words like Workshop and Symphony, too, elicited interesting creative pathways. The first word in every chain was more akin to the prior “abstract” results GPT created, but the chains grew progressively more “creative”", "GPT was able to assimilate the idea of “creative chaining” so subsequent requests within the same thread, we were able to ask for a new series of creative chain, or even just for the 4th word in each chain"]
                    } />
                </div>
            </DoubleColumn>
        } />
    )

    const desktopButChallenges = (
        <TransformingTextBox positions={[127, 27, 27, 27]} scrollInfo={adjustedTimings[18][1]} alignment={'top'} child={
            <DoubleColumn>
                <ColumnImage scrollInfo={adjustedTimings[18][1]} child={<ImgBox url={images.cute_robot} displayDimensions={[18, 50]} rotate={0} />} />
                <div>
                    <OpacityParagraph scrollInfo={adjustedTimings[18][1]} baseOpacity={0} dark={false} simpleFade={true} text={
                        ["BUT, challenges remain: we’ve achieved a route to abstraction, but these are still real words, unlikely to be available in many trademark categories. And the process broke down when we asked GPT to translate these real, dictionary words to more unique approaches like compound or coined names. Also, interestingly, after repeating a couple of times, we saw the results degrade – as though GPT was running out of ideas, or regressing to the notion where “abstract” becomes literally mysterious again…"]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[18][1]} dark={false} simpleFade={true} baseOpacity={0} text={
                        ["Intelligence > Creativity > Innovation > Ingenuity > Inventor Intelligence > Perception > Awareness > Consciousness > Cognition Intelligence > Science > Experiment > Hypothesis > Theory Intelligence > Mystery > Enigma > Riddle > Puzzle"]
                    } />
                </div>
            </DoubleColumn>
        } />
    )

    const desktopTryThis = (
        <TransformingTextBox positions={[127, 27, 27, 27]} scrollInfo={adjustedTimings[18][2]} alignment={'top'} child={
            <DoubleColumn>
                <ColumnImage scrollInfo={adjustedTimings[18][2]} child={<ImgBox url={images.cute_robot} displayDimensions={[18, 50]} rotate={0} />} />
                <div>
                    
                </div>
            </DoubleColumn>
        } />
    )

    return (
        <div style={{ position: "relative", height: "100%", width: "100%" }}>

            {/* HEADER */}
            <TransitionBackground background={images.naming_gradient} height={sectionHeights[0]} startHeight={0} hasTransition={true} />
            <FadingHeader text={header} scrollInfo={adjustedTimings[0][0]} />

            {/* SECTION 1 */}
            <Background background={"#202020"} height={sectionHeights[1]} />
            {isMobile ? mobileInCase : desktopInCase}
            {isMobile ? mobileOff : desktopOff}

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

            {/* SECTION 7 | VIDEO 2 TEXT*/}
            <Background background={images.naming_gradient} height={sectionHeights[7]} />
            {isMobile ? mobileVideoText01 : desktopVideoText01}

            {/* SECTION 8 | VIDEO */}
            <Background background={images.naming_gradient} height={sectionHeights[8]} />
            {isMobile ? mobileVideoNames02 : desktopVideoNames02}

            {/* SECTION 9 | VIDEO 2 TEXT*/}
            <Background background={images.naming_gradient} height={sectionHeights[9]} />
            {isMobile ? mobileVideoText0202 : desktopVideoText0202}

            {/* SECTION 10 | VIDEO */}
            <Background background={images.naming_gradient} height={sectionHeights[10]} />
            {isMobile ? mobileVideoCoined0203 : desktopVideoCoined0203}

            {/* SECTION 11*/}
            <Background background={images.naming_gradient} height={sectionHeights[11]} />
            {desktopWhileThese}

            {/* SECTION 12 */}
            <FadingSectionHeader text={sectionHeader03} scrollInfo={adjustedTimings[12][0]} />
            <TransitionBackground background={images.experiment_03} height={sectionHeights[12]} startHeight={sectionHeights.slice(0, 8).reduce((partialSum, a) => partialSum + a, 0)} endOpacity={0.8} hasTransition={true} />

            {/* SECTION 13 */}
            <Background background={images.naming_gradient} height={sectionHeights[13]} />
            {isMobile ? mobileVideoAbstract01 : desktopVideoAbstract01}

            {/* SECTION 14 */}
            <Background background={images.naming_gradient} height={sectionHeights[14]} />
            {isMobile ? mobileVideoText0301 : desktopVideoText0301}

            {/* SECTION 15 */}
            <Background background={images.naming_gradient} height={sectionHeights[15]} />
            {isMobile ? mobileVideoAbstract02 : desktopVideoAbstract02}

            {/* SECTION 16 */}
            <Background background={images.naming_gradient} height={sectionHeights[16]} />
            {isMobile ? mobileVideoText0302 : desktopVideoText0302}

            {/* SECTION 17 */}
            <Background background={images.naming_gradient} height={sectionHeights[17]} />
            {isMobile ? mobileVideoAbstract03 : desktopVideoAbstract03}

            {/* SECTION 18 */}
            <Background background={images.naming_gradient} height={sectionHeights[18]} />
            {desktopWeFound}
            {desktopButChallenges}
            {desktopTryThis}

        </div>
    )
}