import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import middleware from './middleware';
import { sagaMiddleware } from './middleware';
import rootSaga from './sagas';

export default createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);
