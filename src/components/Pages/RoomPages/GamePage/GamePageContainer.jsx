import React, {useEffect} from 'react';
import {GamePage} from "./GamePage";
import {connect} from "react-redux";
import {
	getInputText,
	getText, getTypingState, isUserKicked,
} from "../../../../store/selectors/gameSelectors";
import {bindActionCreators} from "redux";
import {leaveRoom, setEndState, setIdleState, setPrepareState} from "../../../../store/actionCreators/gameActionCreators";
import {getUser} from "../../../../store/selectors/userSelectors";


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