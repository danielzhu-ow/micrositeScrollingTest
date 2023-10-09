//Telescoping Text
import PropTypes from "prop-types"
export { TelescopingContent, ScrollingGif }

//Telescoping Content
function TelescopingContent({ child, position, dimensions, scrollInfo, scrollProgress, scrollForward }) {
    //Destruct Info
    const scrollStart = scrollInfo[0]
    const scrollDuration = scrollInfo[1]

    const scrollTiming = (100 * scrollProgress - 100 * scrollStart) / 100 * scrollDuration
    let inScope = true
    if (scrollTiming < 0 || scrollTiming > 1) { inScope = false }

    let sCalc = 1 + scrollTiming
    if (scrollForward) { sCalc = 1 - scrollTiming }
    console.log(sCalc)

    const width = dimensions[0] * sCalc
    const height = dimensions[1] * sCalc
    const x = position[0] * sCalc
    const y = position[1] * sCalc

    if (inScope) {
        return (
            <div style={{
                position: "fixed",
                top: window.innerHeight / 2 - height / 2 + y,
                left: window.innerWidth / 2 - width / 2 + x,
                //width: width,
                //height: height,
            }}>
                {child}
            </div>
        )
    } else {
        return (<></>)
    }
}

TelescopingContent.defaultTypes = {
    position: [window.innerWidth / 2, window.innerHeight / 2],
    scrollDirection: true
}

TelescopingContent.propTypes = {
    child: PropTypes.any.isRequired,
    position: PropTypes.array.isRequired, // [ x, y ]
    dimensions: PropTypes.array.isRequired, // [ wdith, height ]
    scrollInfo: PropTypes.array.isRequired, // [ scrollStart, scrollDuration ]
    scrollProgress: PropTypes.number.isRequired,
    scrollForward: PropTypes.bool
}

//Scrolling GIF
export default function ScrollingGif({ position, spriteSrc, imgDimension, frames, imgPerRow, displayWidth, scrollInfo, scrollProgress }) {
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
    scrollProgress: PropTypes.number.isRequired,
    scrollInfo: PropTypes.array.isRequired, //  [ scrollStart, scrollDuration ]
    displayWidth: PropTypes.number,
    imgPerRow: PropTypes.number
}