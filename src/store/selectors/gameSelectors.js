

export const getTypingState = state => {
	return state.game.typingState;
}

export const getText = state => {
	return state.game.text;
}

export const getInputText = state => {
	return state.game.inputText;
}

export const getKeyboardLayout = state => {
	return state.game.keyboardLayout;
}

export const getIsErrorTyping = state => {
	return state.game.isErrorTyping;
}

export const getTimer = state => {
	return state.game.timer
}

export const getEndTime = state => state.game.endTime;

export const getRoomId = state => state.game.roomId;

export const getRoomError = state => state.game.error;

export const getRoomMembers = state => state.game.members;

export const isUserKicked = state => state.game.isUserKicked;

export const isRoomOwner = state => state.game.isRoomOwner;