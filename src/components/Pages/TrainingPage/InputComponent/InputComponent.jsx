import React, {useEffect} from 'react';
import './InputComponent.scss'
import {ControlledInput} from "../../../ControlledInput/ControlledInput";

export const InputComponent = ({ forwardRef, text, inputText, onChange, setEndTypingState }) => {

	useEffect(() => {
		if(inputText && inputText.length === text.length) {
			setEndTypingState();
		}
	});

	return (
		<div className="input-wrap">
			<ControlledInput
				forwardRef={forwardRef}
				autoFocus={true}
				className="text-input"
				value={inputText}
				onChange={onChange}
				onPaste={e => e.preventDefault()}
			/>
		</div>
	);
}