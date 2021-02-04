import React from "react";
import {KeyboardComponent} from "./KeyboardComponent";
import {connect} from 'react-redux'

const KeyboardComponentContainer = (props) => {
	return <KeyboardComponent {...props} />
}

const mapStateToProps = (state) => {
	return {
		keyboardLayout: state.trainingPage.keyboardLayout,
		text: state.trainingPage.text,
		inputText: state.trainingPage.inputText,
		lastSymbolInput: state.trainingPage.lastSymbolInput,
		lastSymbolError: state.trainingPage.lastSymbolError
	}
}

export default connect(mapStateToProps)(KeyboardComponentContainer)