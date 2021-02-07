import {takeEvery, put} from "redux-saga/effects";
import {TRY_LOGOUT, TRY_AUTH, TRY_LOGIN, TRY_REGISTER} from "../actionTypes";
import {setLoadedState, setLoadingState} from "../actionCreators/appActionCreators";
import {auth, login, logout, registration} from "./api/authApi";
import {logoutActionCreator, setUserActionCreator} from "../actionCreators/userActionCreators";

export function* authWatcher() {
	yield takeEvery(TRY_AUTH, tryAuthWorker);
	yield takeEvery(TRY_REGISTER, registerWorker);
	yield takeEvery(TRY_LOGIN, loginWorker);
	yield takeEvery(TRY_LOGOUT, logoutWorker);
}


function* tryAuthWorker() {
	try {
		yield put(setLoadingState());
		const user = yield auth();
		yield put(setUserActionCreator(user));
	}
	catch (e) {
		console.log(e);
	}
	finally {
		yield put(setLoadedState());
	}
}


function* registerWorker(action) {
	const formUserData = action.payload;

	yield registration(formUserData);

	yield put(setUserActionCreator(formUserData));
}


function* loginWorker(action) {
	const formUserData = action.payload;
	yield login(formUserData);

	console.log('saga user ', formUserData);

	yield put(setUserActionCreator(formUserData));
}


function* logoutWorker() {
	logout();
	yield put(logoutActionCreator());
}
