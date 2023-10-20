import PropTypes from "prop-types"
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useMotionValueEvent } from "framer-motion"

export { OpacityContent }

function OpacityContent({ child, scrollInfo }) {
    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length-1], 1]
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, scrollInfo, [0.2, 1, 1, 0.2])
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'inline', 'none'])
    // useMotionValueEvent(visible, 'change', latest => console.log(latest))

    return (
        <motion.div style={{
            position: "fixed",
            opacity: opacity,
            display: visible
        }}>
            { child }
        </motion.div>
    )
}