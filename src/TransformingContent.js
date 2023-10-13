import PropTypes from "prop-types"
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion"

export { TransformingContent }

function TransformingContent({ child, positions, scrollInfo }) {
    const { scrollYProgress } = useScroll();

    //useMotionValueEvent(scrollYProgress, "change", (latest) => { console.log("Section scroll: ", latest) })

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