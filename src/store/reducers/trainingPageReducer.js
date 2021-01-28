import {CHANGE_INPUT_TEXT, CLEAR_TRAINING, SET_END_TYPING_STATE, START_NEW_TEXT} from "../actionTypes";
import {keyboardLayouts} from "../keyboardLayouts";

const initialState = {
	text: `Lorem ipsum, . ! & * ???? "ASD`.replaceAll(/[\r\n\t]/g, ''),
	textLang: 'en',
	keyboardLayout: keyboardLayouts.en,
	inputText: '',
	lastSymbolInput: '',
	lastSymbolError: false,
	endState: false
}

export const trainingPageReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_END_TYPING_STATE: {
			return {...state, endState: true}
		}

		case START_NEW_TEXT: {
			return {...state, text: action.payload.text, textLang: action.payload.lang, endState: false, inputText: '' }
		}

		case CHANGE_INPUT_TEXT: {
			const newInputText = action.payload;
			const substrText = state.text.substr(0, newInputText.length);
			const lastSymbolInput = newInputText.charAt(newInputText.length - 1);

			if(substrText === newInputText) {
				return { ...state, inputText: newInputText, lastSymbolInput, lastSymbolError: false }
			}

			return {...state, lastSymbolInput, lastSymbolError: true };
		}


		case CLEAR_TRAINING: {
			return {...initialState}
		}

		default: return state
	}
}