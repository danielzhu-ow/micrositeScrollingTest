import PropTypes from "prop-types"
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useMotionValueEvent } from "framer-motion"
import { ArticleBody, ArticleBodyBlack, ArticleBodyWhite } from "../ArticleStyles"

export { OpacityContent, OpacityParagraph }

function OpacityContent({ child, scrollInfo, baseOpacity }) {

    let opacityTransform = [baseOpacity, 1, 1, baseOpacity]
    if (scrollInfo.length == 6) { opacityTransform = [baseOpacity, baseOpacity, 1, 1, baseOpacity, baseOpacity] }
    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]

    const { scrollYProgress } = useScroll();

    //Calculate Transforms
    const opacity = useTransform(scrollYProgress, scrollInfo, opacityTransform)
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'inline', 'none'])

    return (
        <motion.div style={{
            position: "fixed",
            opacity: opacity,
            display: visible
        }}>
            {child}
        </motion.div>
    )
}

OpacityContent.defaultProps = {
    baseOpacity: 0.15
}

OpacityContent.propTypes = {
    child: PropTypes.any,
    scrollInfo: PropTypes.arrayOf(PropTypes.number).isRequired,
    baseOpacity: PropTypes.number
}

function OpacityParagraph({ text, scrollInfo, baseOpacity, dark }) {
    const scrollReference = [scrollInfo[0], scrollInfo[1], scrollInfo[1], scrollInfo[2], scrollInfo[2], scrollInfo[3]]

    const opacityTransform = [baseOpacity, baseOpacity, 1, 1, baseOpacity, baseOpacity]
    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]

    const { scrollYProgress } = useScroll();

    //Calculate Transforms
    const opacity = useTransform(scrollYProgress, scrollReference, opacityTransform)
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'inline', 'none'])

    if (dark) {
        return (
            <>
                {text.map(string =>
                    <motion.div key={string} style={{ opacity: opacity, display: visible }}>
                        <ArticleBodyWhite>
                            {string}
                        </ArticleBodyWhite>
                    </motion.div>
                )}
            </>
        )
    } else {
        return (
            <>
                {text.map(string =>
                    <motion.div key={string} style={{ opacity: opacity, display: visible }}>
                        <ArticleBodyBlack>
                            {string}
                        </ArticleBodyBlack>
                    </motion.div>
                )}
            </>
        )
    }
}

OpacityParagraph.defaultProps = {
    baseOpacity: 0.15,
    dark: true,
}

OpacityParagraph.propTypes = {
    child: PropTypes.any,
    scrollInfo: PropTypes.arrayOf(PropTypes.number).isRequired,
    baseOpacity: PropTypes.number,
    dark: PropTypes.bool,
}