import React from 'react';
import { useEffect } from 'react';
import { styled } from 'styled-components';
// import STRINGS from './constants/strings';
import { motion, useScroll, useTransform, cubicBezier } from 'framer-motion';
import { sizes } from './constants/devices.js';

const ArticleHeader = styled.p`
    position: fixed;
    font-family: 'Noe Display Medium';
    font-weight: 500;
    font-size: 5rem;
    text-align: center;
    color: white;

    padding-left: 32rem;
    padding-right: 32rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 4;

    @media only screen and (max-width: ${sizes.laptop}) {
        font-size: 3.2rem;
        padding-left: 10rem;
        padding-right: 10rem;
    }

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 3.2em;
        padding-left: 3.2rem;
        padding-right: 3.2rem;
    }
`;

const ArticleBody = styled.p`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    text-align: left;

    max-width: 750px;
    margin: 2rem auto 2rem auto;
    padding-left: 34rem;
    padding-right: 34rem;

    @media only screen and (max-width: ${sizes.laptop}) {
        font-size: 1.6rem;
        padding-left: 10rem;
        padding-right: 10rem;
    }

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 1.6rem;
        padding-left: 3.2rem;
        padding-right: 3.2rem;
    }
`;

const ArticleSubHeading = styled.h2`
    font-family: 'Noe Display Medium';
    font-weight: 500;
    font-size: 5rem;
    text-align: left;

    max-width: 750px;
    margin: 0 auto 2rem auto;
    padding-left: 34rem;
    padding-right: 34rem;

    @media only screen and (max-width: ${sizes.laptop}) {
        font-size: 3.2rem;
        padding-left: 10rem;
        padding-right: 10rem;
    }

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 3.2rem;
        padding-left: 3.2rem;
        padding-right: 3.2rem;
    }
`

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

const ArticleBodyParagraghsBlock = ({ contentStrings, scrollTimings }) => {
    return (
        contentStrings.map(strings =>
            <ArticleBodyBlock contentStrings={strings} scrollInfo={scrollTimings[0]} />
            // <ArticleBodyBlock contentStrings={strings} />
        )
    )
}

export { ArticleHeaderBlock, ArticleBodyBlock, ArticleBodyParagraghsBlock, ArticleBody, ArticleSubHeading, ArticleHeader };