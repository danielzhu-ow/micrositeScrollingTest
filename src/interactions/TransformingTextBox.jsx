import PropTypes from "prop-types"
import { sizes } from "../constants/devices"
import MediaQuery from "react-responsive"
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion"

export { TransformingTextBox }

function TransformingTextBox({ child, positions, scrollInfo, alignment }) {
    const { scrollYProgress } = useScroll();

    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]
    const y = useTransform(scrollYProgress, scrollInfo, positions) //[-34, 29, 29, 126]
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'block', 'none'])
    const tY = useMotionTemplate`${y}vh`

    if (alignment === 'top') {
        return (
            <motion.div style={{
                position: "fixed",
                display: visible,
                top: tY,
                width: "100%",
            }}>
                <div style={{ position: "relative", textAlign: "center" }}>
                    {child}
                </div>
            </motion.div>
        )
    } else if (alignment === 'bottom') {
        return (
            <motion.div style={{
                position: "fixed",
                display: visible,
                width: "100%",
                bottom: tY,
            }}>
                <div style={{ position: "relative", textAlign: "center" }}>
                    {child}
                </div>
            </motion.div>
        )
    } else if (alignment === 'center') {
        return (
            <motion.div style={{
                position: "fixed",
                display: visible,
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
            }}>
                <div style={{ position: "relative", textAlign: "center" }}>
                    {child}
                </div>
            </motion.div>
        )
    }
}

TransformingTextBox.propTypes = {
    child: PropTypes.any,
    positions: PropTypes.arrayOf(PropTypes.number),
    scrollInfo: PropTypes.arrayOf(PropTypes.number),
    alignment: PropTypes.string
}