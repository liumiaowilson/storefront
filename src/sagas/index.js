import { all } from 'redux-saga/effects';
import { watchGetCategoryAsync } from './categorySaga';
import { watchGetProductsAsync } from './productSaga';

export default function* rootSaga() {
  yield all([watchGetCategoryAsync(), watchGetProductsAsync()]);
}
