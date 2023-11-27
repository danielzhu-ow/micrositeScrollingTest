import { useScroll, useTransform, motion } from "framer-motion"
import { TextContainer } from './TransformingTextBox'

export { VideoTextBox, VideoTextScroller }

function VideoTextBox({ child, scrollInfo }) {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, scrollInfo, [0, 1, 1, 0])

    return (
        <motion.div
            style={{
                backgroundColor: '#202020',
                position: 'absolute',
                width: '100%', height: '100%',
                left: 0, top: 0,
                margin: 'auto',
                opacity: opacity,
                pointerEvents: 'none',
            }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'all'}}>
                <TextContainer style={{ width: '75rem' }}>{child}</TextContainer>
            </div>
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