import {LOGOUT, SET_USER} from "../actionTypes/userActionTypes";


export const setUserActionCreator = user => ({type: SET_USER, payload: user});

export const logoutActionCreator = () => ({type: LOGOUT});