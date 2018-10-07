import { actions } from '../../actions';
import reducer from '../productsReducer';

describe('ProductsReducer', () => {
  it('should load products', () => {
    const products = [
      {
        id: '1',
        title: 'Test Product'
      }
    ];
    const newState = reducer(null, actions.getProductsSucceeded(products));
    expect(newState).toBe(products);
  });
});
