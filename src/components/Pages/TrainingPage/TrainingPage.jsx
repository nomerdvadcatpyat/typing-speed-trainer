import React from "react";
import TextComponentContainer from "./TypingStateComponents/TextComponent/TextComponentContainer";
import InputComponent from "./TypingStateComponents/InputComponent/InputComponentContainer";
import KeyboardComponentContainer from "./TypingStateComponents/KeyboardComponent/KeyboardComponentContainer";
import './TrainingPage.scss';
import PropTypes from "prop-types";
import CountUpTimerContainer from "./TypingStateComponents/CountUpTimer/CountUpTimerContainer";
import StartSameTextButtonContainer from "./EndStateComponents/StartSameTextButton/StartSameTextButtonContainer";
import CountDownTimerContainer from "./PrepareStateComponents/CountDownTimer/CountDownTimerContainer";
import SelectTextFormContainer from "./IdleStateComponents/SelectTextForm/SelectTextFormContainer";


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
					<SelectTextFormContainer /> :
					state.PREPARE ?
						<>
							<CountDownTimerContainer />
						</> :
							state.TYPING ?
								<>
									<CountUpTimerContainer />
									<TextComponentContainer hasError={hasError} />
									<InputComponent hasError={hasError} />
									<KeyboardComponentContainer hasError={hasError} />
								</> :
							state.END ?
									<>
										<StartSameTextButtonContainer />
										{/*<button className="training-page_switch-text-button">*/}
										{/*	Выбрать другой текст*/}
										{/*</button>*/}
									</> : null
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
