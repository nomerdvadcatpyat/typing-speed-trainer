import io from "socket.io-client";
import {
	setUserKicked,
	setEndTime,
	setGameData, setPrepareState, setRoomError, setRoomId,
	setTypingState, updateRoomMembers, setRoomOwner
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
			console.log('in send rooms')
			store.dispatch(setRooms(rooms));
		});

		socket.on('update room members', members => {
			console.log('update members', members);
			store.dispatch(updateRoomMembers(members));
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

		socket.on('kick user', () => {
			clearInterval(intervalId);
			store.dispatch(setUserKicked(true));
		});

		socket.on('set end time', time => {
			store.dispatch(setEndTime(time/1000));
		});

		socket.on('response members progress', members => {
			store.dispatch(updateRoomMembers(members));
		});

		socket.on('disconnect', () => {
			console.log('disconnect')
		})
	}


	const initRoomCreator = () => {
		socket.on('confirm create room', roomId => {
			store.dispatch(setRoomId(roomId));
			store.dispatch(setRoomOwner(true));
		});
	}

	const initRoomMember = () => {
		socket.on('confirm join to room', ({roomId, text, keyboardLayout}) => {
			console.log('confirm join to room', {roomId, text, keyboardLayout});
			store.dispatch(setRoomId(roomId));
			store.dispatch(setGameData({ text, keyboardLayout }));
		});

		socket.on('reject join to room', error => {
			console.log('reject join to room');
			store.dispatch(setRoomError(error));
		});

		socket.on('reject start game', error => {
			store.dispatch(setRoomError(error));
		});

		socket.on('set room owner', () => {
			console.log('set room owner')
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
			initRoomCreator();
			socket.emit('create room', action.payload);
			break;
		}

		case LEAVE_ROOM: {
			console.log('leave room', action.payload, intervalId);
			socket.emit('leave room', action.payload);
			break;
		}

		case JOIN_TO_ROOM: {
			initRoomMember();
			socket.emit('join to room', action.payload);
			break;
		}

		case START_GAME: {
			socket.emit('start game', action.payload);
			break;
		}

		case START_SINGLE_GAME: {
			initRoomCreator();
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