import { createGlobalStyle } from 'styled-components';
import bgImgBackground from '../../images/bg.jpeg';

export const GlobalStyles = createGlobalStyle`
    body {
        background: url(${bgImgBackground}) center no-repeat;
        background-size: cover;
        color: #332c36;
        padding: 0;
        margin: 0;
        fint-family: 'New Tegomin', serif;
    }
`;

