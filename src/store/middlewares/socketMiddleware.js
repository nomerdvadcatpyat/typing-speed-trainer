import io from "socket.io-client";
import {SOCKET_CONNECT, SOCKET_DISCONNECT} from "../actionTypes/socketActionTypes";
import {setRoomId, setTypingState} from "../actionCreators/trainingSpeedActionCreators";

let socket;

export const socketMiddleware = store => next => action => {
	switch (action.type) {

		case SOCKET_CONNECT: {
			socket = io("ws://localhost:3001");

			socket.on('connect', () => {
				socket.emit('create room');
			});

			socket.on('confirm join to room', roomId => {
				console.log(roomId);
				store.dispatch(setRoomId(roomId));
			});

			socket.on('set typing state', () => {
				store.dispatch(setTypingState());

				const intervalId = setInterval(() => {
					const state = store.getState();
					const endState = state.trainingSpeed.typingState.END;

					socket.emit('update time', {
						roomId: state.trainingSpeed.roomId,
						inputText: state.trainingSpeed.inputText,
						endState
					});

					if(endState) clearInterval(intervalId);
				}, 4000);
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