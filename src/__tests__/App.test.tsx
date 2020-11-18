import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('app tests', () => {
  it('should render Bandwidth Web App', () => {
    const { getByText } = render(<App />);
    const element = getByText(/Bandwidth Web App/i);
    expect(element).toBeInTheDocument();
  });
});
