import PropTypes from "prop-types"
import { motion, useScroll, useTransform } from "framer-motion"

export { TransformingContent }

function TransformingContent({ child, positions, scrollInfo }) {
    const { scrollYProgress } = useScroll();

    const x = useTransform(scrollYProgress, scrollInfo, positions[0])
    const y = useTransform(scrollYProgress, scrollInfo, positions[1])

    return (
        <motion.div style={{
            position: "fixed",
            top: y,
            left: x,
        }}>
            {child}
        </motion.div>
    )
}

TransformingContent.propTypes = {
    child: PropTypes.any,
    positions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    scrollInfo: PropTypes.arrayOf(PropTypes.number),
}