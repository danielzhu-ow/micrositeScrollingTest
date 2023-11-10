import PropTypes from "prop-types"
import { useTransform, useScroll, motion } from "framer-motion";
export { ColumnImage }

function ColumnImage({ scrollInfo, child, baseOpacity, backY }) {
    let opacityTransform = [baseOpacity, 1, 1, baseOpacity]
    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, scrollInfo, opacityTransform)
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'inline', 'none'])

    return (
        <motion.div style={{
            opacity: opacity,
            display: visible,
            margin: 'auto',
            top: 0,
            marginLeft: '50%',
            transform: 'translate( -50%, -' + backY + '%)',
            textAlign: 'center'
        }}>
            {child}
        </motion.div>
    )
}

ColumnImage.defaultProps = {
    baseOpacity: 0,
    backY: 0
}

ColumnImage.propTypes = {
    scrollInfo: PropTypes.arrayOf(PropTypes.number),
    child: PropTypes.any,
    baseOpacity: PropTypes.number,
    backY: PropTypes.number,
}