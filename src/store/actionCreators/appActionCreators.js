import {SET_LOADED_STATE, SET_LOADING_STATE} from "../actionTypes/appActionTypes";

export const setLoadingState = () => {
	return {
		type: SET_LOADING_STATE
	}
}

export const setLoadedState = () => {
	return {
		type: SET_LOADED_STATE
	}
}