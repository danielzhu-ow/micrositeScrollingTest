import { styled } from 'styled-components';
import { sizes } from './constants/devices';

const SectionTitle = styled.p`
font-family: 'Noe Display';
    font-size: 6rem;
    margin: 0;
    color: white;

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 3.2rem;
    }
`;

const SectionBody = styled.p`
    font-size: 2rem;
    color: white;

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 1.6rem;
    }
`;

export { SectionTitle, SectionBody };