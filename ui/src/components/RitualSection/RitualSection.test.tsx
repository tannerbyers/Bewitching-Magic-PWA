import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RitualSection from './RitualSection';

describe('<RitualSection />', () => {
  test('it should mount', () => {
    render(<RitualSection />);
    
    const ritualSection = screen.getByTestId('RitualSection');

    expect(ritualSection).toBeInTheDocument();
  });
});