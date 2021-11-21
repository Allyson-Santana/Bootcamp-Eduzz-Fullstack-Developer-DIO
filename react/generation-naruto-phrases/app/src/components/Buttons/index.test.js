import { render, screen } from '@testing-library/react';
import { Buttons } from './index';


test("renders button with test", () => {
    
    render(<Buttons>Test</Buttons>);

    const buttonEl = screen.getByTest('Test');

    expect(buttonEl).toBeInTheDocument();

});