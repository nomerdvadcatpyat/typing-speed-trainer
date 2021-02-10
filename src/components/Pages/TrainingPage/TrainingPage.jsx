import React from "react";
import {TextComponentContainer} from "./TextComponent/TextComponentContainer";
import {InputComponent} from "./InputComponent/InputComponent";
import {KeyboardComponentContainer} from "./KeyboardComponent/KeyboardComponentContainer";
import './TrainingPage.scss';
import PropTypes from "prop-types";



export const TrainingPage = ({
															text,
															inputText,
															setInputText,
															endState,
															keyboardLayout,
															hasError,
															forwardInputRef,
															startSameTextButtonClickHandler
                             }) => {

	return (
		<div className="training-page">
			<TextComponentContainer
				text={text}
				inputText={inputText}
				endState={endState}
				hasError={hasError}
			/>


			<InputComponent
				forwardRef={forwardInputRef}
				inputText={inputText}
				setInputText={setInputText}
				hasError={hasError}
			/>


			{
				endState ?
					(
						<button autoFocus={true} className="training-page__repeat-button" onClick={startSameTextButtonClickHandler}>
							Заново
						</button>
					) : null
			}

			<KeyboardComponentContainer
				text={text}
				inputText={inputText}
				keyboardLayout={keyboardLayout}
				hasError={hasError}
			/>
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
