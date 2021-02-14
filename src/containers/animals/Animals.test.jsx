import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Animals from './Animals';

describe('Animals component', () => {
  afterEach(() => cleanup());
  it('renders Animals', () => {
    render(<Animals />);


  });
});
