import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {appReducer} from "./appReducer";
import {trainingSpeedReducer} from "./trainingSpeedReducer";

export const rootReducer = combineReducers(
	{
		app: appReducer,
		user: userReducer,
		trainingSpeed: trainingSpeedReducer
	});