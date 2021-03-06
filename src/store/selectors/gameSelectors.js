

export const getTypingState = state => state.game.typingState;

export const getTextTitle = state => state.game.roomInfo.textTitle;

export const getMaxMembersCount = state => state.game.roomInfo.maxMembersCount;

export const getText = state => state.game.roomInfo.text;

export const getTextLength = state => getText(state).length;

export const getLanguage = state => state.game.roomInfo.language;

export const getInputText = state => state.game.inputText;

export const getKeyboardLayout = state => state.game.roomInfo.keyboardLayout;

export const getIsErrorTyping = state => state.game.isErrorTyping;

export const getEndTime = state => state.game.endTime;

export const getRoomId = state => state.game.roomInfo.roomId;

export const getRoomError = state => state.game.error;

export const getRoomMembers = state => state.game.members;

export const isRoomOwner = state => state.game.isRoomOwner;

export const getPoints = state => state.game.points;

export const getPlace = state => state.game.place;

export const getAverageSpeed = state => state.game.averageSpeed;
