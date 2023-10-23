import PropTypes from "prop-types"
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useMotionValueEvent } from "framer-motion"

export { TransformingContent, ImgBox, BackgroundImgBox }

function TransformingContent({ child, positions, scrollInfo, alignment }) {

    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length-1], 1]
    const { scrollYProgress } = useScroll();

    const x = useTransform(scrollYProgress, scrollInfo, positions[0])
    const y = useTransform(scrollYProgress, scrollInfo, positions[1])
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'inline', 'none'] )

    const tX = useMotionTemplate`${x}vw`
    const tY = useMotionTemplate`${y}vh`

    if (alignment[0] === 'left' && alignment[1] === 'top') {
        return (
            <motion.div style={{
                position: "fixed",
                top: tY,
                left: tX,
                display: visible
            }}>
                {child}
            </motion.div>
        )
    } else if (alignment[0] === 'left' && alignment[1] === 'bottom') {
        return (
            <motion.div style={{
                position: "fixed",
                bottom: tY,
                left: tX,
                display: visible
            }}>
                {child}
            </motion.div>
        )
    } else if (alignment[0] === 'right' && alignment[1] === 'top') {
        return (
            <motion.div style={{
                position: "fixed",
                top: tY,
                right: tX,
                display: visible
            }}>
                {child}
            </motion.div>
        )
    } else {
        return (
            <motion.div style={{
                position: "fixed",
                bottom: tY,
                right: tX,
                display: visible
            }}>
                {child}
            </motion.div>
        )
    }
}

TransformingContent.propTypes = {
    child: PropTypes.any,
    positions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    scrollInfo: PropTypes.arrayOf(PropTypes.number).isRequired,
    alignment: PropTypes.arrayOf(PropTypes.string).isRequired, // Top-Left = tl,
}

function ImgBox({ url, displayDimensions, rotate, prioritizeHeight }) {
    const wider = useMotionValue(window.innerWidth / window.innerHeight > 1)

    return (
        <>
            {wider || prioritizeHeight ?
                <img src={url} alt={url}
                    style={{
                        transform: "rotate(" + rotate + "deg)",
                        width: displayDimensions[0] + "vw",
                        height: "auto",
                    }} /> :
                <img src={url} alt={url}
                    style={{
                        transform: "rotate(" + rotate + "deg)",
                        height: displayDimensions[1] + "vh",
                        width: "auto",
                    }} />}
        </>
    )
}

ImgBox.defaultProps = {
    rotate: 0,
    prioritizeHeight: false
}

ImgBox.propTypes = {
    url: PropTypes.string,
    displayDimensions: PropTypes.arrayOf(PropTypes.number).isRequired,
    rotate: PropTypes.number,
    prioritizeHeight: PropTypes.bool
}

function BackgroundImgBox({ url, displayDimensions, rotate }) {
    const wider = useMotionValue(window.innerWidth / window.innerHeight > 1)

    return (
        <>
            {wider ?
                <img src={url} alt={url}
                    style={{
                        transform: "rotate(" + rotate + "deg)",
                        width: displayDimensions[0] + "vw",
                        height: "auto",
                        opacity: "0.3",
                        zIndex: "1",
                    }} /> :
                <img src={url} alt={url}
                    style={{
                        transform: "rotate(" + rotate + "deg)",
                        height: displayDimensions[1] + "vh",
                        width: "auto",
                        opacity: "0.3",
                        zIndex: "1",
                    }} />}
        </>
    )
}