import React from "react";
import './KeyboardComponent.scss'

export const KeyboardComponent = ({ keyboardLayout, text, inputText, lastSymbolInput, lastSymbolError }) => {
	const nextChar = text.charAt(inputText.length);

	console.log(lastSymbolInput)

	let withShift = false;

	const generateKeyboardRow = (chars) => {
		return chars.map(char => {
			const classes = ["keyboard__char-key"];

			if(char === "Shift") {
				const nextCharNeedShift = withShift ? 'keyboard__next-char' : ''
				classes.push("keyboard__char-key_shift", nextCharNeedShift);
				return <span key={char} className={classes.join(' ')}> {char} </span>
			}
			if(char === "Space") {
				classes.push("keyboard__char-key_space")
				if(nextChar === ' ') classes.push("keyboard__next-char")
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
				classes.push("keyboard__last-char_error")
			}
			else if(char.withoutShift === nextChar || char.withShift === nextChar) {
				if(char.withShift === nextChar) withShift = true
				classes.push("keyboard__next-char");
			}

			// if(char === lastSymbolInput && lastSymbolError) {
			// 	classes.push("keyboard__last-char_error")
			// }
			// else if(char === nextChar) classes.push("keyboard__next-char")

			return <span key={resChar} className={classes.join(' ')}> {resChar} </span>
		});
	}

	return (
		<div className="keyboard">
			<div className="first-char-row keyboard__char-row">
				{ generateKeyboardRow(keyboardLayout.firstRow) }
			</div>

			<div className="second-char-row keyboard__char-row">
				{ generateKeyboardRow(keyboardLayout.secondRow) }
			</div>

			<div className="third-char-row keyboard__char-row">
				{ generateKeyboardRow(keyboardLayout.thirdRow) }
			</div>

			<div className="fourth-char-row keyboard__char-row">
				{ generateKeyboardRow(keyboardLayout.fourthRow) }
			</div>

			<div className="fifth-char-row keyboard__char-row">
				{ generateKeyboardRow(keyboardLayout.fifthRow) }
			</div>
		</div>
	);
}