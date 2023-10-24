import PropTypes from "prop-types"
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useMotionValueEvent } from "framer-motion"
import { ContentHeader, ContentSubheader1, ContentSubheader2 } from "../ArticleHeader";

export { FadingHeader }
// function FadingHeader({ type, scrollInfo }) {
//     // const { scrollYProgress } = useScroll();
//     // const opacity = useTransform(scrollYProgress, scrollInfo, [0, 1, 1])
//     // const visible = useTransform(scrollYProgress, )
//     const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length-1], 1]
//     const { scrollYProgress } = useScroll();
//     const opacity = useTransform(scrollYProgress, scrollInfo, [0, 1, 1])
//     const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'inline', 'none'])

//     let content = <></>
//     if (type === 'manifesto') {
//         content =
//             <div>
//                 <ContentSubheader1>
//                     &nbsp;NAMING&nbsp;&nbsp;+&nbsp;&nbsp;AI&nbsp;&nbsp;&gt;&nbsp;&nbsp;SERIES INTRO&nbsp;
//                 </ContentSubheader1>
//                 <ContentHeader>We need<br />to talk about AI</ContentHeader>
//                 <ContentSubheader2>
//                     By Tom Ajello | [Month] 2023
//                 </ContentSubheader2>
//             </div>
//     }

//     return (
//         <motion.div style={{
//             position: "fixed",
//             top: " 50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             opacity: opacity,
//             display: visible
//         }}>
//             { content }
//         </motion.div>
//     )
// }

function FadingHeader({ text, scrollInfo }) {
    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length-1], 1]
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, scrollInfo, [0, 1, 1])
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'inline', 'none'])
    // useMotionValueEvent(visible, 'change', latest => console.log(latest))
    let content  =
            <div>
                <ContentSubheader1>
                    {text.subtitleTop_section} &nbsp;&nbsp;&gt;&nbsp;&nbsp; {text.subtitleTop_subsection}
                </ContentSubheader1>
                <ContentHeader>{text.title}</ContentHeader>
                <ContentSubheader2>
                   {text.subtitleBottom}
                </ContentSubheader2>
            </div>
    

    return (
        <motion.div style={{
            position: "fixed",
            top: " 50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: opacity,
            display: visible
        }}>
            { content }
        </motion.div>
    )
}