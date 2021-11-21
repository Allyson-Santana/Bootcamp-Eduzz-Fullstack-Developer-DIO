import { string } from 'prop-types';
import styled from 'styled-components';

export const Buttons = ({ onCLick, children }) => {
    return (
        <DivButton>
            <Button onClick={onCLick}> {children} </Button>
        </DivButton>
    ) ;
}

Buttons.propTypes = {
    children: string
}

const Button = styled.button`
    background: #DC872C;
    color: #fff;
    border: none;
    border-radius: 0;
    font-size: 1.5em;
    padding: 15px 20px;
    font-family: 'New Tegomin', serif;
    cursor: pointer;
    box-shadow: #333 3px 3px;    
    width: 250px;

    &:hover {
        background: #A40000;
    }
`;

const DivButton = styled.div`
    display: flex;
    justify-content: center;
`;