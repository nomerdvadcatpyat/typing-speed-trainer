import React from "react";
import {KeyboardComponent} from "./KeyboardComponent";
import {connect} from 'react-redux'
import {
	getInputText,
	getLastSymbolError,
	getLastSymbolInput,
	getText, getTextLang
} from "../../../../store/selectors/trainingPage";
import {keyboardLayouts} from "../../../../store/keyboardLayouts";
import PropTypes from "prop-types";

const KeyboardComponentContainer = (props) => {
	return <KeyboardComponent {...props} />
}


const mapStateToProps = (state) => {
	const textLang = getTextLang(state);
	const keyboardLayout = keyboardLayouts[textLang];
	return {
		keyboardLayout,
		text: getText(state),
		inputText: getInputText(state),
		lastSymbolInput: getLastSymbolInput(state),
		lastSymbolError: getLastSymbolError(state)
	}
}

export default connect(mapStateToProps)(KeyboardComponentContainer)


KeyboardComponentContainer.propTypes = {
	keyboardLayout: PropTypes.array,
	text: PropTypes.string,
	inputText: PropTypes.string,
	lastSymbolInput: PropTypes.string,
	lastSymbolError: PropTypes.bool,
}