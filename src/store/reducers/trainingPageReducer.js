import {TRAINING_CHANGE_INPUT_TEXT, TRAINING_CLEAR, TRAINING_SET_END_TYPING_STATE, TRAINING_START_NEW_TEXT} from "../actionTypes";
import {keyboardLayouts} from "../keyboardLayouts";

const initialState = {
	text: `Lorem ipsum, . ! & * ??<><>?BCXZA"?? "ASD`.replaceAll(/[\r\n\t]/g, ''),
	textLang: 'en',
	inputText: '',
	lastSymbolInput: '',
	lastSymbolError: false,
	endState: false
}

export const trainingPageReducer = (state = initialState, action) => {
	switch (action.type) {

		case TRAINING_SET_END_TYPING_STATE: {
			return {...state, endState: true}
		}

		case TRAINING_START_NEW_TEXT: {
			return {...state, text: action.payload.text, textLang: action.payload.lang, endState: false, inputText: '' }
		}

		case TRAINING_CHANGE_INPUT_TEXT: {
			const newInputText = action.payload;
			const substrText = state.text.substr(0, newInputText.length);
			const lastSymbolInput = newInputText.charAt(newInputText.length - 1);

			if(substrText === newInputText) {
				return { ...state, inputText: newInputText, lastSymbolInput, lastSymbolError: false }
			}

			return {...state, lastSymbolInput, lastSymbolError: true };
		}


		case TRAINING_CLEAR: {
			return {...initialState}
		}

		default: return state
	}
}