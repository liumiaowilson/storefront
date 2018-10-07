import React from 'react';
import { CartTable } from '../index';
import renderer from 'react-test-renderer';

describe('CartTable', () => {
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
    const tree = renderer.create(<CartTable cart={cart} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
