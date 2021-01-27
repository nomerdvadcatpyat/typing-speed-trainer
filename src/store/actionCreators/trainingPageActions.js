import { CHANGE_INPUT_TEXT, SET_END_TYPING_STATE, START_NEW_TEXT } from "../actionTypes";

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

export const changeInputText = (newInputText) => {
	console.log('changeInputText');

	return {
		type: CHANGE_INPUT_TEXT,
		payload: newInputText
	}
}