import {TRAINING_CHANGE_INPUT_TEXT, TRAINING_CLEAR, TRAINING_SET_END_TYPING_STATE, TRAINING_START_NEW_TEXT} from "../actionTypes";

export const setEndTypingState = () => {
	return {
		type: TRAINING_SET_END_TYPING_STATE
	}
}

export const startNewText = (text, lang) => {
	return {
		type: TRAINING_START_NEW_TEXT,
		payload: {
			text: text,
			lang: lang
		}
	}
}

export const changeInputText = (newInputText) => {
	return {
		type: TRAINING_CHANGE_INPUT_TEXT,
		payload: newInputText
	}
}

export const clearTraining = () => {
	return {
		type: TRAINING_CLEAR
	}
}