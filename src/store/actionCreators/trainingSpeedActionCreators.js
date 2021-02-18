import {
	SET_END_STATE,
	SET_IDLE_STATE,
	SET_INPUT_TEXT,
	SET_PREPARE_STATE,
	SET_TYPING_STATE, UPDATE_TIMER
} from "../actionTypes";



export const setIdleState = () => ({ type: SET_IDLE_STATE });

export const setPrepareState = payload => ({ type: SET_PREPARE_STATE, payload });

export const setTypingState = () => ({ type: SET_TYPING_STATE });

export const setEndState = () => ({ type: SET_END_STATE });

export const setInputText = inputText => ({ type: SET_INPUT_TEXT, payload: inputText });

export const updateTimer = timer => ({ type: UPDATE_TIMER, payload: timer });