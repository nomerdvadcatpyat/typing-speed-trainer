import React, {useEffect, useRef} from "react";
import TextComponentContainer from "./TextComponent/TextComponentContainer";
import InputComponentContainer from "./InputComponent/InputComponentContainer";
import {KeyboardComponent} from "./KeyboardComponent/KeyboardComponent";
import './TrainingPage.scss'


export const TrainingPage = ({ endState, startSameText }) => {

	const keyDownHandler = (e) => {
		if(e.key === "Backspace") e.preventDefault();
	}

	useEffect(() => {
		document.addEventListener('keydown', keyDownHandler);

		return () => document.removeEventListener('keydown', keyDownHandler)
	}, []);

	const inputRef = useRef(null);

	const buttonClickHandler = (e) => {
		startSameText();

		inputRef.current.focus();
	}

	return (
		<div className="training-page">
			<TextComponentContainer />
			<InputComponentContainer forwardRef={inputRef}/>

			{
				endState ?
					(
						<button autoFocus={true} className="training-page__repeat-button" onClick={buttonClickHandler}>
							Заново
						</button>
					) :
					null
			}

			<KeyboardComponent />
		</div>
	);
}