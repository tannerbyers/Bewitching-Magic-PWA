import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemCard from './ItemCard';

describe('<ItemCard />', () => {
  test('it should mount', () => {
    render(<ItemCard moonRitualItem={ "candle"} />);
    
    const itemCard = screen.getByTestId('ItemCard');

    expect(itemCard).toBeInTheDocument();
  });
});