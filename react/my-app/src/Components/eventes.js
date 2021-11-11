import React from 'react';

const showEvent = (e) => {
    console.log('Evento Clicando');
    console.log(e);
}

const btn = <button onClick={showEvent}>Mostrar Evento</button>

function App()
{
    const handleChange = (e) => {
        const {value} = e.target;
        console.log(value);
    }
    return (
        <div>
            <input onChange={handleChange} />
            {btn}
        </div>
    );
}