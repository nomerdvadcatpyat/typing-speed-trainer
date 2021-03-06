import {
	SET_USER_KICKED,
	SET_END_STATE, SET_END_DATA, SET_ERROR_TYPING, SET_ROOM_DATA, SET_IDLE_STATE,
	SET_INPUT_TEXT,
	SET_NO_ERROR_TYPING, SET_PREPARE_STATE, SET_ROOM_ERROR,
	SET_TYPING_STATE, UPDATE_ROOM, SET_ROOM_OWNER
} from "../actionTypes/gameActionTypes";


const initialTypingState = {
	IDLE: true,
	PREPARE: false,
	TYPING: false,
	END: false,
}

const initialRoomInfoState = {
	roomId: null,
	maxMembersCount: null,
	members: [],
	text: '',
	keyboardLayout: null,
}

const initialState = {
	roomInfo: initialRoomInfoState,
	error: null,
	isRoomOwner: null,
	inputText: '',
	typingState: initialTypingState,
	endTime: null,
	points: null,
	place: null,
	averageSpeed: null
}

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_IDLE_STATE: {
			return {
				...initialState,
				error: state.error
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

		case SET_END_DATA: {
			return {
				...state,
				...action.payload
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

		case SET_ROOM_DATA: {
			return {
				...state,
				roomInfo: action.payload.roomInfo,
				members: action.payload.members
			}
		}

		case SET_ROOM_ERROR: {
			return {
				...state,
				error: action.payload
			}
		}

		case UPDATE_ROOM: {
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