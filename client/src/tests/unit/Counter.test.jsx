import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../../components/Counter';

describe('Counter Component', () => {
  it('renders with initial count 0', () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId('count').textContent).toBe('Count: 0');
  });

  it('increments the count', () => {
    const { getByTestId } = render(<Counter />);
    fireEvent.click(getByTestId('increment'));
    expect(getByTestId('count').textContent).toBe('Count: 1');
  });

  it('decrements the count', () => {
    const { getByTestId } = render(<Counter />);
    fireEvent.click(getByTestId('decrement'));
    expect(getByTestId('count').textContent).toBe('Count: -1');
  });
}); 