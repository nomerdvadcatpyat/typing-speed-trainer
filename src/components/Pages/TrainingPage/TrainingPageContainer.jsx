import React, {useEffect} from 'react';
import {TrainingPage} from "./TrainingPage";
import {connect} from "react-redux";
import {
	getInputText,
	getText, getTypingState
} from "../../../store/selectors/trainingSpeedSelectors";
import {bindActionCreators} from "redux";
import {setEndState, setIdleState} from "../../../store/actionCreators/trainingSpeedActionCreators";



const TrainingPageContainer = (props) => {

	const hasError = !props.text.startsWith(props.inputText);

	if(props.state.TYPING && props.text === props.inputText) {
		props.setEndState();
	}

	useEffect(() => {
		return () => props.setIdleState();
	}, []);

	return (
		<TrainingPage
			hasError={hasError}
			state={props.state}
		/>
	);
}


const mapStateToProps = state => {
	return {
		text: getText(state),
		inputText: getInputText(state),
		state: getTypingState(state)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setEndState: bindActionCreators(setEndState, dispatch),
		setIdleState: bindActionCreators(setIdleState, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingPageContainer);