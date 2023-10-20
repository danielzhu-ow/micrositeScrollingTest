import PropTypes from "prop-types"
import { motion, useScroll, useMotionValueEvent, useMotionValue, useTransform, useMotionTemplate } from "framer-motion"
export { ScrollingGif }

function ScrollingGif({ position, spriteSrc, imgDimension, frames, imgPerRow, displayWidth, scrollInfo }) {

    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length-1], 1]
    const sf = useMotionValue(displayWidth / imgDimension[0])

    //Image Navigation Settings
    let frameInfo = []; let xInfo = []; let yInfo = []
    for (let i = 0; i < frames; i++) {
        xInfo.push(i % imgPerRow * imgDimension[0] * sf.current);
        yInfo.push(Math.floor(i / imgPerRow) * imgDimension[1] * sf.current);
        frameInfo.push(i)
    }

    //ScrollProgress => Frame
    const { scrollYProgress } = useScroll()
    const frame = useTransform(scrollYProgress, scrollInfo, [0, frames - 1])
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'inline', 'none'] )

    //Frame => Raw X/Y Values
    const x = useTransform(frame, frameInfo, xInfo)
    const y = useTransform(frame, frameInfo, yInfo)

    //Raw X/Y Values => X/Y px
    const tX = useMotionTemplate`-${Math.floor(x.current / (imgDimension[0] * sf.current)) * imgDimension[0] * sf.current}px`
    const tY = useMotionTemplate`-${Math.floor(y.current / (imgDimension[1] * sf.current)) * imgDimension[1] * sf.current}px`

    //Update Values
    useMotionValueEvent(x, "change", latest => { tX.set(`-${Math.floor(x.current / (imgDimension[0] * sf.current)) * imgDimension[0] * sf.current}px`) })
    useMotionValueEvent(y, "change", latest => { tY.set(`-${Math.floor(y.current / (imgDimension[1] * sf.current)) * imgDimension[1] * sf.current}px`) })

    return (
        <motion.div style={{
            position: "fixed",
            top: position[1],
            left: position[0],
            width: imgDimension[0] * sf.current,
            height: imgDimension[1] * sf.current,
            overflow: "hidden",
            display: visible,
        }}>
            <div style={{ width: "100%", height: "100%", position: "relative" }}>
                <motion.div
                    style={{
                        position: "absolute",
                        width: imgDimension[0] * xInfo.length * sf.current,
                        height: imgDimension[1] * yInfo.length * sf.current,
                        backgroundRepeat: "no-repeat",
                        backgroundImage: "url(" + spriteSrc + ")",
                        backgroundSize: imgDimension[0] * imgPerRow * sf.current + "px auto",
                        top: tY,
                        left: tX,
                    }}
                />
            </div>
        </motion.div>
    )
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