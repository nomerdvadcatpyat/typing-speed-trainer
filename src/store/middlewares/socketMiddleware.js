import io from "socket.io-client";
import {
	setEndData,
	setRoomData, setPrepareState, setRoomError,
	setTypingState, updateRoom, setRoomOwner,
} from "../actionCreators/gameActionCreators";
import {
	CREATE_ROOM,
	JOIN_TO_ROOM,
	LEAVE_ROOM,
	SET_END_STATE,
	START_GAME, START_SINGLE_GAME
} from "../actionTypes/gameActionTypes";
import {getUser} from "../selectors/userSelectors";
import {getInputText, getRoomId} from "../selectors/gameSelectors";
import {SET_USER} from "../actionTypes/userActionTypes";
import {FETCH_ROOMS} from "../actionTypes/appActionTypes";
import {setRooms} from "../actionCreators/appActionCreators";



let socket;
let intervalId;


export const socketMiddleware = store => next => action => {

	const updateTime = () => {
		const state = store.getState();
		const user = getUser(state);

		socket.emit('update time', {
			roomId: getRoomId(state),
			userId: user.id,
			inputText: getInputText(state)
		});
	}

	const initSocket = () => {
		socket = io("ws://localhost:3001");

		socket.on('send rooms', rooms => {
			store.dispatch(setRooms(rooms));
		});

		socket.on('update room', data => {
			store.dispatch(updateRoom(data));
		});

		socket.on('set prepare state', () => {
			store.dispatch(setPrepareState());
		});

		socket.on('set typing state', () => {
			store.dispatch(setTypingState());
			intervalId = setInterval(() => {
				const roomId = getRoomId(store.getState());
				if(roomId) {
					updateTime(intervalId);
					socket.emit('request members progress', getRoomId(store.getState()));
				} else
					clearInterval(intervalId);
			}, 4000);
		});

		socket.on('set end data', data => {
			store.dispatch(setEndData(data));
		});

		socket.on('response members progress', members => {
			store.dispatch(updateRoom(members));
		});

		socket.on('confirm create room', data => {
			store.dispatch(setRoomOwner(true));
			store.dispatch(setRoomData(data));
		});

		socket.on('set room error', error => {
			clearInterval(intervalId);
			store.dispatch(setRoomError(error));
		});

		socket.on('confirm join to room', data => {
			store.dispatch(setRoomData(data));
		});

		socket.on('set room owner', () => {
			store.dispatch(setRoomOwner(true));
		});
	}


	switch (action.type) {
		case SET_USER: {
			initSocket();
			next(action);
			break;
		}

		case FETCH_ROOMS: {
			socket.emit('get rooms');
			break;
		}

		case CREATE_ROOM: {
			socket.emit('create room', action.payload);
			break;
		}

		case LEAVE_ROOM: {
			socket.emit('leave room', action.payload);
			break;
		}

		case JOIN_TO_ROOM: {
			socket.emit('join to room', action.payload);
			break;
		}

		case START_GAME: {
			socket.emit('start game', action.payload);
			break;
		}

		case START_SINGLE_GAME: {
			store.dispatch(setPrepareState());
			socket.emit('start single game', action.payload);
			break;
		}

		case SET_END_STATE: {
			clearInterval(intervalId);
			updateTime();
			next(action);
			break;
		}


		default: next(action);
	}
}