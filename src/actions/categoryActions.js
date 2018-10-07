export const types = {
  GET_CATEGORY: 'Category_getCategory',
  GET_CATEGORY_SUCCEEDED: 'Category_getCategorySucceeded',
  GET_CATEGORY_FAILED: 'Category_getCategoryFailed'
};

export const actions = {
  getCategory: id => ({
    type: types.GET_CATEGORY,
    id
  }),

  getCategorySucceeded: category => ({
    type: types.GET_CATEGORY_SUCCEEDED,
    category
  }),

  getCategoryFailed: error => ({
    type: types.GET_CATEGORY_FAILED,
    error
  })
};
