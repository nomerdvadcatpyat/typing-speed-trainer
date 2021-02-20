import React from 'react';
import {InputComponent} from "./InputComponent";
import {connect} from "react-redux";
import {getInputText} from "../../../../../store/selectors/trainingSpeedSelectors";
import {bindActionCreators} from "redux";
import {setInputText} from "../../../../../store/actionCreators/trainingSpeedActionCreators";

const InputComponentContainer = (props) => {
	return <InputComponent {...props}/>
}

const mapStateToProps = state => {
	return {
		inputText: getInputText(state)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setInputText: bindActionCreators(setInputText, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponentContainer)