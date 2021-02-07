import React from 'react';
import {TextComponent} from './TextComponent';
import {connect} from 'react-redux'
import {getEndState, getInputText, getLastSymbolError, getText} from "../../../../store/selectors/trainingPage";



const TextComponentContainer = (props) => {
	return (
		<TextComponent {...props}/>
	);
}

const mapStateToProps = (state) => {
	return {
		text: getText(state),
		inputTextLength: getInputText(state).length,
		lastSymbolError: getLastSymbolError(state),
		endState: getEndState(state)
	}
}


export default connect(mapStateToProps)(TextComponentContainer)