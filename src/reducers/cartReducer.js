import { types } from '../actions';

const cartReducer = (state = {}, action) => {
  const amount = state[action.productId] || 0;
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        [action.productId]: amount + action.amount
      };
    case types.REMOVE_FROM_CART:
      if (amount > action.amount) {
        return {
          ...state,
          [action.productId]: amount - action.amount
        };
      } else {
        const newState = { ...state };
        delete newState[action.productId];
        return newState;
      }
    default:
      return state;
  }
};

export default cartReducer;
