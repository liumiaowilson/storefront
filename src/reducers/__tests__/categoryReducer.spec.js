import { actions } from '../../actions';
import reducer from '../categoryReducer';

describe('CategoryReducer', () => {
  it('should load category', () => {
    const category = {
      id: '1',
      title: 'New Category',
      description: 'some content'
    };
    const newState = reducer(null, actions.getCategorySucceeded(category));
    expect(newState).toBe(category);
  });
});
