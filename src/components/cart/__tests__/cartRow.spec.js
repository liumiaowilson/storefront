import React from 'react';
import { CartRow } from '../index';
import renderer from 'react-test-renderer';

describe('CartRow', () => {
  it('should render correctly', () => {
    const product = {
      title: 'Test Product',
      brand: 'Test Brand',
      image: 'test.jpg',
      description: 'A test product',
      price: 30
    };
    const amount = 1;
    const tree = renderer
      .create(<CartRow product={product} amount={amount} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
