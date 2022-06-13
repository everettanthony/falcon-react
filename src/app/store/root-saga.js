import { all, call } from 'redux-saga/effects';
import { blogsSaga } from './blogs/blogs.saga';
import { servicesSaga } from './services/services.saga';

export function* rootSaga() {
  yield all([
    call(blogsSaga),
    call(servicesSaga)
  ]);
}