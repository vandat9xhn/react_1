import { takeLatest, put, call } from 'redux-saga/effects';
//
import { API_PhoneLaptop_L } from '../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';

// watcher
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
    return API_PhoneLaptop_L({ _page: 4, _limit: 10 });
}
