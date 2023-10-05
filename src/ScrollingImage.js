//Scrolling Image Functional Component
import PropTypes from "prop-types"

export default function ScrollingImage({ pos, spriteSrc, imgWidth, imgHeight, frames, scrollProgress, imgPerRow, displayWidth, scrollStart, scrollDuration }) {
    //Adjusting Image Size
    if ( displayWidth === undefined ) { displayWidth = imgWidth }
    else {
      console.log('input display width')
      const scaleFactor = displayWidth/imgWidth
      imgWidth = Math.floor(displayWidth)
      imgHeight = Math.floor(imgHeight * scaleFactor)
    }
  
    //Frame Calculation and Position
    let frame = Math.floor((scrollProgress - scrollStart) / scrollDuration * frames)
    let x = frame % imgPerRow * imgWidth
    let y = Math.floor(frame / imgPerRow) * imgHeight
  
    //Whether or not to display
    let inFrame = false;
    if (frame >= 0 && frame < frames) { inFrame = true}
  
    if (inFrame) {
      return (
        <div alt="Sprite"
          style={{
            position: "fixed",
            top: pos[1],
            left: pos[0],
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
  
  ScrollingImage.defaultProps = {
    imgPerRow: 5,
    scrollStart: 0,
    scrollDuration: 1
  }
  
  ScrollingImage.propTypes = {
    pos: PropTypes.array,
    spriteSrc: PropTypes.string.isRequired,
    imgWidth: PropTypes.number.isRequired,
    imgHeight: PropTypes.number.isRequired,
    frames: PropTypes.number.isRequired,
    scrollProgress: PropTypes.number.isRequired,
    scrollStart: PropTypes.number.isRequired,
    scrollDuration: PropTypes.number.isRequired,
    displayWidth: PropTypes.number,
    imgPerRow: PropTypes.number
  }