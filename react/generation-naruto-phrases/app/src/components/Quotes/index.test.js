import { render, screen } from '@testing-library/react';
import Quotes from './index';

const quote = 'text Quote';
const speaker = 'random speaker';

test('Renders received quote, speacker and a button ', () => {
   
    render( <Quotes quote={quote} speaker={speaker} /> );

    const quoteEl = screen.getByText(quote);
    const speakerEl = screen.getByText(speaker);
    const buttonEl = screen.getByRole('button');

    expect(quoteEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();

})



