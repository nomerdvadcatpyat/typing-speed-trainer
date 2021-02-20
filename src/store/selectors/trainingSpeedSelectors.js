

export const getTypingState = state => {
	return state.trainingSpeed.typingState;
}

export const getText = state => {
	return state.trainingSpeed.text;
}

export const getInputText = state => {
	return state.trainingSpeed.inputText;
}

export const getKeyboardLayout = state => {
	return state.trainingSpeed.keyboardLayout;
}

export const getIsErrorTyping = state => {
	return state.trainingSpeed.isErrorTyping;
}

export const getTimer = state => {
	return state.trainingSpeed.timer
}

export const isUserKicked = state => state.trainingSpeed.isUserKicked;
