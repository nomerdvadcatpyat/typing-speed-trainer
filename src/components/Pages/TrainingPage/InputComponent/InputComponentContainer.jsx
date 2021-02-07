import React from 'react';
import {InputComponent} from "./InputComponent";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {changeInputText, setEndTypingState} from "../../../../store/actionCreators/trainingPageActionCreators";
import {getInputText, getText} from "../../../../store/selectors/trainingPage";


const InputComponentContainer = (props) => {
	return (
		<InputComponent {...props} />
	);
}

const mapStateToProps = (state) => {
	return {
		text: getText(state),
		inputText: getInputText(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: bindActionCreators(changeInputText, dispatch),
		setEndTypingState: bindActionCreators(setEndTypingState, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponentContainer);