import {SET_LOADING_STATE, SET_LOADED_STATE} from "../actionTypes";

const initialState = {
	isLoading: true
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case(SET_LOADING_STATE):
			return {
				...state,
				isLoading: true
			}

		case(SET_LOADED_STATE):
			return {
				...state,
				isLoading: false
			}

		default: return state;
	}
}