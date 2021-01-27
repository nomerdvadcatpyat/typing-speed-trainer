import {combineReducers} from "redux";
import {trainingPageReducer} from "./trainingPageReducer";

export const rootReducer = combineReducers(
	{
		trainingPage: trainingPageReducer
	});