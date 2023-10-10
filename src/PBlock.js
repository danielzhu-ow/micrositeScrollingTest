import React from 'react';
import { styled } from 'styled-components';
// import STRINGS from './constants/strings';
import { motion, useScroll, useTransform, cubicBezier } from 'framer-motion';
import { sizes } from './constants/devices.js';

const PBlockContainer = styled.section`
    min-height: 250vh;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: -1;
`;

const PBlockBackground = styled.div`
gap: ${props => props.$isTablet && '2.4em'};
    background-image: url(${props => props.$backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
    max-height: 120vh;
    /* height: 100%; */
    width: 100%;
`;

const PBlockOverlay = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    background-color: black;
    position: absolute;
`;

const PBlockContentWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PBlockContent = styled(motion.h2)`
    font-family: 'Noe Display';
    font-weight: 500;
    font-size: 4rem;
    text-align: center;
    max-width: 55%;
    color: white;

    @media only screen and (max-width: ${sizes.tablet}) {
        font-size: 3.2rem;
    }
`;

const ParagraphBlock = ({ backgroundImage, contentString }) => {
    const { scrollYProgress } = useScroll();

    return (
        <PBlockContainer>
            <PBlockBackground $backgroundImage={backgroundImage} />
            <PBlockOverlay 
                style={{ opacity: scrollYProgress }}
            />
            <PBlockContentWrapper>

                <PBlockContent
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                        duration: 1, 
                        delay: scrollYProgress * 0.6,
                        ease: cubicBezier(0.3,0,0.1,1)
                    }}
                    variants={{
                        visible: { opacity: 1, marginBottom: 0 },
                        hidden: { opacity: 0, marginBottom: '-200px' }
                    }}
                >
                    {contentString}
                </PBlockContent>
            </PBlockContentWrapper>
        </PBlockContainer>
    );
};

export default ParagraphBlock;