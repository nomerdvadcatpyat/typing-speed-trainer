import {
	SET_END_STATE,
	SET_IDLE_STATE,
	SET_INPUT_TEXT,
	SET_KEYBOARD_LAYOUT, SET_PREPARE_STATE, SET_SAME_TEXT,
	SET_TEXT, SET_TYPING_STATE, UPDATE_TIMER
} from "../actionTypes";



export const setIdleState = () => ({ type: SET_IDLE_STATE });

export const setPrepareState = () => ({ type: SET_PREPARE_STATE });

export const setTypingState = () => ({ type: SET_TYPING_STATE });

export const setEndState = () => ({ type: SET_END_STATE });

export const setText = text => ({ type: SET_TEXT, payload: text });

export const setSameText = () => ({ type: SET_SAME_TEXT });

export const setInputText = inputText => ({ type: SET_INPUT_TEXT, payload: inputText });

export const setKeyboardLayout = keyboardLayout => ({ type: SET_KEYBOARD_LAYOUT, payload: keyboardLayout });

export const updateTimer = timer => ({ type: UPDATE_TIMER, payload: timer });