import {CHANGE_CURRENT_SYMBOL_INDEX, SET_END_TYPING_STATE, START_NEW_TEXT} from "../actionTypes";

const initialState = {
	text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi cumque, 
	distinctio esse est eveniet explicabo fuga fugit harum id impedit incidunt laudantium mollitia 
	necessitatibus nisi numquam quae velit voluptate!`,

	currentSymbolIndex: 0,
	endState: false
}

export const trainingPageReducer = (state = initialState, action) => {
	switch (action.type) {

		case CHANGE_CURRENT_SYMBOL_INDEX: {
			console.log('reducer change', action.payload);
			return {...state, currentSymbolIndex: action.payload}
		}

		case SET_END_TYPING_STATE: {
			console.log('reducer end state');
			return {...state, endState: true}
		}

		case START_NEW_TEXT: {
			console.log('reducer start new text');
			return {...state, text: action.payload, endState: false, currentSymbolIndex: 0 }
		}

		default: return state
	}
}