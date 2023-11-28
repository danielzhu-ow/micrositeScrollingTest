import PropTypes from "prop-types"
import { useTransform, useScroll, motion } from "framer-motion";
import { styled } from 'styled-components';
import { sizes } from '../constants/devices';

export { ExperimentNav }

const NavContainer = styled.div`
    column-count: 3;
    column-gap: 1.6rem;
    margin: 3.2rem 4rem 0.5rem 4rem;
`

const Indicator = styled.div`
    position: relative;
    width: 5.6rem;
    height: 5.6rem;
    border: 1px solid black;
    border-radius: 2.8rem;
    overflow: hidden;
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);

    @media only screen and (max-width: ${sizes.mobileL}) {
        width: 3.4rem;
        height: 3.4rem;
    }
`

const Background = styled.div`
    background-color: white;
    position: absolute;
    width: 100%;
    height: 100%;
`

const NumContainer = styled.div`
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    
    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
    font-size: 2rem;

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 1.6rem;
    }
`

const Drifter = styled.div`
    position: fixed;
    top: 0;
    right: 0;

    @media only screen and (max-width: ${sizes.mobileL}) {
        left: 50%;
        transform: translateX(-50%);
    }
`

function ExperimentNav({ heightsInfo, sectionHeights }) {

    const { scrollYProgress } = useScroll();
    const sum = sectionHeights.reduce((partialSum, a) => partialSum + a, 0)

    const infos = calculateInfos(heightsInfo, sectionHeights)
    const scrolls = heightsInfo.map((info, index) => ExperimentIndicator(info, sectionHeights, sum, index))
    const visible = useTransform(scrollYProgress, infos[0], infos[1])
    // useMotionValueEvent(visible, 'change', latest => console.log(latest))

    return (
        <Drifter>
            <motion.div style={{ display: visible }}>
                <NavContainer>
                    {scrolls}
                </NavContainer>
            </motion.div>
        </Drifter>
    )
}

ExperimentNav.defaultProps = {
    baseOpacity: 0,
    backY: 0
}

ExperimentNav.propTypes = {
    scrollInfo: PropTypes.arrayOf(PropTypes.number),
    child: PropTypes.any,
    baseOpacity: PropTypes.number,
    backY: PropTypes.number,
}

function ExperimentIndicator(heightsInfo, sectionHeights, sum, index) {

    const { scrollYProgress } = useScroll();
    const startHeight = sectionHeights.slice(0, heightsInfo[0]).reduce((partialSum, a) => partialSum + a, 0)
    const vh = window.innerHeight
    const scrollInfo = heightsInfo.map(function (height) {
        const localSum = sectionHeights.slice(0, height).reduce((partialSum, a) => partialSum + a, 0)
        return localSum / sum
    })

    const experiment = useTransform(scrollYProgress, [0, scrollInfo[0], scrollInfo[0], scrollInfo[1], scrollInfo[1], 1], [0.5, 0.5, 1, 1, 0.5, 0.5])
    return (
        <Indicator key={index} onClick={() => window.scrollTo(0, startHeight * vh / 100 - 2 * vh)}>
            <motion.div style={{ opacity: experiment }}>
                <Background />
            </motion.div>
            <NumContainer>
                {index > 9 ? index + 1 : '0' + (index + 1)}
            </NumContainer>
        </Indicator>
    )
}

function calculateInfos(heightsInfo, sectionHeights) {

    const sum = sectionHeights.reduce((partialSum, a) => partialSum + a, 0)

    let visibleInfo = []
    let visibility = ['none']
    for (let i = 0; i < heightsInfo.length; i++) { visibleInfo = visibleInfo.concat(heightsInfo[i]); visibility = visibility.concat(['none', 'block']) }
    visibleInfo = visibleInfo.map(function (t) {
        const localSum = sectionHeights.slice(0, t).reduce((partialSum, a) => partialSum + a, 0)
        return localSum / sum
    })
    visibleInfo = [0].concat(visibleInfo.concat([1])); visibility = visibility.concat(['none'])

    return [visibleInfo, visibility]
}