

export const getTypingState = state => state.game.typingState;

export const getText = state => state.game.roomInfo.text;

export const getInputText = state => state.game.inputText;

export const getKeyboardLayout = state => state.game.roomInfo.keyboardLayout;

export const getIsErrorTyping = state => state.game.isErrorTyping;

export const getEndTime = state => state.game.endTime;

export const getRoomId = state => state.game.roomInfo.roomId;

export const getRoomError = state => state.game.error;

export const getRoomMembers = state => state.game.members;

export const isUserKicked = state => state.game.isUserKicked;

export const isRoomOwner = state => state.game.isRoomOwner;