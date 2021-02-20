import io from "socket.io-client";
import {SOCKET_CONNECT, SOCKET_DISCONNECT} from "../actionTypes/socketActionTypes";
import {kickUser, setRoomId, setTypingState} from "../actionCreators/trainingSpeedActionCreators";

let socket;
let intervalId;

export const socketMiddleware = store => next => action => {

	const updateTime = () => {
		const state = store.getState();
		const endState = state.trainingSpeed.typingState.END;

		socket.emit('update time', {
			roomId: state.trainingSpeed.roomId,
			inputText: state.trainingSpeed.inputText,
		});

		if(endState)
			clearInterval(intervalId);
	}

	switch (action.type) {
		case SOCKET_CONNECT: {
			socket = io("ws://localhost:3001");

			socket.on('connect', () => {
				socket.emit('create room', store.getState().trainingSpeed.text);
			});

			socket.on('confirm join to room', roomId => {
				console.log(roomId);
				store.dispatch(setRoomId(roomId));
			});

			socket.on('set typing state', () => {
				store.dispatch(setTypingState());
				intervalId = setInterval(() => updateTime(intervalId), 1000);
			});

			socket.on('kick user', () => {
				console.log('user has been kicked');
				clearInterval(intervalId);
				store.dispatch(kickUser());
			});

			break;
		}

		case SOCKET_DISCONNECT: {
			console.log(socket.id);
			socket && socket.disconnect();
			store.dispatch(setRoomId(null));
			break;
		}

		default: next(action);
	}
}