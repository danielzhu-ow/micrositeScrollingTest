import { useScroll, useTransform, motion } from "framer-motion"
import PropTypes from 'prop-types'
export { ScrollingColumn }

function ScrollingColumn({ children, scrollInfo, scrollIn, scrollOut }) {
    const { scrollYProgress } = useScroll();

    let sIn = window.innerHeight
    let sOut = -window.innerHeight
    if (!scrollIn) { sIn = 0 }
    if (!scrollOut) { sOut = 0 }

    const scroll = useTransform(scrollYProgress, scrollInfo, [sIn, 0, sOut])

    return (
        <motion.div style={{
            translateY: scroll,
            width: '100%'
        }}>
            {children}
        </motion.div>
    )
}

ScrollingColumn.defaultProps = {
    scrollIn: true,
    scrollOut: true
}

ScrollingColumn.propTypes = {
    children: PropTypes.any.isRequired,
    scrollInfo: PropTypes.arrayOf(PropTypes.number).isRequired,
    scrollIn: PropTypes.bool,
    scrollOut: PropTypes.bool,
}