import React from 'react';
import { HeaderCart } from '../index';
import renderer from 'react-test-renderer';

describe('HeaderCart', () => {
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
      .create(<HeaderCart cart={cart} total={total} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
