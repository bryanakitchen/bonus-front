/* eslint-disable max-len */
import React from 'react';
import { render, cleanup, fireEvent, waitFor, screen } from '@testing-library/react';
import Animals from './Animals';

describe('Animals component', () => {
  afterEach(() => cleanup());

  it('renders Animals form', () => {
    render(<Animals />);

    const nameInput = screen.getByPlaceholderText('Enter name');

    fireEvent.change(nameInput, {
      target: {
        value: 'Lion'
      }
    });

    return waitFor(() => {
      expect(screen.getByTestId('response')).not.toBeEmptyDOMElement();
    });

  });
});
