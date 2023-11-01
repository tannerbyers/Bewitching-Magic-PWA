import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RitualCards from './RitualCards';

describe('<RitualCards />', () => {
  test('it should mount', () => {
    render(<RitualCards moonRituals={[{ description: "test ritual" }]} />);

    const ritualCards = screen.getByTestId('RitualCards');

    expect(ritualCards).toBeInTheDocument();
  });
});