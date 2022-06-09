import { takeLatest, call, put, all } from 'redux-saga/effects';
import { getServicesAndDocuments } from '../../utils/firebase/firebase';
import {
  fetchServicesSuccess,
  fetchServicesFailure
} from './services.action';
import SERVICES_ACTION_TYPES from './services.types'

export function* fetchServicesAsync() {
  try {
    const servicesArray = yield call(getServicesAndDocuments, 'services');
    yield put(fetchServicesSuccess(servicesArray));
  }
  catch (error) {
    yield put(fetchServicesFailure(error));
  }
}

export function* onFetchServices() {
  yield takeLatest(
    SERVICES_ACTION_TYPES.FETCH_SERVICES_START,
    fetchServicesAsync
  );
}

export function* servicesSaga() {
  yield all([call(onFetchServices)]);
}