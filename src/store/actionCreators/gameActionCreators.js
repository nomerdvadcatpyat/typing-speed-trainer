import {
	CREATE_ROOM,
	JOIN_TO_ROOM,
	SET_USER_KICKED,
	LEAVE_ROOM,
	SET_END_STATE,
	SET_END_TIME,
	SET_GAME_DATA,
	SET_IDLE_STATE,
	SET_INPUT_TEXT,
	SET_PREPARE_STATE,
	SET_TYPING_STATE,
	START_GAME,
	START_SINGLE_GAME,
	SET_ROOM_ID,
	SET_ROOM_ERROR,
	UPDATE_ROOM_MEMBERS, SET_ROOM_OWNER
} from "../actionTypes/gameActionTypes";

export const createRoom = payload => ({type: CREATE_ROOM, payload});

export const leaveRoom = payload => ({type: LEAVE_ROOM, payload});

export const joinToRoom = payload => ({type: JOIN_TO_ROOM, payload});

export const startGame = payload => ({type: START_GAME, payload});

export const startSingleGame = payload => ({type: START_SINGLE_GAME, payload});

export const setGameData = payload => ({ type: SET_GAME_DATA, payload });

export const setIdleState = () => ({ type: SET_IDLE_STATE });

export const setPrepareState = payload => ({ type: SET_PREPARE_STATE, payload });

export const setTypingState = () => ({ type: SET_TYPING_STATE });

export const setEndState = () => ({ type: SET_END_STATE });

export const setEndTime = time => ({type: SET_END_TIME, payload: time});

export const setInputText = inputText => ({ type: SET_INPUT_TEXT, payload: inputText });

export const setUserKicked = payload => ({ type: SET_USER_KICKED, payload });

export const setRoomId = roomId => ({ type: SET_ROOM_ID, payload: roomId });

export const setRoomError = payload => ({type: SET_ROOM_ERROR, payload });

export const updateRoomMembers = payload => ({type: UPDATE_ROOM_MEMBERS, payload });

export const setRoomOwner = payload => ({ type: SET_ROOM_OWNER, payload });
