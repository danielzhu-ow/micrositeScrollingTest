// import universal
import { devices } from '../constants/devices.js';
import { useMediaQuery } from 'react-responsive';

// import interactions
import { Background, TransitionBackground } from '../interactions/Background'
import { TransformingContent, ImgBox, VideoBox } from '../interactions/TransformingContent'
import { TransformingTextBox } from '../interactions/TransformingTextBox.jsx';
import { OpacityParagraph, OpacityList, OpacitySubheading, OpacityContent } from '../interactions/OpacityContent';
// import { Draggable } from '../interactions/Draggable.jsx';
import { ArticleLink } from '../ArticleStyles.jsx';
import { FadingHeader } from "../interactions/FadingHeader"
import { FadingSectionHeader } from '../interactions/FadingSectionHeader';
import { ColumnImage } from '../interactions/ColumnImage.js';
import { DoubleColumn } from '../interactions/DoubleColumn.js';
import { VideoTextBox } from '../interactions/VideoTextBox.js';
import { ScrollingColumn } from '../interactions/ScrollingColumn.jsx';
import { ExperimentNav } from '../interactions/ExperimentNav.jsx';

import baseline_fullscreen_01 from '../images/naming/baseline_fullscreen_01.mp4'
import words_fullscreen_02A from '../images/naming/words_fullscreen_02A.mp4'
import names_fullscreen_02B from '../images/naming/names_fullscreen_02B.mp4'
import coined_fullscreen_02C from '../images/naming/coined_fullscreen_02C.mp4'
import abstract_fullscreen_03A from '../images/naming/abstract_fullscreen_03A.mp4'
import abstract_fullscreen_03B from '../images/naming/abstract_fullscreen_03B.mp4'
import abstract_fullscreen_03C from '../images/naming/abstract_fullscreen_03C.mp4'
import { TryThis } from './TryThis.jsx';

// import assets
import { getImageByKey } from '../constants/imgContent.js';

export { NamingExperimentSection }

