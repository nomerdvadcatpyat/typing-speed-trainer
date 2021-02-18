import {
	SET_END_STATE, SET_ERROR_TYPING, SET_IDLE_STATE,
	SET_INPUT_TEXT,
	SET_KEYBOARD_LAYOUT, SET_NO_ERROR_TYPING, SET_PREPARE_STATE, SET_SAME_TEXT,
	SET_TEXT, SET_TYPING_STATE, UPDATE_TIMER
} from "../actionTypes";
import {texts} from "../../utils/texts";
import {keyboardLayouts} from "../../utils/keyboardLayouts";

const initialTypingState = {
	IDLE: false,
	PREPARE: false,
	TYPING: false,
	END: false
}

const initialTimerState = {
	minutes: 0,
	seconds: 0
}

const initialState = {
	text: texts["Lorem ipsum"],
	inputText: '',
	keyboardLayout: keyboardLayouts.en,
	state: initialTypingState,
	timer: initialTimerState,
}

export const trainingSpeedReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IDLE_STATE: {
			return {
				...state,
				state: {...initialTypingState, IDLE: true },
				timer: {...initialTimerState}
			}
		}

		case SET_PREPARE_STATE: {
			return {
				...state,
				state: {
					...initialTypingState,
					IDLE: false,
					PREPARE: true
				},
				timer: {...initialTimerState}
			}
		}

		case SET_TYPING_STATE: {
			return {
				...state,
				state: {
					...initialTypingState,
					TYPING: true
				}
			}
		}

		case SET_END_STATE: {
			return {
				...state,
				state: {
					...initialTypingState,
					END: true
				}
			}
		}

		case SET_ERROR_TYPING: {
			return {
				...state,
				isErrorTyping: true
			}
		}

		case SET_NO_ERROR_TYPING: {
			return {
				...state,
				isErrorTyping: false
			}
		}

		case SET_TEXT: {
			return {
				...state,
				text: action.payload
			}
		}

		case SET_SAME_TEXT: {
			return {
				...state,
				inputText: ''
			}
		}

		case SET_INPUT_TEXT: {
			return {
				...state,
				inputText: action.payload
			}
		}

		case SET_KEYBOARD_LAYOUT: {
			return {
				...state,
				keyboardLayout: action.payload
			}
		}

		case UPDATE_TIMER: {
			return {
				...state,
				timer: action.payload
			}
		}

		default:
			return state;
	}
}