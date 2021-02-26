import React from "react";
import './GamePage.scss';
import PropTypes from "prop-types";
import CountDownTimerContainer from "./PrepareStateComponents/CountDownTimer/CountDownTimerContainer";
import {TypingStatePageContainer} from "./TypingStateComponents/TypingStatePageContainer";
import EndStatePageContainer from "./EndStateComponents/EndStatePageContainer";
import ProgressBarContainer from "./TypingStateComponents/ProgressBar/ProgressBarContainer";


export const GamePage = ({
							 state,
							 hasError
							 }) => {

	return (
		<div className="training-page">
			{
				state.PREPARE ?
					<CountDownTimerContainer /> :
				state.TYPING ?
					<TypingStatePageContainer hasError={hasError} /> :
				state.END ?
					<EndStatePageContainer /> :
				null
			}
			<ProgressBarContainer />
		</div>
	);
}


GamePage.propTypes = {
	text: PropTypes.string,
	inputText: PropTypes.string,
	setInputText: PropTypes.func,
	endState: PropTypes.bool,
	keyboardLayout: PropTypes.array,
	hasError: PropTypes.bool,
	forwardInputRef: PropTypes.object,
	startSameTextButtonClickHandler: PropTypes.func
}
