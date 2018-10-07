import React from 'react';
import { Product } from '../index';
import renderer from 'react-test-renderer';

describe('Product', () => {
  it('should render correctly', () => {
    const product = {
      id: '1',
      title: 'Test Product',
      brand: 'Test Brand',
      image: 'test.jpg',
      description: 'A test product',
      price: 30
    };
    const tree = renderer.create(<Product product={product} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
