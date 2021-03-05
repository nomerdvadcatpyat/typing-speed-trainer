import React from "react";
import './GamePage.scss';
import PropTypes from "prop-types";
import CountDownTimerContainer from "./PrepareStateComponents/CountDownTimer/CountDownTimerContainer";
import EndStatePageContainer from "./EndStateComponents/EndStatePageContainer";
import ProgressBarContainer from "./TypingStateComponents/ProgressBar/ProgressBarContainer";
import {TypingStatePage} from "./TypingStateComponents/TypingStatePage";


export const GamePage = ({
	                         state,
	                         hasError,
                         }) => {

	return (
		<div className="game-page">
			{
				state.PREPARE ?
					<CountDownTimerContainer className="game-page__countdown-timer"/> :
					state.TYPING ?
						<TypingStatePage className="game-page__typing-state-container" hasError={hasError}/> :
						state.END ?
							<EndStatePageContainer className="game-page__typing-state-container"/> :
							null
			}
			{(state.TYPING || state.END) &&
			<ProgressBarContainer className="game-page__progress-bar"/>}

		</div>
	);
}

