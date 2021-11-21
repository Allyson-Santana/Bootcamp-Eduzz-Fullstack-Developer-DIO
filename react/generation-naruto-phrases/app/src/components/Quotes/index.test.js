import { render, screen, fireEvent } from '@testing-library/react';
import Quotes from './index';

const quote = 'text Quote';
const speaker = 'random speaker';

test('Renders received quote, speacker and a button ', () => {
   
    render( <Quotes quote={quote} speaker={speaker} onUpdate={callback} /> );

    const quoteEl = screen.getByText(quote);
    const speakerEl = screen.getByText(speaker);
    const buttonEl = screen.getByRole('button');

    expect(quoteEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();

});

test('Calls a callback when button is pressed', () => {
    
    const callback = jest.fn();

    render( <Quotes quote={quote} speaker={speaker} /> );

    const  buttonEL = screen.getByRole('button');

    fireEvent.click(buttonEL);

    expect(callback).toHaveBeenCalledTimes(1);

});


