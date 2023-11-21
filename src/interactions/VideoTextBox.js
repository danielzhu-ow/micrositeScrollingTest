import { useEffect, useState } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import { TextContainer } from './TransformingTextBox'

export { VideoTextBox, VideoTextScroller }

function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}

function VideoTextBox({ child, scrollInfo, displayWidth, heightRatio }) {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, scrollInfo, [0, 1, 1, 0])
    const [width, setWidth] = useState(Math.min(displayWidth * heightRatio / 100.0 * window.innerWidth, 85.0 * window.innerHeight / 100.0) / heightRatio)

    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setWidth(Math.min(displayWidth * heightRatio / 100.0 * window.innerWidth, 85.0 * window.innerHeight / 100.0) / heightRatio)
        }, 1000)

        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)

        }
    })

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

                maxWidth: width,
                height: `${displayWidth * heightRatio}vw`,
                maxHeight: '85vh',
                opacity: opacity
            }}>
            <TextContainer style={{ width: '75rem' }}>{child}</TextContainer>
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