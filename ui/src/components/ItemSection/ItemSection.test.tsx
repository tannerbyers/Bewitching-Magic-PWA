import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemSection from './ItemSection';

describe('<ItemSection />', () => {
  test('it should mount', () => {
    render(<ItemSection />);
    
    const itemSection = screen.getByTestId('ItemSection');

    expect(itemSection).toBeInTheDocument();
  });
});