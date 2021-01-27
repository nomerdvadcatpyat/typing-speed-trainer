import React from "react";
import './TextComponent.scss';

export function TextComponent({ text, inputTextLength, lastSymbolError, endState }) {

	const renderText = (text) => {
		return text.split('').map((char, index) => {
			if(index < inputTextLength) {
				return(
					<span key={index} className="passed-symbol">{char}</span>
				);
			}
			else if(index === inputTextLength) {
				if(lastSymbolError) {
					return <span key={index} className="error-symbol">{char}</span>
				}
				else {
					return <span key={index} className="current-symbol">{char}</span>
				}
			}
			else {
				return <span key={index}>{char}</span>
			}
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
