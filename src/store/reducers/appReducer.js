import {SET_LOADING_STATE, SET_LOADED_STATE, SET_ROOMS} from "../actionTypes/appActionTypes";

const initialState = {
	isLoading: true,
	rooms: null
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING_STATE: {
			return {
				...state,
				isLoading: true
			}
		}

		case SET_LOADED_STATE: {
			return {
				...state,
				isLoading: false
			}
		}

		case SET_ROOMS: {
			return {
				...state,
				rooms: action.payload
			}
		}

		default: return state;
	}
}