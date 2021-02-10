import React from "react";
import {KeyboardComponent} from "./KeyboardComponent";
import PropTypes from "prop-types";

const isWithShift = (nextChar, keyboardLayout) => {
	for(let row of keyboardLayout) {
		for(let char of row) {
			if (char.withShift === nextChar) {
				return true;
			}
		}
	}
	return false;
}

export const KeyboardComponentContainer = ({text, inputText, keyboardLayout, ...otherProps}) => {
	const nextChar = text.charAt(inputText.length);
	const withShift = isWithShift(nextChar, keyboardLayout);

	return <KeyboardComponent
		nextChar={nextChar}
		withShift={withShift}
		keyboardLayout={keyboardLayout}
		{...otherProps} />
}


KeyboardComponentContainer.propTypes = {
	keyboardLayout: PropTypes.array,
	text: PropTypes.string,
	inputText: PropTypes.string,
	otherProps: PropTypes.array
}