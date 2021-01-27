import {CHANGE_CURRENT_SYMBOL_INDEX, SET_END_TYPING_STATE, START_NEW_TEXT} from "../actionTypes";

export const changeCurrentSymbolIndex = (index) => {
	console.log('changeCurrentSymbolIndex ',index)

	return {
		type: CHANGE_CURRENT_SYMBOL_INDEX,
		payload: index
	}
}

export const setEndTypingState = () => {
	console.log('setEndTypingState ')

	return {
		type: SET_END_TYPING_STATE
	}
}

export const startNewText = (text) => {
	console.log('startNewText')

	return {
		type: START_NEW_TEXT,
		payload: text
	}
}