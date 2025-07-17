import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../../components/Counter';

describe('Counter Integration', () => {
  it('increments and decrements multiple times', () => {
    const { getByTestId } = render(<Counter />);
    const incrementBtn = getByTestId('increment');
    const decrementBtn = getByTestId('decrement');
    const count = getByTestId('count');

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(decrementBtn);
    expect(count.textContent).toBe('Count: 1');
  });
}); 