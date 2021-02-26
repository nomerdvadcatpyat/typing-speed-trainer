import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {appReducer} from "./appReducer";
import {gameReducer} from "./gameReducer";

export const rootReducer = combineReducers(
	{
		app: appReducer,
		user: userReducer,
		game: gameReducer
	});