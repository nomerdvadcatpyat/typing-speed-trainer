import React from "react";
import './TextComponent.scss';
import PropTypes from "prop-types";

export function TextComponent({ text, inputText, endState, firstErrorSymbolIndex }) {

	const renderText = (text) => {
		return text.split('').map((char, index) => {
			if(index < firstErrorSymbolIndex)
				return <span key={index} className="passed-symbol">{char}</span>

			else if(index >= firstErrorSymbolIndex && index < inputText.length)
				return <span key={index} className="error-symbol">{char}</span>

			else if(firstErrorSymbolIndex === inputText.length && index === inputText.length)
				return <span key={index} className="current-symbol">{char}</span>

			else
				return <span key={index}>{char}</span>
		});
	}

	const renderEndText = (text) => {
		return text.split('').map((char, index) => {
			return(
				<span className="end-symbol" key={index} id={index}>{char}</span>
			);
		});
	}


	return (
		<div className="text-container">
			{
				endState ?
					renderEndText(text) :
					renderText(text)
			}
		</div>
	);
}


TextComponent.propTypes = {
	text: PropTypes.string,
	inputText: PropTypes.string,
	endState: PropTypes.bool,
	firstErrorSymbolIndex: PropTypes.number
}