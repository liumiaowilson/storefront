export const types = {
  GET_PRODUCTS: 'Product_getProducts',
  GET_PRODUCTS_SUCCEEDED: 'Product_getProductsSucceeded',
  GET_PRODUCTS_FAILED: 'Product_getProductsFailed'
};

export const actions = {
  getProducts: categoryId => ({
    type: types.GET_PRODUCTS,
    categoryId
  }),

  getProductsSucceeded: products => ({
    type: types.GET_PRODUCTS_SUCCEEDED,
    products
  }),

  getProductsFailed: error => ({
    type: types.GET_PRODUCTS_FAILED,
    error
  })
};
