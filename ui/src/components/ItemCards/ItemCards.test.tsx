import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemCards from './ItemCards';

describe('<ItemCards />', () => {
  test('it should mount', () => {
    render(<ItemCards moonRitualItems={[ {description: "item name"}]} />);
    
    const itemCards = screen.getByTestId('ItemCards');

    expect(itemCards).toBeInTheDocument();
  });
});