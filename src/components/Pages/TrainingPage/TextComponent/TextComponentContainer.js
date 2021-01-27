import React from 'react';
import {TextComponent} from './TextComponent';
import {connect} from 'react-redux'



const TextComponentContainer = (props) => {
	return (
		<TextComponent {...props}/>
	);
}

const mapStateToProps = (state) => {
	return {
		text: state.trainingPage.text,
		inputTextLength: state.trainingPage.inputText.length,
		// currentSymbolIndex: state.trainingPage.currentSymbolIndex,
		lastSymbolError: state.trainingPage.lastSymbolError,
		endState: state.trainingPage.endState
	}
}


export default connect(mapStateToProps)(TextComponentContainer)