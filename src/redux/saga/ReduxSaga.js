import { takeLatest, put, call } from 'redux-saga/effects';

import { allProducts } from '../../api/api_heroku/get_api/GetAPI';

// watch
export default function* watcherSaga() {
  yield takeLatest('API_REQUEST', workerSaga);
}
// worker
function* workerSaga() {
  try {
    const res = yield call(fetchData);
    const { data } = res;

    yield put({ type: 'API_SUCCESS', payload: data });
  } catch (e) {
    yield put({ type: 'API_FAIL', error: e });
  }
}
// fetch
function fetchData() {
  return allProducts({ _page: 4, _limit: 10 });
}
