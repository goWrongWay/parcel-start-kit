import * as CounterAction from '../store/counter';
import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

export function* incrementAsync() {
    yield delay(1000);
    yield put(CounterAction.onIncrement());
}

export default function* rootSaga() {
    yield takeLatest('async', incrementAsync);
}
