import {
	CREATE_ROOM,
	JOIN_TO_ROOM,
	SET_USER_KICKED,
	LEAVE_ROOM,
	SET_END_STATE,
	SET_END_DATA,
	SET_ROOM_DATA,
	SET_IDLE_STATE,
	SET_INPUT_TEXT,
	SET_PREPARE_STATE,
	SET_TYPING_STATE,
	START_GAME,
	START_SINGLE_GAME,
	SET_ROOM_ERROR,
	UPDATE_ROOM, SET_ROOM_OWNER
} from "../actionTypes/gameActionTypes";

export const createRoom = payload => ({type: CREATE_ROOM, payload});

export const leaveRoom = payload => ({type: LEAVE_ROOM, payload});

export const joinToRoom = payload => ({type: JOIN_TO_ROOM, payload});

export const startGame = payload => ({type: START_GAME, payload});

export const startSingleGame = payload => ({type: START_SINGLE_GAME, payload});

export const setRoomData = payload => ({ type: SET_ROOM_DATA, payload });

export const setIdleState = () => ({ type: SET_IDLE_STATE });

export const setPrepareState = payload => ({ type: SET_PREPARE_STATE, payload });

export const setTypingState = () => ({ type: SET_TYPING_STATE });

export const setEndState = () => ({ type: SET_END_STATE });

export const setEndData = payload => ({type: SET_END_DATA, payload });

export const setInputText = inputText => ({ type: SET_INPUT_TEXT, payload: inputText });

export const setUserKicked = payload => ({ type: SET_USER_KICKED, payload });

export const setRoomError = payload => ({type: SET_ROOM_ERROR, payload });

export const updateRoom = payload => ({type: UPDATE_ROOM, payload });

export const setRoomOwner = payload => ({ type: SET_ROOM_OWNER, payload });
