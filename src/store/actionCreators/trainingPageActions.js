import {CHANGE_INPUT_TEXT, CLEAR_TRAINING, SET_END_TYPING_STATE, START_NEW_TEXT} from "../actionTypes";

export const setEndTypingState = () => {

	return {
		type: SET_END_TYPING_STATE
	}
}

export const startNewText = (text, lang) => {

	return {
		type: START_NEW_TEXT,
		payload: {
			text: text,
			lang: lang
		}
	}
}

export const changeInputText = (newInputText) => {

	return {
		type: CHANGE_INPUT_TEXT,
		payload: newInputText
	}
}

export const clearTraining = () => {

	return {
		type: CLEAR_TRAINING
	}
}