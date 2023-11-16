import PropTypes from "prop-types"
import { motion, useScroll, useTransform } from "framer-motion"
import { SectionTitle, SectionBody } from "../ArticleSectionHeader";

function FadingSectionHeader({ text, scrollInfo }) {
    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, scrollInfo, [0.1, 1, 1, 0.1])
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'block', 'none'])

    let content =
        <div style={{ maxWidth: '79rem', paddingLeft: '3.2rem', paddingRight: '3.2rem', margin: 'auto'}}>
            <SectionTitle>
                {text.title_label}:
            </SectionTitle>
            <SectionTitle>
                {text.title}
            </SectionTitle>
            {
                text.body.map(para =>
                    <SectionBody key={para}>
                        {para}
                    </SectionBody>
                )
            }
        </div >


    return (
        <motion.div style={{
            position: "fixed",
            width: "100%",
            height: "fit-content",
            top: "50%",
            transform: "translateY(-50%)",
            opacity: opacity,
            display: visible
        }}>
            {content}
        </motion.div>
    )
}

FadingSectionHeader.propTypes = {
    text: PropTypes.object.isRequired,
    scrollInfo: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export { FadingSectionHeader }