import {SET_ROOMS} from "../actionTypes/appActionTypes";

const initialState = {
	rooms: null
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ROOMS: {
			return {
				...state,
				rooms: action.payload
			}
		}

		default: return state;
	}
}