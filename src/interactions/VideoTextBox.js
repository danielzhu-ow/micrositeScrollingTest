import { useScroll, useTransform, motion } from "framer-motion"
import { TextContainer } from './TransformingTextBox'

export { VideoTextBox, VideoTextScroller }

function VideoTextBox({ child, scrollInfo }) {

    const betweens = inBetweens(scrollInfo.slice(1,3))
    const textScrollInfo = [scrollInfo[1]].concat(betweens).concat([scrollInfo[2]])
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, scrollInfo, [0, 1, 1, 0])
    const textOpacity = useTransform(scrollYProgress, textScrollInfo, [0, 1, 1, 0])

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
            <motion.div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'all', opacity: textOpacity}}>
                <TextContainer style={{ width: '75rem' }}>{child}</TextContainer>
            </motion.div>
        </motion.div>
    )
}

function inBetweens(info) {
    const diff = (info[1] - info[0]) / 3
    return [info[0] + diff, info[0] + 2 * diff]
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