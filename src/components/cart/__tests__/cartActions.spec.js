import React from 'react';
import { CartActions } from '../index';
import renderer from 'react-test-renderer';

describe('CartActions', () => {
  it('should render correctly', () => {
    const total = 120;
    const tree = renderer.create(<CartActions total={total} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
