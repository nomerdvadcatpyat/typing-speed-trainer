import React from 'react';
import {InputComponent} from "./InputComponent";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {changeInputText, setEndTypingState} from "../../../../store/actionCreators/trainingPageActionCreators";
import {getInputText, getText} from "../../../../store/selectors/trainingPage";
import PropTypes from "prop-types";


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


InputComponentContainer.propTypes = {
	text: PropTypes.string,
	inputText: PropTypes.string,
	onChange: PropTypes.func,
	setEndTypingState: PropTypes.func,
	forwardRef: PropTypes.object
}