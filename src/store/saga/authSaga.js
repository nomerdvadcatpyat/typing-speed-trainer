import {takeEvery, put, call} from "redux-saga/effects";
import {TRY_LOGOUT, TRY_AUTH, TRY_LOGIN, TRY_REGISTER} from "../actionTypes";
import {setLoadedState, setLoadingState} from "../actionCreators/appActionCreators";
import {auth, login, logout, registration} from "../../utils/api/authApi";
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
		const user = yield call(auth);

		console.log(user);

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
	try{
		const formUserData = action.payload;

		yield call(registration, formUserData);

		yield put(setUserActionCreator(formUserData));
	}
	catch (e) {
		console.log('register catch', e.response.data);
	}
}


function* loginWorker(action) {
	try {

		const formUserData = action.payload;
		yield call(login, formUserData);

		console.log('saga login user ', formUserData);

		yield put(setUserActionCreator(formUserData));

	}
	catch (e) {
		console.log('login catch', e.response.data.message);
		// Кинуть ошибку валидации
	}
}


function* logoutWorker() {
	yield call(logout);
	yield put(logoutActionCreator());
}
