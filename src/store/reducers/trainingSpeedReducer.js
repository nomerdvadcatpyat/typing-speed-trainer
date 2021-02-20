import {
	KICK_USER,
	SET_END_STATE, SET_ERROR_TYPING, SET_IDLE_STATE,
	SET_INPUT_TEXT,
	SET_NO_ERROR_TYPING, SET_PREPARE_STATE, SET_ROOM_ID,
	SET_TYPING_STATE, UPDATE_TIMER
} from "../actionTypes/trainingPageActionTypes";


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
	roomId: null,
	isUserKicked: false,
	text: '',
	inputText: '',
	keyboardLayout: null,
	typingState: initialTypingState,
	timer: initialTimerState,
}

export const trainingSpeedReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_IDLE_STATE: {
			return {
				...initialState,
				typingState: {...initialTypingState, IDLE: true },
				timer: {...initialTimerState}
			}
		}

		case SET_PREPARE_STATE: {
			return {
				...initialState,
				inputText: '',
				text: action.payload.text,
				keyboardLayout: action.payload.keyboardLayout,
				typingState: {
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
				typingState: {
					...initialTypingState,
					TYPING: true
				}
			}
		}

		case SET_END_STATE: {
			return {
				...state,
				typingState: {
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

		case SET_INPUT_TEXT: {
			return {
				...state,
				inputText: action.payload
			}
		}

		case UPDATE_TIMER: {
			return {
				...state,
				timer: action.payload
			}
		}

		case SET_ROOM_ID: {
			return {
				...state,
				roomId: action.payload
			}
		}

		case KICK_USER: {
			return {
				...initialState,
				typingState: {
					...initialTypingState,
					IDLE: true
				},
				isUserKicked: true
			}
		}

		default:
			return state;
	}
}