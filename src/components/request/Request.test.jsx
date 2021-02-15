import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Request from './Request';

describe('Request component', () => {
  afterEach(() => cleanup());
  it('renders Request', () => {
    const { asFragment } = render(<Request 
      name="Tiger" 
      type="Mammal" 
      characteristic="stripes"
      onChange={jest.fn()}
      onSubmit={jest.fn()}  
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
