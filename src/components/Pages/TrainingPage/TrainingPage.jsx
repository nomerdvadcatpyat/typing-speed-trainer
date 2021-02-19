import React from "react";
import TextComponentContainer from "./TextComponent/TextComponentContainer";
import InputComponent from "./InputComponent/InputComponentContainer";
import KeyboardComponentContainer from "./KeyboardComponent/KeyboardComponentContainer";
import './TrainingPage.scss';
import PropTypes from "prop-types";
import CountUpTimerContainer from "./Timers/CountUpTimer/CountUpTimerContainer";
import StartSameTextButtonContainer from "./Buttons/StartSameTextButton/StartSameTextButtonContainer";
import CountDownTimerContainer from "./Timers/CountDownTimer/CountDownTimerContainer";
import SelectTextFormContainer from "./SelectTextForm/SelectTextFormContainer";


export const TrainingPage = ({
	                             state,
	                             hasError
                             }) => {

	return (
		<div className="training-page">

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
