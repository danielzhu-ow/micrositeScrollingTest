import PropTypes from "prop-types"
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion"

export { AnchoredTransformingContent }

function AnchoredTransformingContent({ child, positions, scrollInfo, center}) { //Left Top alignment only for now

    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]
    const { scrollYProgress } = useScroll();

    const x = useTransform(scrollYProgress, scrollInfo, positions[0])
    const y = useTransform(scrollYProgress, scrollInfo, positions[1])
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'block', 'none'])

    const tX = useMotionTemplate`${x}%`
    const tY = useMotionTemplate`${y}%`

    return (
        <div style={{ maxWidth: '75rem', height: '80vh', padding: 'auto 3.2rem auto 3.2rem', height: 'fit-content', position: 'relative', margin: '2rem auto 2rem auto' }}>
            <motion.div style={{
                position: "absolute",
                top: tY,
                left: tX,
                transform: `translate(-${center[0]}%, -${center[1]}%`,
                display: visible,
                width: 'auto',
                height: 'auto'
            }}>
                {child}
            </motion.div>
        </div>
    )
}

AnchoredTransformingContent.defaultProps = {
    center: [50, 50]
}

AnchoredTransformingContent.propTypes = {
    child: PropTypes.any,
    positions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    scrollInfo: PropTypes.arrayOf(PropTypes.number).isRequired,
    center: PropTypes.arrayOf(PropTypes.number),
}