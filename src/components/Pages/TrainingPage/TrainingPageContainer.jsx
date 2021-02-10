import React, {useState, useEffect, useRef} from 'react';
import {TrainingPage} from "./TrainingPage";
import {texts} from "../../../utils/texts";
import {keyboardLayouts} from "../../../utils/keyboardLayouts";


export const TrainingPageContainer = () => {

	const [text, setText] = useState(texts["Lorem ipsum"]);
	const [inputText, setInputText] = useState('');
	const [endState, setEndState] = useState(false);
	const [keyboardLayout, setKeyboardLayout] = useState(keyboardLayouts.en);

	const hasError = !text.startsWith(inputText);

	if(!endState && text === inputText) {
		if(!endState) setEndState(true);
		console.log('set end state true', true);
	}

	const clearTraining = () => {
		console.log('clear training');
		setText(texts["Lorem ipsum"]);
		setInputText('');
		setEndState(false);
		setKeyboardLayout(keyboardLayouts.en);
	}

	const startSameText = () => {
		console.log('start same text');
		setText(text);
		setInputText('');
		setEndState(false);
		setKeyboardLayout(keyboardLayouts.en);
	}

	const inputRef = useRef(null);

	const startSameTextButtonClickHandler = () => {
		startSameText();
		inputRef.current.focus();
	}


	useEffect(() => {
		return () => {
			clearTraining();
		}
	}, []);

	return (
		<TrainingPage
			text={text}
			inputText={inputText}
			setInputText={setInputText}
			endState={endState}
			keyboardLayout={keyboardLayout}
			hasError={hasError}
			forwardInputRef={inputRef}
			startSameTextButtonClickHandler={startSameTextButtonClickHandler}
		/>
	);
}