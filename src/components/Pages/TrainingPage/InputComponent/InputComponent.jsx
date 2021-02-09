import React, {useEffect} from 'react';
import './InputComponent.scss'

export const InputComponent = ({ forwardRef, text, inputText, onChange, setEndTypingState }) => {

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
				value={inputText}
				onChange={e => onChange(e.target.value)}
				onPaste={e => e.preventDefault()}
			/>
		</div>
	);
}