import {SET_USER, LOGOUT} from "../actionTypes/userActionTypes";

export const userReducer = (state = {
	currentUser: null,
	isAuth: false
}, action) => {
	switch (action.type) {

		case SET_USER:
			return {
				...state,
				currentUser: action.payload,
				isAuth: true
			}

		case LOGOUT:
			return {
				...state,
				currentUser: {},
				isAuth: false
			}

		default: return state
	}
}