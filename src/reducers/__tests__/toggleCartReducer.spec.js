import { actions } from '../../actions';
import reducer from '../toggleCartReducer';

describe('ToggleCartReducer', () => {
  it('should toggle cart', () => {
    const newState = reducer(false, actions.toggleCart(true));
    expect(newState).toBe(true);
  });
});
