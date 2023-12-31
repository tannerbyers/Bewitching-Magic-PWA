import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroSection from './HeroSection';

describe('<HeroSection />', () => {
  test('it should mount', () => {
    render(<HeroSection moonPhase={{ name: "waning crescent", rituals: [] }}/>);
    
    const heroSection = screen.getByTestId('HeroSection');

    expect(heroSection).toBeInTheDocument();
  });
});