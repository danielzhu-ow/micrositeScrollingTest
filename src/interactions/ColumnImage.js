import PropTypes from "prop-types"
import { useTransform, useScroll, motion } from "framer-motion";
export { ColumnImage }

function ColumnImage({ scrollInfo, child, baseOpacity, backY, fadeIn, fadeOut, invisible }) {
    let fIn = baseOpacity
    let fOut = baseOpacity
    if (!fadeIn) { fIn = 1 }
    if (!fadeOut) { fOut = 1 }

    let opacityTransform = [fIn, fIn, 1, 1, fOut, fOut]
    if (invisible) { opacityTransform = [0, 0, 0, 0, 0, 0,] }

    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, scrollInfo, opacityTransform)
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'block', 'none'])

    return (
        <motion.div style={{
            opacity: opacity,
            display: visible,
            margin: 'auto',
            top: 0,
            marginLeft: '50%',
            transform: 'translate( -50%, ' + -1 * backY + '%)',
            textAlign: 'center'
        }}>
            {child}
        </motion.div>
    )
}

ColumnImage.defaultProps = {
    baseOpacity: 0,
    backY: 0,
    fadeIn: true,
    fadeOut: true,
    invisible: false
}

ColumnImage.propTypes = {
    scrollInfo: PropTypes.arrayOf(PropTypes.number),
    child: PropTypes.any,
    baseOpacity: PropTypes.number,
    backY: PropTypes.number,
    fadeIn: PropTypes.bool,
    fadeOut: PropTypes.bool,
    invisible: PropTypes.bool,
}