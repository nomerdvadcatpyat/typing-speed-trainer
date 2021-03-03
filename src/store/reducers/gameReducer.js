import {
	SET_USER_KICKED,
	SET_END_STATE, SET_END_TIME, SET_ERROR_TYPING, SET_GAME_DATA, SET_IDLE_STATE,
	SET_INPUT_TEXT,
	SET_NO_ERROR_TYPING, SET_PREPARE_STATE, SET_ROOM_ERROR, SET_ROOM_ID,
	SET_TYPING_STATE, UPDATE_ROOM_MEMBERS, SET_ROOM_OWNER
} from "../actionTypes/gameActionTypes";


const initialTypingState = {
	IDLE: true,
	PREPARE: false,
	TYPING: false,
	END: false,
}

const initialState = {
	roomId: null,
	maxUsersCount: null,
	members: [],
	text: '',
	keyboardLayout: null,
	error: null,

	isUserKicked: null,
	isRoomOwner: null,
	inputText: '',
	typingState: initialTypingState,
	endTime: null
}

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_GAME_DATA: {
			return {
				...state,
				inputText: '',
				text: action.payload.text,
				keyboardLayout: action.payload.keyboardLayout,
				typingState: {...initialTypingState}
			}
		}

		case SET_IDLE_STATE: {
			return {
				...initialState,
				isUserKicked: state.isUserKicked
			}
		}

		case SET_PREPARE_STATE: {
			return {
				...state,
				inputText: '',
				typingState: {
					...initialTypingState,
					IDLE: false,
					PREPARE: true
				}
			}
		}

		case SET_TYPING_STATE: {
			return {
				...state,
				typingState: {
					...state.typingState,
					PREPARE: false,
					TYPING: true
				}
			}
		}

		case SET_END_STATE: {
			return {
				...state,
				typingState: {
					...state.typingState,
					TYPING: false,
					END: true
				}
			}
		}

		case SET_END_TIME: {
			return {
				...state,
				endTime: action.payload
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

		case SET_USER_KICKED: {
			return {
				...initialState,
				isUserKicked: action.payload
			}
		}

		case SET_ROOM_ID: {
			return {
				...state,
				roomId: action.payload
			}
		}

		case SET_ROOM_ERROR: {
			return {
				...state,
				error: action.payload
			}
		}

		case UPDATE_ROOM_MEMBERS: {
			return {
				...state,
				members: action.payload
			}
		}

		case SET_ROOM_OWNER: {
			return {
				...state,
				isRoomOwner: action.payload
			}
		}

		default:
			return state;
	}
}