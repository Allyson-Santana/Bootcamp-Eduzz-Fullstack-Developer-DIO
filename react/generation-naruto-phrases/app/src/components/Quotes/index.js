
import styled from 'styled-components';
import { string, func } from 'prop-types';
import { Buttons } from '../index';

export const Quotes = ({ quote, speaker, onUpdate }) => {
    return(
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>- {speaker}</Speaker>        
            <Buttons onCLick={onUpdate} >Quote No Jutsu</Buttons>
        </Wrapper>
    );
}

Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func
};

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    aligh-Items: center;
`;

const Quote = styled.p`
    font-size: 1.5em;
    margin: 0;
    padding: 20px;
`;

const Speaker = styled(Quote)`
    text-align: right;
    margin-botton: 50px;
`;