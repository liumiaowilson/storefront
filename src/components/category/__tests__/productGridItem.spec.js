import React from 'react';
import { ProductGridItem } from '../index';
import renderer from 'react-test-renderer';

describe('ProductGridItem', () => {
  it('should render correctly', () => {
    const product = {
      id: '1',
      title: 'Test Product',
      brand: 'Test Brand',
      image: 'test.jpg',
      description: 'A test product',
      price: 30
    };
    const tree = renderer
      .create(<ProductGridItem product={product} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
