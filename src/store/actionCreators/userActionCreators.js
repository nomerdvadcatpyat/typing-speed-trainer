import {LOGOUT, SET_USER, TRY_LOGOUT, TRY_AUTH, TRY_LOGIN, TRY_REGISTER} from "../actionTypes";


export const tryAuthActionCreator = () => ({type: TRY_AUTH});

export const tryLoginActionCreator = user => ({type: TRY_LOGIN, payload: user});

export const tryRegisterActionCreator = user => ({type: TRY_REGISTER, payload: user});

export const tryLogoutActionCreator = () => ({type: TRY_LOGOUT});

export const setUserActionCreator = user => ({type: SET_USER, payload: user});

export const logoutActionCreator = () => ({type: LOGOUT});