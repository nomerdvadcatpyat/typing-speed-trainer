import {LOGOUT, SET_USER} from "../actionTypes";


export const setUserActionCreator = user => ({type: SET_USER, payload: user});

export const logoutActionCreator = () => ({type: LOGOUT});