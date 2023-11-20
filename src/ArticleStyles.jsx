import { styled } from 'styled-components';
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
    transform: translateY(-50%);
    top: 50%;

    @media only screen and (max-width: ${sizes.laptop}) {
        font-size: 5rem;
        padding-left: 3.2rem;
        padding-right: 3.2rem;
    }

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 3.2rem;
    }
`;

const ArticleBody = styled.p`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    text-align: left;
    margin: 2rem auto 2rem auto;

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 1.6rem;
    }
`;

const ArticleList = styled.li`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    text-align: left;
    margin-left: 2rem;

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 1.6rem;
    }
`;

const ArticleSubHeading = styled.h2`
    font-family: 'Noe Display Medium';
    font-weight: 500;
    font-size: 5rem;
    text-align: left;
    margin: 0 auto 2rem auto;

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 3.2rem;
    }
`

const ArticleLink = styled.a`
    text-decoration: underline;
`

const Go = styled.p`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
    font-size: 2rem;
    text-align: right;
    text-decoration: underline;
    margin-top: 6.4rem;
    line-height: 1.2rem;

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 1.6rem;
    }
`

export {  ArticleBody, ArticleSubHeading, ArticleHeader, ArticleList, ArticleLink, Go };