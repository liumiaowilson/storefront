import { actions } from '../../actions';
import reducer from '../cartReducer';

describe('CartReducer', () => {
  it('should add to cart', () => {
    const state = {
      '1': 2
    };
    const newState = reducer(state, actions.addToCart('1', 2));
    expect(newState['1']).toEqual(4);
  });

  it('should remove from cart', () => {
    const state = {
      '1': 2
    };
    const newState = reducer(state, actions.removeFromCart('1', 1));
    expect(newState['1']).toEqual(1);
  });

  it('should remove from cart completely', () => {
    const state = {
      '1': 2
    };
    const newState = reducer(state, actions.removeFromCart('1', 3));
    expect(newState['1']).toBeUndefined();
  });
});
