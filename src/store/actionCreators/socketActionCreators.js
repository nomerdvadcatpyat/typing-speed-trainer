import {SOCKET_CONNECT, SOCKET_DISCONNECT} from "../actionTypes/socketActionTypes";

export const initSocket = () => ({ type: SOCKET_CONNECT });

export const disconnectSocket = () => ({ type: SOCKET_DISCONNECT });