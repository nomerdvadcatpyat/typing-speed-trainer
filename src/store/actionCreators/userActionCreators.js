import {LOGOUT, SET_USER} from "../actionTypes/userActionTypes";


export const setUser = user => ({type: SET_USER, payload: user});

export const logout = () => ({type: LOGOUT});