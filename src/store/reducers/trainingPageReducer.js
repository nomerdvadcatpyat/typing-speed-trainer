import { CHANGE_INPUT_TEXT, SET_END_TYPING_STATE, START_NEW_TEXT} from "../actionTypes";

const initialState = {
	text: `Lorem ipsum`.replaceAll(/[\r\n\t]/g, ''),
	inputText: '',
	lastSymbolError: false,
	endState: false
}

export const trainingPageReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_END_TYPING_STATE: {
			console.log('reducer end state');
			return {...state, endState: true}
		}

		case START_NEW_TEXT: {
			console.log('reducer start new text');
			return {...state, text: action.payload, endState: false, inputText: '' }
		}

		case CHANGE_INPUT_TEXT: {
			console.log('reducer change input text');
			const newInputText = action.payload;
			const substrText = state.text.substr(0, newInputText.length);

			if(substrText === newInputText) {
				return { ...state, inputText: newInputText, lastSymbolError: false }
			}

			return {...state, lastSymbolError: true };
		}

		default: return state
	}
}