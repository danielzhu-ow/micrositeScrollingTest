//Telescoping Text
import PropTypes from "prop-types"
import { Children } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
export { TelescopingContent, ScrollingGif, Background }

//Telescoping Content
function TelescopingContent({ child, positions, scrollInfo }) {
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })

    //Destruct Info
    let scrollStart = scrollInfo[0]
    let scrollDuration = scrollInfo[1]

    //Finding Positions
    let index = 0
    let calcTime = scrollInfo[0]
    for (let i = 0; i < scrollInfo.length - 1; i++) {
        if (calcTime <= scrollY) { scrollStart = calcTime; scrollDuration = scrollInfo[i + 1]; index = i }
        calcTime += scrollInfo[i + 1]
    }

    //Timing
    const scrollTiming = (scrollY - scrollStart) / scrollDuration
    let inScope = true
    if (scrollTiming < 0 || scrollTiming > 1) { inScope = false }

    let startPosition = positions[index]
    let endPosition = positions[index + 1]
    const x = startPosition[0] + scrollTiming * (endPosition[0] - startPosition[0])
    const y = startPosition[1] + scrollTiming * (endPosition[1] - startPosition[1])

    if (inScope) {
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
}

TelescopingContent.propTypes = {
    child: PropTypes.any.isRequired,
    positions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired, // [[x,y],[x.y]...]
    scrollInfo: PropTypes.arrayOf(PropTypes.number).isRequired, // [scrollStart, scrollDuration, scrollDuration, scrollDuration]
    scrollForward: PropTypes.bool
}

//Scrolling GIF
function ScrollingGif({ position, spriteSrc, imgDimension, frames, imgPerRow, displayWidth, scrollInfo, scrollProgress }) {
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
    let frame = Math.floor((scrollProgress - scrollStart) / scrollDuration * frames)
    let x = frame % imgPerRow * imgWidth
    let y = Math.floor(frame / imgPerRow) * imgHeight

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

function Background({ children, backgrounds, softTransitions, scrollInfo, scrollProgress }) {
    //Create List
    let bgList = []
    let fromTop = 0
    let opacityDiff = 0
    for (let i = 0; i < scrollInfo.length; i++) {

        if (backgrounds[i][0] === "#") {
            bgList.push(
                <div style={{
                    key: backgrounds[i],
                    backgroundColor: backgrounds[i],
                    height: scrollInfo[i] * 100 + "%",
                    width: "100%",
                    zIndex: 1,
                }}></div>
            )
        } else {
            bgList.push(
                <div style={{
                    key: backgrounds[i],
                    backgroundImage: "url(" + backgrounds[i] + ")",
                    backgroundSize: "100% 100%",
                    backgroundAttachment: "fixed",
                    height: scrollInfo[i] * 100 + "%",
                    width: "100%",
                    zIndex: 1,
                }}></div>
            )
        }

        if (softTransitions[i] > 0) {
            const diff = Math.max(Math.min(1 - (fromTop - scrollProgress) / softTransitions[i], 1.0), 0.0)
            if (diff !== 0 && diff !== 1) {
                opacityDiff = -0.5 * Math.cos(diff * Math.PI) + 0.5
            }
        }

        fromTop += scrollInfo[i]
    }

    // let opacity = opacityDiff
    return (
        <>
            {bgList}
            <div style={{
                key: "transition",
                backgroundColor: "#202020",
                height: "100%",
                width: "100%",
                opacity: 0, //opacity,
                position: "fixed",
                zIndex: 3,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }} />
            {children}
        </>
    )
}