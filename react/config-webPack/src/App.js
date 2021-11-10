import React from 'react';
import Card from './Card';

const button = <button>Primeiro botton</button>;
const button2 = <button>Segundo button</button>;


function App()
{
    return(
        <div className="main">
            Hello World
            {button}
            {button2}
        </div>
    );
}