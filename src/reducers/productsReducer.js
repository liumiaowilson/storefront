import { types } from '../actions';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_SUCCEEDED:
      return action.products;
    default:
      return state;
  }
};

export default productsReducer;
