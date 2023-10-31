import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RitualCard from './RitualCard';

describe('<RitualCard />', () => {
  test('it should mount', () => {
    render(<RitualCard />);
    
    const ritualCard = screen.getByTestId('RitualCard');

    expect(ritualCard).toBeInTheDocument();
  });
});