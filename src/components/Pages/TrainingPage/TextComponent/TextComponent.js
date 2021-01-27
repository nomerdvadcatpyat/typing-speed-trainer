import React from "react";
import './TextComponent.scss';

export class TextComponent extends React.Component {

	keyDownHandler = (e) => {
		if(e.key === "Shift") return;
		if(e.key === "Backspace") e.preventDefault();

		const { currentSymbolIndex, text, changeCurrentSymbolIndex, setEndTypingState } = this.props;

		const currentSpan = document.querySelector(`[id='${currentSymbolIndex}']`);
		const currentKey = currentSpan.textContent;

		if(currentKey === e.key) {
			currentSpan.classList.remove("error-symbol");
			currentSpan.classList.remove("current-symbol");
			currentSpan.classList.add("passed-symbol");
			if(currentSymbolIndex === text.length - 1) {
				setEndTypingState();
				return;
			}
			changeCurrentSymbolIndex(currentSymbolIndex + 1);
		}
		else {
			currentSpan.classList.remove("current-symbol");
			currentSpan.classList.add("error-symbol");
		}
	};

	componentDidMount() {
		document.querySelector("[id='0']").classList.add("current-symbol");
		document.addEventListener('keydown', this.keyDownHandler);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const { currentSymbolIndex } = this.props;

		const currentSpan = document.querySelector(`[id='${currentSymbolIndex}']`);
		currentSpan.classList.add("current-symbol");
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.keyDownHandler)
	}

	renderText = (text) => {
		return text.map((char, index) => {
				return(
					<span key={index} id={index}>{char}</span>
				);
			});
	}

	renderEndText = (text) => {
		return text.map((char, index) => {
			return(
				<span className="end-symbol" key={index} id={index}>{char}</span>
			);
		});
	}

	render() {
		const {text, endState} = this.props;

		return (
			<div className="text-container">
				{
					endState ?
						this.renderEndText(text) :
						this.renderText(text)
				}
			</div>
		);
	}
}