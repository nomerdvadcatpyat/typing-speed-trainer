import {fork} from "redux-saga/effects";
import {authWatcher} from "./authSaga";

export function* rootSaga() {
	yield fork(authWatcher);
}