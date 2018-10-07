import { types } from '../actions';

const toggleCartReducer = (state = false, action) => {
  switch (action.type) {
    case types.TOGGLE_CART:
      return action.isOpen;
    default:
      return state;
  }
};

export default toggleCartReducer;
