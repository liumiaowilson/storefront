import { combineReducers } from 'redux';
import category from './categoryReducer';
import products from './productsReducer';
import cart from './cartReducer';
import isCartOpen from './toggleCartReducer';

const rootReducer = combineReducers({
  category,
  products,
  cart,
  isCartOpen
});

export default rootReducer;
