import PropTypes from "prop-types"
import { motion, useScroll, useTransform } from "framer-motion"
import { ContentHeader, ContentSubheader1, ContentSubheader2 } from "../ArticleHeader";

export { FadingHeader }

function FadingHeader({ text, scrollInfo, startOn }) {
    let opacityInfo = [0.1, 1, 0.1]
    if (startOn) { opacityInfo = [1, 1, 1, 0.1] }
    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, scrollInfo, opacityInfo)
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'block', 'none'])
    // useMotionValueEvent(visible, 'change', latest => console.log(latest))

    let content =
        <div style={{ maxWidth: '94rem', paddingLeft: '3.2rem', paddingRight: '3.2rem', margin: 'auto'}}>
            <ContentSubheader1>
                {text.subtitleTop_section} &nbsp;&nbsp;&gt;&nbsp;&nbsp; {text.subtitleTop_subsection}
            </ContentSubheader1>
            <ContentHeader>{text.title.split("<br/>").join("\n")}</ContentHeader>
            <ContentSubheader2>
                {text.subtitleBottom}
            </ContentSubheader2>
        </div>

    return (
        <motion.div style={{
            position: "fixed",
            width: "100%",
            height: "fit-content",
            top: "50%",
            transform: "translateY(-50%)",
            opacity: opacity,
            display: visible
        }}>
            {content}
        </motion.div>
    )
}

FadingHeader.defaultProps = {
    startOn: false
}

FadingHeader.propTypes = {
    startOn: PropTypes.bool,
    text: PropTypes.object.isRequired,
    scrollInfo: PropTypes.arrayOf(PropTypes.number).isRequired,
}