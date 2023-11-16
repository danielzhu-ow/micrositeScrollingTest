import { motion, useDragControls } from "framer-motion"
import styled from "styled-components"

export { Draggable }

function Draggable({ startHeight, height, windowUrl, maskUrl }) {
    const controls = useDragControls()

    const DraggableOuterContainer = styled.div`
        position: absolute;
        width: 100%;
        backgroundAttachment: fixed
    `

    const window = {
        WebkitMaskImage: `url(${maskUrl})`,
        maskImage: `url(${maskUrl})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        width: '52rem',
        height: 'auto'
    }

    return (
        <motion.div style={window} drag='y' dragControls={controls} >
            <DraggableOuterContainer style={{ top: `${startHeight}vh`, height: `${height}vh`, backgroundImage: `url(${windowUrl})` }} />
        </motion.div>
    )
}