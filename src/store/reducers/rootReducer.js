import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {appReducer} from "./appReducer";
import {trainingSpeedReducer} from "./trainingSpeedReducer";
import {socketReducer} from "./socketReducer";

export const rootReducer = combineReducers(
	{
		app: appReducer,
		user: userReducer,
		socket: socketReducer,
		trainingSpeed: trainingSpeedReducer
	});