import React from 'react';
import { styled } from 'styled-components';
// import STRINGS from './constants/strings';
import { motion, useScroll, useTransform, cubicBezier } from 'framer-motion';
import { sizes } from './constants/devices.js';

const ArticleHeader = styled.p`
    position: fixed;
    font-family: 'Noe Display';
    font-weight: 500;
    font-size: 5rem;
    text-align: center;
    color: white;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: ${sizes.tablet}) {
        font-size: 3.2rem;
    }
`;

const ArticleBody = styled.p`
    position: fixed;
    font-family: 'Noto Sans';
    font-weight: 400;
    font-size: 2rem;
    text-align: left;
    color: white;
    padding-left: 5%;
    padding-right: 5%;

    left: 50%;
    transform: translate(-50%, 0%);

    @media only screen and (max-width: ${sizes.tablet}) {
        font-size: 1.6rem;
    }
`;

const ArticleHeaderBlock = ({ contentString }) => {
    return (
        <ArticleHeader>
            {contentString}
        </ArticleHeader>
    )
}

const ArticleBodyBlock = ({ contentString }) => {
    return (
        <ArticleBody>
            {contentString}
        </ArticleBody>
    )
}

export { ArticleHeaderBlock, ArticleBodyBlock };