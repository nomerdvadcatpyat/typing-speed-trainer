import React from 'react';
import {TextComponent} from './TextComponent';
import PropTypes from "prop-types";


export const TextComponentContainer = ({inputText, hasError, text, ...otherProps}) => {

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


TextComponentContainer.propTypes = {
	text: PropTypes.string,
	inputText: PropTypes.string,
	hasError: PropTypes.bool,
	otherProps: PropTypes.array
}