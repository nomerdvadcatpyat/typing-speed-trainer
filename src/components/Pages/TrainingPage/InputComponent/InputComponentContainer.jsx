import React from 'react';
import {InputComponent} from "./InputComponent";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {changeInputText, setEndTypingState} from "../../../../store/actionCreators/trainingPageActionCreators";


const InputComponentContainer = (props) => {
	return (
		<InputComponent {...props} />
	);
}

const mapStateToProps = (state) => {
	return {
		text: state.trainingPage.text,
		inputText: state.trainingPage.inputText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: bindActionCreators(changeInputText, dispatch),
		setEndTypingState: bindActionCreators(setEndTypingState, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponentContainer);