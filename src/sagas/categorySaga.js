import { call, put, takeLatest } from 'redux-saga/effects';
import { types, actions } from '../actions';
import { getCategory } from '../api/category';

export function* getCategoryAsync() {
  try {
    const category = yield call(getCategory);
    yield put(actions.getCategorySucceeded(category));
  } catch (e) {
    yield put(actions.getCategoryFailed(e));
  }
}

export function* watchGetCategoryAsync() {
  yield takeLatest(types.GET_CATEGORY, getCategoryAsync);
}
