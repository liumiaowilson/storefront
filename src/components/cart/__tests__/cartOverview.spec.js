import React from 'react';
import { CartOverview } from '../index';
import renderer from 'react-test-renderer';

describe('CartOverview', () => {
  it('should render correctly', () => {
    const total = 120;
    const tree = renderer.create(<CartOverview total={total} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