function NamingExperimentSection() {
    // load images
    // const images = useNamingImageLoader();

    //Heights               0    1    2    3    4    5    6    7  8    9  10   11   12   13   14   15   16   17   18
    const sectionHeights = [250, 400, 250, 200, 600, 250, 300, 0, 300, 0, 200, 400, 250, 400, 0, 600, 0, 200, 1200]

    //Timings | Timings are adjusted to start - end of section
    const sectionTimings = [
        //0 Fading Header
        [[0, 0.2, 0.5, 0.8], [0, 0, 0.2, 0.5]],
        //1 Para 1               Para 2                 Para 3                 Text Motion       Off
        [[-0.2, 0.05, 0.28, 1], [-0.2, 0.38, 0.61, 1], [-0.2, 0.71, 0.95, 1], [-0.2, 0.2, 0.8, 1], [-0.2, 0.1, 0.5, 0.8]],
        //2 Fading Section Header
        [[0, 0.2, 0.5, 1], [0, 0.2, 1.5]],
        //3 Video
        [[-0.1, 0.25, 1.2], [-0.1, 1.2]],
        //4 Para O 1             Para O 2           Para O 3             Scroll 1             Scroll 2               Scroll 3           Robot O 1                       Robot O 2                       Robot O 3      
        [[0, 1/12, 3/12, 2/3], [0, 5/12, 7/12, 1], [0, 9/12, 10/12, 1], [0, 1 / 6, 4 / 6], [0 / 6, 1 / 2, 6 / 6], [2 / 6, 5/6, 1], [0, 0, 1/12, 3/12, 1/3, 2/3], [0, 1/3, 5/12, 7/12, 2/3, 1], [1/3, 2/3, 9/12, 11/12, 1, 1]],
        //5 Fading Section Header
        [[0, 0.2, 0.5, 1], [0, 0.2, 1.5]],
        //6 Video
        [[0, 0.4, 1.2], [0.6, 0.8, 1, 1.2], [0, 1]],
        //7 Video Text
        [],
        //8, Video
        [[0, 0.4, 1.2], [0.6, 0.8, 1, 1.2], [0, 1]],
        //9 Video Text
        [],
        //10, Video
        [[0, 0.6, 1.3], [0, 1.3]],
        //11 Para 1 Motion                Transform + Opacity
        [[-0.2, -0.2, 0.16, 0.77, 1, 1], [-0.2, 0.16, 0.77, 1]],
        //12 Fading Section Header
        [[0, 0.4, 0.5, 1], [0, 0.2, 1.5]],
        //13 Video
        [[0, 0.4, 1.2], [0.6, 0.8, 1, 1.2], [0, 1]],
        //14 Video Text
        [],
        //15 Video
        [[0, 0.4, 1.1], [0.6, 0.8, 1, 0.9], [0.9, 1, 1.1, 1.1], [0.6, 0.8, 1, 1.1], [0, 1]],
        //16 Video Text
        [],
        //17 Video
        [[0, 0.6, 1.3], [0, 1.3]],
        //18 Para O 1         Para O 2                  Para O 3           Scroll 1           Scroll 2               Scroll 3           Robot O 1                       Robot O 2                       Robot O 3      
        [[0, 0.14, 0.18, 0.66], [0, 0.47, 0.51, 1.00], [0.33, 0.80, 0.84, 1], [0, 1 / 6, 4 / 6], [0 / 6, 1 / 2, 6 / 6], [2 / 6, 5 / 6, 1], [0, 0, 0.14, 0.18, 0.66, 1], [0, 0, 0, 0, 0, 1], [0, 0.66, 0.80, 0.84, 1, 1]],
    ]
    let adjustedTimings = []

    //HEADING TEXT
    const header = { subtitleTop_section: "NAMING + AI", subtitleTop_subsection: "EXPERIMENTS", title: "Naming: The Next Generation", subtitleBottom: "By [Author Name] | [Month] 2023" }
    const sectionHeader01 = { title_label: "Experiment 01", title: "Establishing the baseline", body: ["Starting with ChatGPT, we are setting out to understand the way the tool generates names without any help. How valuable are its “innate” instincts when looking to ideate new options for a brand name?", "So, let's create a realistic prompt, but limit our guidance or framing to see how it does."] }
    const sectionHeader02 = { title_label: "Experiment 02", title: "Is the word “name” a problem?", body: ["One early observation as we’ve played with GPT’s naming capabilities: its go-to understanding of the word “name.”", "We first asked GPT to generate 10 “words” that abstractly evoke intelligence, and some of the results were interesting and could conceivably be used as, or modified into viable brand names."] }
    const sectionHeader03 = { title_label: "Experiment 03", title: "GPT is literally, so literal. Can we teach it abstraction?", body: ["If you’ve ever asked GPT to create names, you know it tends to over-index on expected category terms. For example, ask it to generate names for a tech brand that suggest intelligence, you’ll get results like the following:"] }
    const tryText = { header: "Try this experiment out yourself!", body: "" }

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
    const videoRatio = 0.626

    // const draggable = (
    //     <Draggable startHeight={0} height={sectionHeights[0]} windowUrl={getImageByKey('naming_03')} maskUrl={getImageByKey('mask')} />
    // )

    //SECTION 2
    const mobileInCase = (
        <TransformingTextBox positions={[127, 27, -100, -160]} scrollInfo={adjustedTimings[1][3]} alignment={'top'} child={
            <>
                <ImgBox url={getImageByKey("mobile_duracell_off")} displayDimensions={[80, 26]} rotate={0} fixWidth={true} />
                <OpacitySubheading scrollInfo={adjustedTimings[1][0]} text={
                    ["In case you missed it..."]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[1][0]} complexFade text={
                    [<i>Lippincott has been a leader in brand name development for 80 years, and creator of classic household brand names like Duracell, Sprite, and Off! and more recent market-changers like Kenvue, Refinitiv, and Marcus. But as the limitations of language, trademark, name real estate and other stakes get even higher, AI represents a powerful opportunity to supercharge our naming power as long as we can manage for quality.</i>]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[1][1]} complexFade text={
                    [<i>For perspective, Lippincott typically generates 2,000 names against a project brief before narrowing to the 20 we present. But when you consider that Ai could access 217 billion other possibilities for names with 8 letters or less, it's clear we may be missing some gems. An equally sobering counterpoint is that efforts to date point to an AI that is good at generating quantity, but bad at producing or selecting quality.</i>]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[1][2]} complexFade text={
                    [<i>So we've decided to play - to challenge this notion, by using more sophisticated prompts, deeper training, and test-and-learn methodology to see if we can get more viable results from AI.</i>]
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
                <OpacityParagraph scrollInfo={adjustedTimings[1][0]} complexFade text={
                    [<i>Lippincott has been a leader in brand name development for 80 years, and creator of classic household brand names like Duracell, Sprite, and Off! and more recent market-changers like Kenvue, Refinitiv, and Marcus. But as the limitations of language, trademark, name real estate and other stakes get even higher, AI represents a powerful opportunity to <ArticleLink href='http://google.com' style={{ color: 'white' }}>supercharge our naming power</ArticleLink> as long as we can manage for quality.</i>]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[1][1]} complexFade text={
                    [<i>For perspective, Lippincott typically generates 2,000 names against a project brief before narrowing to the 20 we present. But when you consider that Ai could access 217 billion other possibilities for names with 8 letters or less, it's clear we may be missing some gems. An equally sobering counterpoint is that efforts to date point to an AI that is good at generating quantity, but bad at producing or selecting quality.</i>]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[1][2]} complexFade text={
                    [<i>So we've decided to play - to challenge this notion, by using more sophisticated prompts, deeper training, and test-and-learn methodology to see if we can get more viable results from AI.</i>]
                } />
            </>
        } />
    )

    const desktopOff = (
        <>
            <TransformingContent child={<ImgBox url={getImageByKey("duracell")} displayDimensions={[26, 40]} rotate={-48} />} positions={[[1, 1, 1, 1], [-100, 5, 5, -100]]} scrollInfo={adjustedTimings[1][4]} alignment={['left', 'bottom']} />
            <TransformingContent child={<ImgBox url={getImageByKey("off")} displayDimensions={[20, 60]} rotate={10} />} positions={[[1, 1, 1, 1], [-100, 5, 5, -100]]} scrollInfo={adjustedTimings[1][4]} alignment={['right', 'bottom']} />
        </>
    )

    //SECTION 3
    const mobileVideoBaseline01 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 5, 100]]} scrollInfo={adjustedTimings[3][0]} alignment={['center', 'center']}
            child={<VideoBox url={baseline_fullscreen_01} displayWidth={85} scrollInfo={adjustedTimings[3][1]} />}
        />
    );

    const desktopVideoBaseline01 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 5, 100]]} scrollInfo={adjustedTimings[3][0]} alignment={['center', 'center']}
            child={<VideoBox url={baseline_fullscreen_01} displayWidth={85} scrollInfo={adjustedTimings[3][1]} />}
        />
    );

    //SECTION 4
    const desktopTheGood = (
        <TransformingTextBox doubled positions={[127, 27, 27, 27]} scrollInfo={adjustedTimings[4][0]} alignment={'top'} child={
            <DoubleColumn>
                <ColumnImage scrollInfo={adjustedTimings[4][6]} backY={12} child={<ImgBox url={getImageByKey("cute_robot")} displayDimensions={[70, 80]} rotate={0} />} />
                <ScrollingColumn scrollInfo={adjustedTimings[4][3]} scrollIn={false}>
                    <OpacitySubheading scrollInfo={adjustedTimings[4][0]} baseOpacity={0.2} dark={false} text={
                        ["The good:"]
                    } />
                    <OpacityList scrollInfo={adjustedTimings[4][0]} dark={false} baseOpacity={0.2} text={
                        [<p><b>It's fast:</b> while experienced namers take several hours to generate a list of 100 names, GPT can produce that amount instantaneously</p>, <p><b>It's accurate:</b> the names feel appropriate to the request, and tend to leverage familiar, and well-understood terms to ground names in the offering we're defining. Even more, it demonstrates an understanding of a technical category, and the relevant words commonly used in the space.</p>]
                    } />
                </ScrollingColumn>
            </DoubleColumn>
        } />
    )

    const desktopTheBad = (
        <TransformingTextBox doubled positions={[27, 27, 27, 27]} scrollInfo={adjustedTimings[4][1]} alignment={'top'} child={
            <DoubleColumn>
                <ColumnImage scrollInfo={adjustedTimings[4][7]} backY={5} child={<ImgBox url={getImageByKey("orange_robot1")} displayDimensions={[65, 80]} rotate={0} />} />
                <ScrollingColumn scrollInfo={adjustedTimings[4][4]}>
                    <OpacitySubheading scrollInfo={adjustedTimings[4][1]} dark={false} baseOpacity={0.2} text={
                        ["The bad:"]
                    } />
                    <OpacityList scrollInfo={adjustedTimings[4][1]} dark={false} baseOpacity={0.2} text={
                        [<p><b>Literal and limited:</b> The concepts are highly literal and directly guided by words in the prompt, suggesting a lack of ability for abstraction or thinking more conceptually.</p>, <p><b>Lack of craft:</b> A bias toward compound “CamelCap” names that can feel dated, clunky, or less distinctive, the names don't have the intangible feel of a good name that's easy to say and remember.</p>, <p><b>Non-viable:</b> Generic terminology would be challenging to clear legal. We need to be able to stretch into less expected spaces to navigate the crowded trademark territories our clients occupy</p>]
                    } />
                </ScrollingColumn>
            </DoubleColumn>
        } />
    )

    const desktopTheOpportunity = (
        <TransformingTextBox doubled positions={[27, 27, 27, -100]} scrollInfo={adjustedTimings[4][2]} alignment={'top'} child={
            <DoubleColumn>
                <ColumnImage scrollInfo={adjustedTimings[4][8]} backY={25} child={<ImgBox url={getImageByKey("tin_robot3")} displayDimensions={[65, 100]} rotate={0} />} />
                <ScrollingColumn scrollInfo={adjustedTimings[4][5]} scrollOut={false}>
                    <OpacitySubheading scrollInfo={adjustedTimings[4][2]} dark={false} baseOpacity={0.2} text={
                        ["The opportunity:"]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[4][2]} dark={false} baseOpacity={0.2} text={
                        ["It's clear that GPT at baseline doesn't give us what we need, but we have a number of options through creative prompting and context-setting that can help drive toward more interesting results. Can we teach GPT different types of names? Can we train it to think more abstractly or creatively? Can we diversify the naming approaches or themes it explores? Can feeding it past examples or IC on our best practices help coach it to think more like we do about naming?"]
                    } />
                </ScrollingColumn>
            </DoubleColumn>
        } />
    )

    //SECTION 6
    const videoBaseline02 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 5, 5]]} scrollInfo={adjustedTimings[6][0]} alignment={['center', 'center']}
            child={<>
                <VideoBox url={words_fullscreen_02A} displayWidth={85} scrollInfo={adjustedTimings[6][2]} child={
                    <VideoTextBox scrollInfo={adjustedTimings[6][1]} child={
                        <OpacityParagraph scrollInfo={adjustedTimings[6][1]} simpleFade={true} baseOpacity={0} text={
                            ["It's clear that GPT at baseline doesn't give us what we need, but we have a number of options through creative prompting and context-setting that can help drive toward more interesting results. Can we teach GPT different types of names? Can we train it to think more abstractly or creatively? Can we diversify the naming approaches or themes it explores? Can feeding it past examples or IC on our best practices help coach it to think more like we do about naming?"]
                        } />
                    } />
                } />
            </>}
        />
    );

    //SECTION 7

    //SECTION 8
    const mobileVideoNames02 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 5]]} scrollInfo={adjustedTimings[8][0]} alignment={['center', 'center']}
            child={<>
                <VideoBox url={names_fullscreen_02B} displayWidth={85} scrollInfo={adjustedTimings[8][2]} child={
                    <VideoTextBox scrollInfo={adjustedTimings[8][1]} child={
                        <div>
                            <OpacityParagraph scrollInfo={adjustedTimings[8][1]} simpleFade={true} baseOpacity={0} text={
                                ["It is safe to say this convention is exceedingly common among brand names across categories, PayPal, YouTube, Salesforce, Facebook… but many of the most famous, aspirational brand names use coined/invented words (Google, Hulu, Zappos, Xerox) or real, abstract dictionary words (Amazon, Apple, Peloton, Uber) – none of which would be delivered if we left GPT to its own naming devices."]
                            } />
                            <OpacityParagraph scrollInfo={adjustedTimings[8][1]} simpleFade={true} baseOpacity={0} text={
                                ["The lesson learned? We may be better off asking GPT for “words” or “ideas” than “names” when trying to name a brand, helping it garner results more aligned to the range of possibilities. Or better yet, we can teach it to understand the different types of names through more detailed prompts, in order to be more targeted in our exploration."]
                            } />
                            <OpacityParagraph scrollInfo={adjustedTimings[8][1]} simpleFade={true} baseOpacity={0} text={
                                ["Part of our name criteria process includes pinpointing the most relevant name type for a given brand based on conventions and white space in the category, the intended tone and level of clarity, or even the idea that a certain type of name conveys. Here's an oversimplified example…"]
                            } />
                        </div>
                    } />
                } />
            </>}
        />
    );

    const desktopVideoNames02 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 5]]} scrollInfo={adjustedTimings[8][0]} alignment={['center', 'center']}
            child={<>
                <VideoBox url={names_fullscreen_02B} displayWidth={85} scrollInfo={adjustedTimings[8][2]} child={
                    <VideoTextBox scrollInfo={adjustedTimings[8][1]} child={
                        <div>
                            <OpacityParagraph scrollInfo={adjustedTimings[8][1]} simpleFade={true} baseOpacity={0} text={
                                ["It is safe to say this convention is exceedingly common among brand names across categories, PayPal, YouTube, Salesforce, Facebook… but many of the most famous, aspirational brand names use coined/invented words (Google, Hulu, Zappos, Xerox) or real, abstract dictionary words (Amazon, Apple, Peloton, Uber) – none of which would be delivered if we left GPT to its own naming devices."]
                            } />
                            <OpacityParagraph scrollInfo={adjustedTimings[8][1]} simpleFade={true} baseOpacity={0} text={
                                ["The lesson learned? We may be better off asking GPT for “words” or “ideas” than “names” when trying to name a brand, helping it garner results more aligned to the range of possibilities. Or better yet, we can teach it to understand the different types of names through more detailed prompts, in order to be more targeted in our exploration."]
                            } />
                            <OpacityParagraph scrollInfo={adjustedTimings[8][1]} simpleFade={true} baseOpacity={0} text={
                                ["Part of our name criteria process includes pinpointing the most relevant name type for a given brand based on conventions and white space in the category, the intended tone and level of clarity, or even the idea that a certain type of name conveys. Here's an oversimplified example…"]
                            } />
                        </div>
                    } />
                } />
            </>}
        />
    );

    //SECTION 9

    //Section 10
    const mobileVideoCoined0203 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 127]]} scrollInfo={adjustedTimings[10][0]} alignment={['center', 'center']}
            child={<VideoBox url={coined_fullscreen_02C} displayWidth={85} scrollInfo={adjustedTimings[10][1]} />}
        />
    );

    const desktopVideoCoined0203 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 127]]} scrollInfo={adjustedTimings[10][0]} alignment={['center', 'center']}
            child={<VideoBox url={coined_fullscreen_02C} displayWidth={85} scrollInfo={adjustedTimings[10][1]} />}
        />
    );

    //SECTION 11
    const desktopWhileThese = (
        <TransformingTextBox doubled positions={[127, 16, 16, -100]} scrollInfo={adjustedTimings[11][1]} alignment={'top'} child={
            <DoubleColumn>
                <ColumnImage scrollInfo={adjustedTimings[11][0]} backY={-2} child={<ImgBox url={getImageByKey("cute_robot")} displayDimensions={[70, 80]} rotate={0} />} />
                <div>
                    <OpacityParagraph scrollInfo={adjustedTimings[11][1]} baseOpacity={0.2} dark={false} simpleFade={true} text={
                        ["While these results may not reflect the most viable names, we’ve quickly demonstrated that through simple priming around a certain type of name, and the intention behind it, GPT is able to apply this guidance to deliver a set of options with a more focused approach."]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[11][1]} dark={false} simpleFade={true} baseOpacity={0.2} text={
                        ["Let’s play on to see how this priming technique can be further expanded and refined to deliver even more interesting results."]
                    } />
                    <br /><br /><br />
                    <TryThis text={tryText} scrollInfo={adjustedTimings[11][1]} />
                </div>
            </DoubleColumn>
        } />
    )

    //SECTION 13
    const mobileVideoAbstract01 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 5, 5]]} scrollInfo={adjustedTimings[13][0]} alignment={['center', 'center']}
            child={<VideoBox url={abstract_fullscreen_03A} displayWidth={85} scrollInfo={adjustedTimings[13][2]} child={
                <VideoTextBox scrollInfo={adjustedTimings[13][1]} displayWidth={85} child={
                    <div>
                        <OpacityParagraph scrollInfo={adjustedTimings[13][1]} simpleFade={true} text={
                            ["Unsurprisingly GPT interprets the suggestion of intelligence through words that literally, and unimaginatively communicate the idea. Intelligent, wise, brain, insight, savvy are all closely associated or synonyms, and GPT has not yet outperformed the thesaurus in this creative exercise."]
                        } />
                        <OpacityParagraph scrollInfo={adjustedTimings[13][1]} simpleFade={true} text={
                            ["We came upon the idea to dissect the creative process and literally spell it out for GPT. "]
                        } />
                    </div>
                } />
            } />}
        />
    );

    const desktopVideoAbstract01 = (
        <TransformingContent positions={[[0, 0, 0], [-100, 5, 5]]} scrollInfo={adjustedTimings[13][0]} alignment={['center', 'center']}
            child={<VideoBox url={abstract_fullscreen_03A} displayWidth={85} scrollInfo={adjustedTimings[13][2]} child={
                <VideoTextBox scrollInfo={adjustedTimings[13][1]} displayWidth={85} child={
                    <div>
                        <OpacityParagraph scrollInfo={adjustedTimings[13][1]} simpleFade={true} text={
                            ["Unsurprisingly GPT interprets the suggestion of intelligence through words that literally, and unimaginatively communicate the idea. Intelligent, wise, brain, insight, savvy are all closely associated or synonyms, and GPT has not yet outperformed the thesaurus in this creative exercise."]
                        } />
                        <OpacityParagraph scrollInfo={adjustedTimings[13][1]} simpleFade={true} text={
                            ["We came upon the idea to dissect the creative process and literally spell it out for GPT. "]
                        } />
                    </div>
                } />
            } />}
        />
    );

    //SECTION 15
    const mobileVideoAbstract02 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 5]]} scrollInfo={adjustedTimings[15][0]} alignment={['center', 'center']}
            child={<VideoBox url={abstract_fullscreen_03B} displayWidth={85} scrollInfo={adjustedTimings[15][4]} child={
                <VideoTextBox scrollInfo={adjustedTimings[15][3]} displayWidth={85} heightRatio={videoRatio} child={
                    <div>
                        <OpacityParagraph scrollInfo={adjustedTimings[15][1]} simpleFade={true} text={
                            ["Again unsurprisingly, GPT interprets the notion of “abstract” literally. Rather than using abstract ideas, metaphors, or creative leaps of the imagination, the tool finds words that mean “abstract” – like enigma, ethereal, mirage – to force-fit abstraction into its name options."]
                        } />
                        <OpacityParagraph scrollInfo={adjustedTimings[15][1]} simpleFade={true} text={
                            ["We tested a wide range of prompts trying to explain metaphor, abstraction, the use of associated ideas to communicate a theme, and the results were consistently limited in their imagination. Asking GPT to “imagine” words yields words like dream, reverie, and…imagine."]
                        } />
                        <OpacitySubheading scrollInfo={adjustedTimings[15][2]} simpleFade={true} text={
                            ["A breakthrough: “creative chaining”"]
                        } />
                        <OpacityParagraph scrollInfo={adjustedTimings[15][2]} simpleFade={true} text={
                            ["We came upon the idea to dissect the creative process and literally spell it out for GPT. Why does Oracle suggest intelligence? Because oracles are associated with predicting the future. An action that requires omniscience, and therefore conveys to us a notion of impressive intellect. Making that mental leap requires a chaining of associations, and that seemed like something we could teach GPT to do."]
                        } />
                    </div>
                } />}
            />}
        />
    );

    const desktopVideoAbstract02 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 5]]} scrollInfo={adjustedTimings[15][0]} alignment={['center', 'center']}
            child={<VideoBox url={abstract_fullscreen_03B} displayWidth={85} scrollInfo={adjustedTimings[15][4]} child={
                <VideoTextBox scrollInfo={adjustedTimings[15][3]} displayWidth={85} heightRatio={videoRatio} child={
                    <div>
                        <OpacityParagraph scrollInfo={adjustedTimings[15][1]} simpleFade={true} text={
                            ["Again unsurprisingly, GPT interprets the notion of “abstract” literally. Rather than using abstract ideas, metaphors, or creative leaps of the imagination, the tool finds words that mean “abstract” – like enigma, ethereal, mirage – to force-fit abstraction into its name options."]
                        } />
                        <OpacityParagraph scrollInfo={adjustedTimings[15][1]} simpleFade={true} text={
                            ["We tested a wide range of prompts trying to explain metaphor, abstraction, the use of associated ideas to communicate a theme, and the results were consistently limited in their imagination. Asking GPT to “imagine” words yields words like dream, reverie, and…imagine."]
                        } />
                        <OpacitySubheading scrollInfo={adjustedTimings[15][2]} simpleFade={true} text={
                            ["A breakthrough: “creative chaining”"]
                        } />
                        <OpacityParagraph scrollInfo={adjustedTimings[15][2]} simpleFade={true} text={
                            ["We came upon the idea to dissect the creative process and literally spell it out for GPT. Why does Oracle suggest intelligence? Because oracles are associated with predicting the future. An action that requires omniscience, and therefore conveys to us a notion of impressive intellect. Making that mental leap requires a chaining of associations, and that seemed like something we could teach GPT to do."]
                        } />
                    </div>
                } />}
            />}
        />
    );

    //SECTION 16

    //SECTION 17
    const mobileVideoAbstract03 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 100]]} scrollInfo={adjustedTimings[17][0]} alignment={['center', 'center']}
            child={<VideoBox url={abstract_fullscreen_03C} displayWidth={85} scrollInfo={adjustedTimings[17][1]} />}
        />
    );

    const desktopVideoAbstract03 = (
        <TransformingContent positions={[[0, 0, 0], [5, 5, 100]]} scrollInfo={adjustedTimings[17][0]} alignment={['center', 'center']}
            child={<VideoBox url={abstract_fullscreen_03C} displayWidth={85} scrollInfo={adjustedTimings[17][1]} />}
        />
    );

    //SECTION 18
    const desktopWeFound = (
        <TransformingTextBox doubled positions={[127, 27, 27, 27]} scrollInfo={adjustedTimings[18][0]} alignment={'top'} child={
            <DoubleColumn>
                <ColumnImage scrollInfo={adjustedTimings[18][6]} backY={12} fadeOut={false} child={<ImgBox url={getImageByKey("cute_robot")} displayDimensions={[70, 80]} rotate={0} />} />
                <ScrollingColumn scrollInfo={adjustedTimings[18][3]} scrollIn={false}>
                    <OpacitySubheading scrollInfo={adjustedTimings[18][0]} dark={false} text={
                        ["We found the results exciting for a couple of reasons:"]
                    } />
                    <OpacityList scrollInfo={adjustedTimings[18][0]} dark={false} text={
                        ["We were reaching a point where the words were less expected, but still had a root in themes of intelligence. Prior tests would not have yielded words like Quill, Marble, Canvas, or Hive – but through creative chaining, we got GPT there", "When asking GPT to show its chains, we could observe the “thought” progression, and intermediate words like Workshop and Symphony, too, elicited interesting creative pathways. The first word in every chain was more akin to the prior “abstract” results GPT created, but the chains grew progressively more “creative”", "GPT was able to assimilate the idea of “creative chaining” so subsequent requests within the same thread, we were able to ask for a new series of creative chain, or even just for the 4th word in each chain"]
                    } />
                </ScrollingColumn>
            </DoubleColumn>
        } />
    )

    const desktopButChallenges = (
        <TransformingTextBox doubled positions={[27, 27, 27, 27]} scrollInfo={adjustedTimings[18][1]} alignment={'top'} child={
            <DoubleColumn>
                <ColumnImage invisible scrollInfo={adjustedTimings[18][7]} backY={12} fadeIn={false} fadeOut={false} child={<ImgBox url={getImageByKey("cute_robot")} displayDimensions={[70, 80]} rotate={0} />} />
                <ScrollingColumn scrollInfo={adjustedTimings[18][4]}>
                    <OpacityParagraph scrollInfo={adjustedTimings[18][1]} dark={false} text={
                        ["BUT, challenges remain: we’ve achieved a route to abstraction, but these are still real words, unlikely to be available in many trademark categories. And the process broke down when we asked GPT to translate these real, dictionary words to more unique approaches like compound or coined names. Also, interestingly, after repeating a couple of times, we saw the results degrade – as though GPT was running out of ideas, or regressing to the notion where “abstract” becomes literally mysterious again…"]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[18][1]} dark={false} text={
                        [<i>Intelligence {'>'} Creativity {'>'} Innovation {'>'} Ingenuity {'>'} Inventor Intelligence {'>'} Perception {'>'} Awareness {'>'} Consciousness {'>'} Cognition Intelligence {'>'} Science {'>'} Experiment {'>'} Hypothesis {'>'} Theory Intelligence {'>'} Mystery {'>'} Enigma {'>'} Riddle {'>'} Puzzle</i>]
                    } />
                </ScrollingColumn>
            </DoubleColumn>
        } />
    )

    const desktopToKeep = (
        <TransformingTextBox doubled positions={[10, 10, 10, -100]} scrollInfo={adjustedTimings[18][2]} alignment={'top'} child={
            <DoubleColumn>
                <ColumnImage scrollInfo={adjustedTimings[18][8]} backY={-9.25} fadeIn={false} child={<ImgBox url={getImageByKey("cute_robot")} displayDimensions={[70, 80]} rotate={0} />} />
                <ScrollingColumn scrollInfo={adjustedTimings[18][5]} scrollOut={false} >
                    <OpacityParagraph scrollInfo={adjustedTimings[18][2]} dark={false} text={
                        ["To keep GPT in a truly originative space, we need to reset our prompts frequently, and keep pushing toward more freedom of association."]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[18][2]} dark={false} text={
                        ["While these results may not reflect the most viable names, we’ve quickly demonstrated that through simple priming around a certain type of name, and the intention behind it, GPT is able to apply this guidance to deliver a set of options with a more focused approach."]
                    } />
                    <OpacityParagraph scrollInfo={adjustedTimings[18][2]} dark={false} text={
                        ["Let’s play on to see how this priming technique can be further expanded and refined to deliver even more interesting results."]
                    } />
                    <TryThis text={tryText} scrollInfo={adjustedTimings[18][2]} />
                </ScrollingColumn>
            </DoubleColumn>
        } />
    )

    return (
        <div style={{ position: "relative", height: "100%", width: "100%" }}>

            {/* HEADER */}
            <TransformingContent child={<OpacityContent baseOpacity={0} scrollInfo={adjustedTimings[0][1]} child={<ImgBox url={getImageByKey("headerShadeExperiment")} displayDimensions={[85, 25]} rotate={0} />} />} positions={[[7.5,7.5,7.5,7.5], [0, 0, 0, 0]]} scrollInfo={adjustedTimings[0][0]} alignment={['left', 'bottom']} />
            <TransitionBackground background={getImageByKey("naming_gradient")} height={sectionHeights[0]} startHeight={0} hasTransition={true} delayed={[0.5, 1]} />
            <FadingHeader text={header} scrollInfo={adjustedTimings[0][0]} startOn={true} />
            {/* {draggable} */}

            {/* SECTION 1 */}
            <Background background={"#202020"} height={sectionHeights[1]} />
            {isMobile ? mobileInCase : desktopInCase}
            {isMobile ? <></> : desktopOff}

            {/* SECTION 2 | HEADER */}
            <TransitionBackground background={getImageByKey("experiment_01")} height={sectionHeights[2]} startHeight={sectionHeights[0] + sectionHeights[1]} endOpacity={0.8} hasTransition={true} preserveRatio />
            <FadingSectionHeader text={sectionHeader01} scrollInfo={adjustedTimings[2][0]} />

            {/* SECTION 3 | VIDEO 1*/}
            <Background background={getImageByKey("naming_gradient")} height={sectionHeights[3]} />
            {isMobile ? mobileVideoBaseline01 : desktopVideoBaseline01}

            {/* SECTION 4 */}
            <Background background={getImageByKey("naming_gradient")} height={sectionHeights[4]} />
            {desktopTheGood}
            {desktopTheBad}
            {desktopTheOpportunity}

            {/* SECTION 5 | HEADER */}
            <TransitionBackground background={getImageByKey("experiment_02")} height={sectionHeights[5]} startHeight={sectionHeights.slice(0, 5).reduce((partialSum, a) => partialSum + a, 0)} endOpacity={0.8} hasTransition={true} preserveRatio />
            <FadingSectionHeader text={sectionHeader02} scrollInfo={adjustedTimings[5][0]} />

            {/* VIDEO */}
            {/* SECTION 10 | VIDEO */}
            <Background background={getImageByKey("naming_gradient")} height={sectionHeights[10]} />
            {isMobile ? mobileVideoCoined0203 : desktopVideoCoined0203}

            {/* SECTION 8 | VIDEO */}
            <Background background={getImageByKey("naming_gradient")} height={sectionHeights[8]} />
            {isMobile ? mobileVideoNames02 : desktopVideoNames02}

            {/* SECTION 6 | VIDEO 2*/}
            <Background background={getImageByKey("naming_gradient")} height={sectionHeights[6]} />
            {videoBaseline02}

            {/* SECTION 11*/}
            <Background background={getImageByKey("naming_gradient")} height={sectionHeights[11]} />
            {desktopWhileThese}

            {/* SECTION 12 */}
            <TransitionBackground background={getImageByKey("experiment_03")} height={sectionHeights[12]} startHeight={sectionHeights.slice(0, 12).reduce((partialSum, a) => partialSum + a, 0)} endOpacity={0.8} hasTransition={true} preserveRatio />
            <FadingSectionHeader text={sectionHeader03} scrollInfo={adjustedTimings[12][0]} />

            {/* VIDEOS */}

            {/* SECTION 17 */}
            <Background background={getImageByKey("naming_gradient")} height={sectionHeights[17]} />
            {isMobile ? mobileVideoAbstract03 : desktopVideoAbstract03}

            {/* SECTION 15 */}
            <Background background={getImageByKey("naming_gradient")} height={sectionHeights[15]} />
            {isMobile ? mobileVideoAbstract02 : desktopVideoAbstract02}

            {/* SECTION 13 */}
            <Background background={getImageByKey("naming_gradient")} height={sectionHeights[13]} />
            {isMobile ? mobileVideoAbstract01 : desktopVideoAbstract01}

            {/* SECTION 18 */}
            <Background background={getImageByKey("naming_gradient")} height={sectionHeights[18]} />
            {desktopWeFound}
            {desktopButChallenges}
            {desktopToKeep}

            <ExperimentNav heightsInfo={[[2, 5], [5, 12], [12, 19]]} sectionHeights={sectionHeights} />
        </div>
    )
}