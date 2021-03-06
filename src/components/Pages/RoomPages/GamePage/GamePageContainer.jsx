import React, {useEffect} from 'react';
import {GamePage} from "./GamePage";
import {connect} from "react-redux";
import {
	getInputText,
	getText, getTypingState,
} from "../../../../store/selectors/gameSelectors";
import {bindActionCreators} from "redux";
import {setEndState, setPrepareState} from "../../../../store/actionCreators/gameActionCreators";

const GamePageContainer = (props) => {

	const hasError = !props.text.startsWith(props.inputText);

	useEffect(() => {
		if(!props.state.END && props.text === props.inputText) {
			props.setEndState();
		}
	});

	return (
		<GamePage
			hasError={hasError}
			state={props.state}
			text={props.text}
			inputText={props.inputText}
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
		setPrepareState: bindActionCreators(setPrepareState, dispatch),
		setEndState: bindActionCreators(setEndState, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePageContainer);