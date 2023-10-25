import { styled } from 'styled-components';
import { sizes } from '../constants/devices';
import { motion, useTransform, useScroll, useMotionTemplate } from 'framer-motion';

export { ContactCard }

const CardBox = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px black solid;
    border-radius: 1rem;
    margin: 12rem auto 12rem auto;

    width: fit-content;
    height: fit-content;

    padding: 6rem;
    column-count: 2;
    column-gap: 3.2rem;

    @media only screen and (max-width: ${sizes.tablet}) {
        margin: 8rem 0 8rem 0;
        padding: 1.6rem;
        column-count: 1;
        text-align: center;
        margin: auto;
    }
`;

const ContactColumn = styled.div`
    width: 34.5rem;
    text-align: left;

    @media only screen and (max-width: ${sizes.tablet}) {
        width: 26.2rem;
        text-align: center;
    }
`;

const CardPortrait = styled.img`
    width: 28rem;
    height: auto;

    @media only screen and (max-width: ${sizes.tablet}) {
        margin: 0 0 1.6rem 0;
        width: 19rem;
    }
`;

const ContactButton = styled.button`
    margin: 0;
    width: 16rem;
    height: 6rem;

    background-color: white;
    border: 1px black solid;
    border-radius: 0.5rem;

    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
    font-size: 2rem;

    @media only screen and (max-width: ${sizes.tablet}) {
        width: 13rem;
        height: 5rem;
        font-size: 1.4rem;
    }
`;

const ContactHeader = styled.h2`
    margin: 0 0 2rem 0;
    line-height: 95%;
    font-family: 'Noe Display Medium';
    font-weight: 500;
    font-size: 5rem;

    @media only screen and (max-width: ${sizes.tablet}) {
        margin: 0 0 1.6rem 0;
        font-size: 3.2rem;
    }
`;

const ContactBody = styled.p`
    margin: 0 0 2rem 0;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    font-size: 2rem;

    @media only screen and (max-width: ${sizes.tablet}) {
        margin: 0 0 1.6rem 0;
        font-size: 1.6rem;
    }
`;

function ContactCard({ portrait, text, scrollInfo }) {
    const visibleInfo = [0, scrollInfo[0], scrollInfo[0], scrollInfo[scrollInfo.length - 1]]

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, scrollInfo, [-100, 0])
    const tX = useMotionTemplate`translateX(${x}vw)`

    const visible = useTransform(scrollYProgress, visibleInfo, [0, 0, 1, 1])

    return (
        <motion.div style={{ transform: tX, opacity: visible }}>
            <CardBox>
                <CardPortrait src={portrait} alt="portrait" />
                <ContactColumn>
                    <ContactHeader>{text.header}</ContactHeader>
                    <ContactBody>{text.body}</ContactBody>
                    <ContactButton onClick={() => window.location.href = "mailto:tom.ajello@lippincott.com"} >LET'S TALK</ContactButton>
                </ContactColumn>
            </CardBox>
        </motion.div>
    )
}