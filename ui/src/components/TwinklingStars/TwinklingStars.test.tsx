import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TwinklingStars from './TwinklingStars';

describe('<TwinklingStars />', () => {
  test('it should mount', () => {
    render(<TwinklingStars />);
    
    const twinklingStars = screen.getByTestId('TwinklingStars');

    expect(twinklingStars).toBeInTheDocument();
  });
});