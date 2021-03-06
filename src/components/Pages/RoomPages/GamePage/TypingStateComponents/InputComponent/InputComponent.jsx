import React from 'react';
import './InputComponent.scss'

export const InputComponent = ({ inputText, className, setInputText, hasError }) => {
	return (
		<div className={`input-wrap ${className}`}>
			<input
				autoFocus={true}
				className={`text-input ${hasError ? 'error-input' : ''}`}
				value={inputText}
				onChange={e => setInputText(e.target.value)}
				onPaste={e => e.preventDefault()}
			/>
		</div>
	);
}