import React, {useRef} from 'react';
import { styled } from 'styled-components';
import { motion, useScroll, cubicBezier } from 'framer-motion';
import TypeIt from "typeit-react";
import useOnScreen from '../useOnScreenHook';
import { sizes } from '../constants/devices.js';


const TextImageBlockContainer = styled.section`
    background-image: url(${props => props.$gradient});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    max-width: 1440px;
    padding: 10rem 6rem;
    /* margin: auto;   */

    @media only screen and (max-width: ${sizes.laptop}) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (max-width: ${sizes.tablet}) {
        padding: 8.6rem 3.2rem;
    }
`;

const TextImageBlockHeader = styled(motion.h1)`
    font-family: 'Noe Display';
    font-weight: 500;
    font-size: clamp(4rem, 5vw, 5rem);
    width: 50%;
    margin: 0;
    text-align: left;

    @media only screen and (max-width: 1024px) {
        width: 100%;
        text-align: center;
    }
`;

const TextImage = styled.div`
    display: flex;
    gap: 2.8em;
    margin-top: 4rem;
    padding-left: 200px;

    @media only screen and (max-width: 1200px) {
        padding-left: 90px;
    }
    @media only screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 0px;
        gap: 5rem;
    }
    @media only screen and (max-width: ${sizes.tablet}) {
        gap: 3.2rem;
    }

`;

const TextImageBlockImg = styled(motion.img)`
    max-width: clamp(325px, 60%, 625px);
    height: 100%;
    border-radius: 16px;
    border: 2px solid black;

    @media only screen and (max-width: 1024px) {
        max-width: 100%;
    }
`;

const TextImageBlockContent = styled(motion.p)`
    font-family: Noto Sans;
    font-size: 2rem;
    max-width: 30%;
    margin: 0;
    margin-top: 16%;
    text-align: left;

    @media only screen and (max-width: 1024px) {
        font-family: Noto Sans;
        font-size: 2rem;
        max-width: 100%;
        margin: 0;
    }
`;

const TextImageBlock = ({ gradient, image, header, content}) => {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);
    const { scrollYProgress } = useScroll();

    return (
        <TextImageBlockContainer $gradient={gradient}>
            <Wrapper>
                <TextImageBlockHeader ref={ref}>
                    { isVisible &&
                        <TypeIt
                            options={{
                                strings: [header],
                                speed: 35,
                                waitUntilVisible: true,
                                lifeLike: true,
                            }}
                        />
                    }

                </TextImageBlockHeader>
                <TextImage>
                    <TextImageBlockImg 
                        src={image} 
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            duration: 2.5, 
                            delay: scrollYProgress * 0.6,
                            ease: cubicBezier(0.3,0,0.1,1)
                        }}
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 }
                        }}
                    />
                    <TextImageBlockContent
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            duration: 1.3, 
                            delay: scrollYProgress * 0.6,
                            ease: cubicBezier(0.3,0,0.1,1)
                        }}
                        variants={{
                            visible: { opacity: 1, marginLeft: 0 },
                            hidden: { opacity: 0, marginLeft: '100px' }
                        }}
                    >
                        {content}
                    </TextImageBlockContent>
                </TextImage>
            </Wrapper>

        </TextImageBlockContainer>
    );
};

export default TextImageBlock;