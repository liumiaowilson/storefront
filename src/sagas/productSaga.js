import { call, put, takeLatest } from 'redux-saga/effects';
import { types, actions } from '../actions';
import { getProductsByCategory } from '../api/product';

export function* getProductsAsync(action) {
  try {
    const products = yield call(getProductsByCategory, action.categoryId);
    yield put(actions.getProductsSucceeded(products));
  } catch (e) {
    yield put(actions.getProductsFailed(e));
  }
}

export function* watchGetProductsAsync() {
  yield takeLatest(types.GET_PRODUCTS, getProductsAsync);
}
