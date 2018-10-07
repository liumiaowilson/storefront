import React from 'react';
import { Header } from '../index';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('should render correctly', () => {
    const cart = [
      {
        product: {
          id: '1',
          title: 'Test Product',
          brand: 'Test Brand',
          image: 'test.jpg',
          description: 'A test product',
          price: 30
        },
        amount: 3
      }
    ];
    const total = 90;
    const tree = renderer
      .create(
        <BrowserRouter>
          <Header cart={cart} total={total} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
