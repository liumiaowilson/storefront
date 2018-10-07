import React from 'react';
import { Cart } from '../index';
import renderer from 'react-test-renderer';

describe('Cart', () => {
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
        amount: 2
      }
    ];
    const total = 30;
    const tree = renderer.create(<Cart cart={cart} total={total} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
