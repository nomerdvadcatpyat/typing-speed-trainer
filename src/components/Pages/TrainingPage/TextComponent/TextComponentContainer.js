import React from 'react';
import {TextComponent} from './TextComponent';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {changeCurrentSymbolIndex, setEndTypingState} from "../../../../store/actionCreators/trainingPageActions";


const TextComponentContainer = (props) => {
	return (
		<TextComponent {...props}/>
	);
}

const mapStateToProps = (state) => {
	return {
		text: state.trainingPage.text.replaceAll(/[\r\n\t]/g, '').split(''),
		currentSymbolIndex: state.trainingPage.currentSymbolIndex,
		endState: state.trainingPage.endState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeCurrentSymbolIndex: bindActionCreators(changeCurrentSymbolIndex, dispatch),
		setEndTypingState: bindActionCreators(setEndTypingState, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TextComponentContainer)