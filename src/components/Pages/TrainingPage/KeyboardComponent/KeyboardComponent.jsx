import React from "react";
import './KeyboardComponent.scss'
import PropTypes from "prop-types";

const isWithShift = (nextChar, keyboardLayout) => {
	for(let row of keyboardLayout) {
		for(let char of row) {
			if (char.withShift === nextChar) {
				return true;
			}
		}
	}

	return false;
}

export const KeyboardComponent = ({ keyboardLayout, text, inputText, lastSymbolInput, lastSymbolError }) => {
	const nextChar = text.charAt(inputText.length);

	const withShift = isWithShift(nextChar, keyboardLayout);

	const generateKeyboardRow = (chars) => {
		return chars.map(char => {
			const classes = ["keyboard__char-key"];

			if(char === "Shift") {
				classes.push("keyboard__char-key_shift");
				if(withShift) classes.push("keyboard__next-char");
				return <span key={char} className={classes.join(' ')}> {char} </span>;
			}
			if(char === "Space") {
				classes.push("keyboard__char-key_space");
				if(nextChar === ' ') classes.push("keyboard__next-char");
				return <span key={char} className={classes.join(' ')}> {char} </span>
			}

			let resChar;
			if(char.withShift.match(/[a-z]/i)) {
				resChar = char.withoutShift;
			}
			else {
				resChar = char.withoutShift + ' ' + char.withShift;
				classes.push("keyboard__char-key_with-shift");
			}

			if(lastSymbolError && (char.withoutShift === lastSymbolInput || char.withShift === lastSymbolInput)) {
				classes.push("keyboard__last-char_error");
			}
			else if(char.withoutShift === nextChar || char.withShift === nextChar) {
				classes.push("keyboard__next-char");
			}

			return <span key={resChar} className={classes.join(' ')}> {resChar} </span>
		});
	}


	const generateKeyboardRows = (keyboardLayout) => {
		return  (
			<>
				<div className="first-char-row keyboard__char-row">
					{ generateKeyboardRow(keyboardLayout[0]) }
				</div>

				<div className="second-char-row keyboard__char-row">
					{ generateKeyboardRow(keyboardLayout[1]) }
				</div>

				<div className="third-char-row keyboard__char-row">
					{ generateKeyboardRow(keyboardLayout[2]) }
				</div>

				<div className="fourth-char-row keyboard__char-row">
					{ generateKeyboardRow(keyboardLayout[3]) }
				</div>

				<div className="fifth-char-row keyboard__char-row">
					{ generateKeyboardRow(keyboardLayout[4]) }
				</div>
			</>
		);
	}

	return (
		<div className="keyboard">
			{generateKeyboardRows(keyboardLayout)}
		</div>
	);
}


KeyboardComponent.propTypes = {
	keyboardLayout: PropTypes.array,
	text: PropTypes.string,
	inputText: PropTypes.string,
	lastSymbolInput: PropTypes.string,
	lastSymbolError: PropTypes.bool,
}