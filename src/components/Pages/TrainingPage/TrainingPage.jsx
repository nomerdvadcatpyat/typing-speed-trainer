import React, {useEffect, useRef} from "react";
import TextComponentContainer from "./TextComponent/TextComponentContainer";
import InputComponentContainer from "./InputComponent/InputComponentContainer";
import KeyboardComponentContainer from "./KeyboardComponent/KeyboardComponentContainer";
import './TrainingPage.scss'


export const TrainingPage = ({ endState, startSameText, clearTraining }) => {

	const keyDownHandler = (e) => {
		if(e.key === "Backspace") e.preventDefault();
	}

	useEffect(() => {
		document.addEventListener('keydown', keyDownHandler);

		return () => {
			clearTraining();
			document.removeEventListener('keydown', keyDownHandler);
		}
	}, [clearTraining]);

	const inputRef = useRef(null);

	const buttonClickHandler = () => {
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

			<KeyboardComponentContainer />
		</div>
	);
}