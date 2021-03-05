import React from "react";
import './KeyboardComponent.scss'
import PropTypes from "prop-types";


export const KeyboardComponent = ({ keyboardLayout, nextChar, withShift, hasError, className }) => {

	const resolveSpecialKey = (key) => {
		const classes = ["keyboard__char-key"];

		switch (key.specialKey) {
			case "Backspace": {
				classes.push("keyboard__char-key_backspace");
				if(hasError) classes.push("keyboard__next-char");
				break;
			}
			case "LeftShift": {
				classes.push("keyboard__char-key_left-shift");
				if(withShift && !hasError) classes.push("keyboard__next-char");
				break;
			}
			case "RightShift": {
				classes.push("keyboard__char-key_right-shift");
				if(withShift && !hasError) classes.push("keyboard__next-char");
				break;
			}
			case "Space": {
				classes.push("keyboard__char-key_space");
				if(nextChar === ' ' && !hasError) classes.push("keyboard__next-char");
				break;
			}
			default: break;
		}

		return <span key={key.specialKey} className={classes.join(' ')}> {key.specialKey} </span>
	}


	const generateKeyboardRow = (chars) => {
		return chars.map(char => {
			const classes = ["keyboard__char-key"];

			if(char.specialKey) {
				return resolveSpecialKey(char);
			}

			let resChar;
			if(char.withShift.match(/[a-z]/i)) {
				resChar = char.withoutShift;
			}
			else {
				resChar = char.withoutShift + ' ' + char.withShift;
				classes.push("keyboard__char-key_with-shift");
			}

			if(!hasError && (char.withoutShift === nextChar || char.withShift === nextChar)) {
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
		<div className={`keyboard ${className && className}`}>
			{generateKeyboardRows(keyboardLayout)}
		</div>
	);
}


KeyboardComponent.propTypes = {
	keyboardLayout: PropTypes.array,
	nextChar: PropTypes.string,
	withShift: PropTypes.bool,
	hasError: PropTypes.bool
}