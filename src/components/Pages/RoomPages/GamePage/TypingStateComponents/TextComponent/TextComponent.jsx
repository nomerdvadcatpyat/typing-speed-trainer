import React from "react";
import './TextComponent.scss';


export function TextComponent({ text, inputText, className, firstErrorSymbolIndex }) {

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

	return (
		<div className={`text-container ${className && className}`}>
			{renderText(text)}
		</div>
	);
}