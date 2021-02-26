import {FETCH_ROOMS, INIT_SOCKET, SET_LOADED_STATE, SET_LOADING_STATE, SET_ROOMS} from "../actionTypes/appActionTypes";

export const setLoadingState = () => ({type: SET_LOADING_STATE});

export const setLoadedState = () => ({type: SET_LOADED_STATE});

export const initSocket = () => ({type: INIT_SOCKET});

export const fetchRooms = () => ({type: FETCH_ROOMS});

export const setRooms = rooms => ({type: SET_ROOMS, payload: rooms});