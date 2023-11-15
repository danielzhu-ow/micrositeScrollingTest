import PropTypes from "prop-types"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from 'react'
export { Background, TransitionBackground }

function Background({ background, height }) {
    return (
        <>
            {typeof background === 'string' && background.charAt(0) === '#' ?
                <div style={{
                    // position: "absolute",
                    backgroundColor: background,
                    height: height + "vh",
                    width: "100%",
                    zIndex: 1,
                }}></div> :
                <div style={{
                    // position: "absolute",
                    backgroundImage: "url(" + background + ")",
                    backgroundSize: "100% 100%",
                    backgroundAttachment: "fixed",
                    height: height + "vh",
                    width: "100%",
                    zIndex: 1,
                }}></div>
            }
        </>
    )
}

Background.propTypes = {
    background: PropTypes.any,
    height: PropTypes.number.isRequired,
}

function TransitionBackground({ background, height, startHeight, endOpacity, preserveRatio, delayed }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const opacity = useTransform(scrollYProgress, [0, delayed[0], delayed[1], 1], [0, 0, endOpacity, endOpacity])

    return (
        <>
            {typeof background === 'string' && background.charAt(0) === '#' ?
                <div ref={ref} style={{
                    backgroundColor: background,
                    pointerEvents: "none",
                    height: height + "vh",
                    width: "100%",
                }} />
                :
                preserveRatio ?
                    <div ref={ref} style={{
                        backgroundImage: "url(" + background + ")",
                        pointerEvents: "none",
                        backgroundSize: 'cover',
                        backgroundAttachment: "fixed",
                        height: height + "vh",
                        width: "100%",
                    }}></div>
                    :
                    <div ref={ref} style={{
                        backgroundImage: "url(" + background + ")",
                        pointerEvents: "none",
                        backgroundSize: "100% 100%",
                        backgroundAttachment: "fixed",
                        height: height + "vh",
                        width: "100%",
                    }}></div>
            }
            <motion.div style={{
                backgroundColor: "#202020",
                pointerEvents: "none",
                height: height + "vh",
                width: "100%",
                opacity: opacity,
                position: "absolute",
                top: startHeight + "vh",
            }} />
        </>
    )
}

TransitionBackground.defaultProps = {
    startTransition: 0.5,
    endOpacity: 1,
    preserveRatio: false,
    delayed: [0, 0.5],
}

TransitionBackground.propTypes = {
    background: PropTypes.any,
    height: PropTypes.number.isRequired,
    startTransition: PropTypes.number,
    startHeight: PropTypes.number.isRequired,
    endOpacity: PropTypes.number,
    scrollInfo: PropTypes.arrayOf(PropTypes.number),
    preserveRatio: PropTypes.bool,
    delayed: PropTypes.arrayOf(PropTypes.number),
}