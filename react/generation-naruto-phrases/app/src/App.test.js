import { render, screen } from '@testing-library/react';
import { App } from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

test('renders the app, with a button a quote and a button', () => {

    render( <App /> );

    const buttonEl = screen.getByRole('button'); 
    const imageEl = screen.getByRole('img');
    const textEl = screen.findByText(/loading speaker/);

    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();

});

test('calls api on button click and update its test', () => {
    const customResponse = {
        speaker: 'custom test speaker',
        quote: 'teste quote'
      };
    
      render(<App />);
    
      server.use(
        rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
          return res(ctx.json(customResponse));
        })
      );
    
      const buttonEl = screen.getByRole('button');
    
      fireEvent.click(buttonEl);
      const quoteEl = await screen.findByText(/custom test speaker/i);
    
      expect(quoteEl).toBeInTheDocument();
});