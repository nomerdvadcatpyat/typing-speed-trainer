import React from "react";
import './TrainingPage.scss';
import PropTypes from "prop-types";
import CountDownTimerContainer from "./PrepareStateComponents/CountDownTimer/CountDownTimerContainer";
import {IdleStatePageContainer} from "./IdleStateComponents/IdleStatePageContainer";
import {TypingStatePageContainer} from "./TypingStateComponents/TypingStatePageContainer";
import {EndStatePageContainer} from "./EndStateComponents/EndStatePageContainer";


export const TrainingPage = ({
							 state,
							 hasError,
							 isUserKicked
							 }) => {

	console.log(isUserKicked);

	return (
		<div className="training-page">
			{isUserKicked ? <div> Доигрался </div> : null}
			{
				state.IDLE ?
					<IdleStatePageContainer /> :
				state.PREPARE ?
					<CountDownTimerContainer /> :
				state.TYPING ?
					<TypingStatePageContainer hasError={hasError} /> :
				state.END ?
					<EndStatePageContainer /> :
				null
			}
		</div>
	);
}


TrainingPage.propTypes = {
	text: PropTypes.string,
	inputText: PropTypes.string,
	setInputText: PropTypes.func,
	endState: PropTypes.bool,
	keyboardLayout: PropTypes.array,
	hasError: PropTypes.bool,
	forwardInputRef: PropTypes.object,
	startSameTextButtonClickHandler: PropTypes.func
}
