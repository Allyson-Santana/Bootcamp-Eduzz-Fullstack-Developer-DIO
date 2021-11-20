import React, { useContext } from "react";
import { ThemeContext} from '../createContenxt';
import Form from '../Form';

function Card () {
    const theme = useContext(ThemeContext);
    console.log(`Theme: values ${theme}`);
    return(
        <div style={{padding: 20}}>
            <Form />
            <button style={{ background: theme.background, color: theme.color }} >Card Button</button>
        </div>
    );
}

export default Card;