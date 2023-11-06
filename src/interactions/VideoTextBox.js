import { useScroll, useTransform, motion } from "framer-motion"

export { VideoTextBox, VideoTextScroller }

function VideoTextBox({ child, scrollInfo, displayWidth, heightRatio }) {
    const opacityInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, opacityInfo, [0, 1, 1, 0])

    return (
        <motion.div
            style={{
                border: '2px solid black',
                borderRadius: '4rem',
                overflow: 'hidden',
                margin: 'auto',
                backgroundColor: '#202020',

                width: `${displayWidth}vw`,
                height: `${displayWidth * heightRatio}vw`,
                opacity: opacity
            }}>
            {child}
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