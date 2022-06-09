import { all, call } from 'redux-saga/effects';
import { servicesSaga } from './services/services.saga';

export function* rootSaga() {
  yield all([call(servicesSaga)]);
}