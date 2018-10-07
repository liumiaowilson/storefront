import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

export const sagaMiddleware = createSagaMiddleware();

const logger = createLogger();

export default [sagaMiddleware, logger];
