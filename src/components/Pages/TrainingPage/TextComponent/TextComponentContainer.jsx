import React from 'react';
import {TextComponent} from './TextComponent';
import {connect} from 'react-redux'
import {getEndState, getInputText, getLastSymbolError, getText} from "../../../../store/selectors/trainingPage";
import PropTypes from "prop-types";


const TextComponentContainer = (props) => {
	return (
		<TextComponent {...props}/>
	);
}


const mapStateToProps = (state) => {
	return {
		text: getText(state),
		inputText: getInputText(state),
		lastSymbolError: getLastSymbolError(state),
		endState: getEndState(state)
	}
}

export default connect(mapStateToProps)(TextComponentContainer)


TextComponentContainer.propTypes = {
	text: PropTypes.string,
	inputText: PropTypes.string,
	lastSymbolError: PropTypes.bool,
	endState: PropTypes.bool
}