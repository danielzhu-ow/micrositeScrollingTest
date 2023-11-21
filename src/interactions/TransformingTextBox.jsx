import PropTypes from "prop-types"
// import { sizes } from "../constants/devices"
import styled from "styled-components"
// import MediaQuery from "react-responsive"
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion"

export { TransformingTextBox }

export const TextContainer = styled.div`
    position: relative;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    text-align: center;
    margin: auto;
`

function TransformingTextBox({ child, positions, scrollInfo, alignment, doubled }) {
    const { scrollYProgress } = useScroll();

    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]
    const y = useTransform(scrollYProgress, scrollInfo, positions)
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'block', 'none'])
    const tY = useMotionTemplate`${y}vh`
    let usedWidth = '75rem'
    if (doubled) { usedWidth = '100%' }

    if (alignment === 'top') {
        return (
            <motion.div style={{
                position: "fixed",
                display: visible,
                top: tY,
                width: '100%'
            }}>
                <TextContainer style={{maxWidth: usedWidth}}>
                    {child}
                </TextContainer>
            </motion.div>
        )
    } else if (alignment === 'bottom') {
        return (
            <motion.div style={{
                position: "fixed",
                display: visible,
                bottom: tY,
                width: '100%'
            }}>
                <TextContainer style={{maxWidth: usedWidth}}>
                    {child}
                </TextContainer>
            </motion.div>
        )
    } else if (alignment === 'center') {
        return (
            <motion.div style={{
                position: "fixed",
                display: visible,
                top: 0,
                left: 0,
                height: "100%",
                width: '100%'
            }}>
                <TextContainer style={{maxWidth: usedWidth}}>
                    {child}
                </TextContainer>
            </motion.div>
        )
    }
}

TransformingTextBox.defaultProps = {
    doubled: false
}

TransformingTextBox.propTypes = {
    child: PropTypes.any,
    positions: PropTypes.arrayOf(PropTypes.number),
    scrollInfo: PropTypes.arrayOf(PropTypes.number),
    alignment: PropTypes.string,
    doubled: PropTypes.bool
}