import React from 'react';
import {TextComponent} from './TextComponent';
import {connect} from "react-redux";
import {getInputText, getText, getTypingState} from "../../../../../../store/selectors/gameSelectors";


export const TextComponentContainer = ({inputText, text, hasError, ...otherProps}) => {

	let firstErrorSymbolIndex = inputText.length;
	if(hasError) {
		for(let i = 0; i < inputText.length; i++) {
			if(inputText[i] !== text[i]) {
				firstErrorSymbolIndex = i;
				break;
			}
		}
	}

	return (
		<TextComponent
			firstErrorSymbolIndex={firstErrorSymbolIndex}
			text={text}
			inputText={inputText}
			{...otherProps}/>
	);
}

const mapStateToProps = state => {
	return {
		text: getText(state),
		inputText: getInputText(state),
		endState: getTypingState(state).END
	}
}

export default connect(mapStateToProps)(TextComponentContainer)
