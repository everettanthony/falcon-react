import { takeLatest, call, put, all } from 'redux-saga/effects';
import { getBlogsAndDocuments } from '../../utils/firebase/firebase';
import {
  fetchBlogsSuccess,
  fetchBlogsFailure
} from './blogs.action';
import BLOGS_ACTION_TYPES from './blogs.types'

export function* fetchBlogsAsync() {
  try {
    const blogsArray = yield call(getBlogsAndDocuments, 'blogs');
    yield put(fetchBlogsSuccess(blogsArray));
  }
  catch (error) {
    yield put(fetchBlogsFailure(error));
  }
}

export function* onFetchBlogs() {
  yield takeLatest(
    BLOGS_ACTION_TYPES.FETCH_BLOGS_START,
    fetchBlogsAsync
  );
}

export function* blogsSaga() {
  yield all([call(onFetchBlogs)]);
}