import React from 'react';
import { HeaderCartItem } from '../index';
import renderer from 'react-test-renderer';

describe('HeaderCartItem', () => {
  it('should render correctly', () => {
    const product = {
      id: '1',
      title: 'Test Product',
      brand: 'Test Brand',
      image: 'test.jpg',
      description: 'A test product',
      price: 30
    };
    const amount = 2;
    const tree = renderer
      .create(<HeaderCartItem product={product} amount={amount} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
