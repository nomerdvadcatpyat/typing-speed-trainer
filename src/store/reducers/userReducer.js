import {SET_USER, LOGOUT} from "../actionTypes";

export const userReducer = (state = {}, action) => {
	switch (action.type) {

		case SET_USER:
			console.log('set user');
			return {
				...state,
				currentUser: action.payload.user,
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