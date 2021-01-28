import React, {useEffect} from 'react';
import './InputComponent.scss'

export const InputComponent = ({ forwardRef, text, inputText, changeInputText, setEndTypingState }) => {

	const inputChangeHandler = (e) => {
		changeInputText(e.target.value);
	}

	useEffect(() => {
		if(inputText && inputText.length === text.length) {
			setEndTypingState();
		}
	});

	return (
		<div className="input-wrap">
			<input
				ref={forwardRef}
				autoFocus={true}
				className="text-input"
				type="text"
				value={inputText}
				onChange={inputChangeHandler}
			/>
		</div>
	);
}