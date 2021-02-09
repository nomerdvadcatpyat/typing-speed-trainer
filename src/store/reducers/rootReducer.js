import {combineReducers} from "redux";
import {trainingPageReducer} from "./trainingPageReducer";
import {userReducer} from "./userReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers(
	{
		app: appReducer,
		trainingPage: trainingPageReducer,
		user: userReducer,
	});