import PropTypes from "prop-types"
import { useRef } from 'react';
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion"
export { ScrollingMovie }

function ScrollingMovie({ position, movieSrc, displayWidth, scrollInfo }) {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll()

    const cTime = useTransform(scrollYProgress, scrollInfo, [0, 1])
    useMotionValueEvent(cTime, "change", latest => {
        if (ref.current.readyState) {
            ref.current.currentTime = latest * ref.current.duration
        }
    })

    return (
        <video muted={true} playsInline={true} preload={"true"} loop={true}
            ref={ref}
            src={movieSrc}
            style={{
                position: "fixed",
                top: position[0],
                left: position[1],
                width: displayWidth,
                height: "auto",
            }} />
    )
}

ScrollingMovie.propTypes = {
    position: PropTypes.array.isRequired,
    movieSrc: PropTypes.string.isRequired,
    scrollInfo: PropTypes.array.isRequired, // [ scrollStart, scrollDuration ]
    displayWidth: PropTypes.number,
}