import { useScroll, useTransform, motion } from "framer-motion"
import { TextContainer } from './TransformingTextBox'

export { VideoTextBox, VideoTextScroller }

function VideoTextBox({ child, scrollInfo, displayWidth, heightRatio }) {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, scrollInfo, [0, 1, 1, 0])

    return (
        <motion.div
            style={{
                boxShadow: '0px 0px 0px 2px black inset',
                borderRadius: '4rem',
                overflow: 'hidden',
                margin: 'auto',
                backgroundColor: '#202020',
                position: 'relative',

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                width: `${displayWidth}vw`,
                height: `${displayWidth * heightRatio}vw`,
                opacity: opacity
            }}>
            <TextContainer style={{width: '75rem'}}>{child}</TextContainer>
        </motion.div>
    )
}

function VideoTextScroller({ scrollInfo, scrollToFrom, children }) {
    const { scrollYProgress } = useScroll();
    const scrolling = useTransform(scrollYProgress, scrollInfo, scrollToFrom)

    return (
        <motion.div style={{
            translateY: scrolling
        }}>
            {children}
        </motion.div>
    )
}