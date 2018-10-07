import React from 'react';
import { ProductActions } from '../index';
import renderer from 'react-test-renderer';

describe('ProductActions', () => {
  it('should render correctly', () => {
    const amount = 1;
    const tree = renderer.create(<ProductActions amount={amount} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
