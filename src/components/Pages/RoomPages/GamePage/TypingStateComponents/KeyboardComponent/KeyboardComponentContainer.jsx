import React from "react";
import {KeyboardComponent} from "./KeyboardComponent";
import {connect} from "react-redux";
import {getInputText, getKeyboardLayout, getText} from "../../../../../../store/selectors/gameSelectors";

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

const KeyboardComponentContainer = ({text, inputText, keyboardLayout, ...otherProps}) => {
	const nextChar = text.charAt(inputText.length);
	const withShift = isWithShift(nextChar, keyboardLayout);

	return <KeyboardComponent
		nextChar={nextChar}
		withShift={withShift}
		keyboardLayout={keyboardLayout}
		{...otherProps} />
}

const mapStateToProps = state => {
	return {
		text: getText(state),
		inputText: getInputText(state),
		keyboardLayout: getKeyboardLayout(state)
	}
}

export default connect(mapStateToProps)(KeyboardComponentContainer)