import React from 'react';
import './InputComponent.scss'
import PropTypes from "prop-types";

export const InputComponent = ({ inputText, setInputText, hasError }) => {
	return (
		<div className="input-wrap">
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


InputComponent.propTypes = {
	hasErrors: PropTypes.bool,
	setInputText: PropTypes.func,
	inputText: PropTypes.string,
	forwardRef: PropTypes.object
}