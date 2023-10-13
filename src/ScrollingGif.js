import PropTypes from "prop-types"
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion"

export { ScrollingGif }

function ScrollingGif({ position, spriteSrc, imgDimension, frames, imgPerRow, displayWidth, scrollInfo, scrollProgress }) {
    const { scrollYProgress } = useScroll();
    const frame = useTransform(scrollYProgress, scrollInfo, [0, frames - 1])
    const x = useTransform(frame, [0, frames - 1], )

    //Adjusting Image Size
    let imgWidth = imgDimension[0]
    let imgHeight = imgDimension[1]

    const scrollStart = scrollInfo[0]
    const scrollDuration = scrollInfo[1]

    if (displayWidth === undefined) { displayWidth = imgWidth }
    else {
        const scaleFactor = displayWidth / imgWidth
        imgWidth = Math.floor(displayWidth)
        imgHeight = Math.floor(imgHeight * scaleFactor)
    }

    //Frame Calculation and Position
    // let frame = Math.floor((scrollProgress - scrollStart) / scrollDuration * frames)
    // let x = frame % imgPerRow * imgWidth
    // let y = Math.floor(frame / imgPerRow) * imgHeight

    //Whether or not to display
    let inFrame = false;
    if (frame >= 0 && frame < frames) { inFrame = true }

    if (inFrame) {
        return (
            <div
                style={{
                    position: "fixed",
                    top: position[1],
                    left: position[0],
                    width: imgWidth,
                    height: imgHeight,
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(" + spriteSrc + ")",
                    backgroundPosition: '-' + x + 'px -' + y + 'px',
                    backgroundSize: displayWidth * imgPerRow + "px auto"
                }}
            />
        )
    } else {
        return <></>
    }
}

ScrollingGif.defaultProps = {
    imgPerRow: 5,
    scrollInfo: [0, 1]
}

ScrollingGif.propTypes = {
    position: PropTypes.array.isRequired,
    spriteSrc: PropTypes.string.isRequired,
    imgDimension: PropTypes.array.isRequired, // [ x, y ]
    frames: PropTypes.number.isRequired,
    scrollInfo: PropTypes.array.isRequired, //  [ scrollStart, scrollDuration ]
    displayWidth: PropTypes.number,
    imgPerRow: PropTypes.number
}