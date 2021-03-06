import {FETCH_ROOMS, SET_ROOMS} from "../actionTypes/appActionTypes";

export const fetchRooms = () => ({type: FETCH_ROOMS});

export const setRooms = rooms => ({type: SET_ROOMS, payload: rooms});