import React from 'react';
import { Category } from '../index';
import renderer from 'react-test-renderer';

describe('Category', () => {
  it('should render correctly', () => {
    const category = {
      id: '1',
      title: 'Category',
      description: 'test category'
    };
    const products = [
      {
        id: '1',
        title: 'Test Product',
        brand: 'Test Brand',
        image: 'test.jpg',
        description: 'A test product',
        price: 30
      }
    ];
    const tree = renderer
      .create(<Category category={category} products={products} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
