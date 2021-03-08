import {useEffect, useState} from "react";
import './RoomInfotext.scss';


export const RoomInfoText = ({className}) => {
	const [text, setText] = useState('');
	const [isTyping, setTyping] = useState(true);
	const [intervalId, setIntervalId] = useState(null);

	const endtext = "Тренируйте скорость печати или соревнуйтесь с другими людьми.";

	useEffect(() => {
		setIntervalId(setInterval(() => setText(prevText => prevText + endtext[prevText.length]), 60));
	}, []);


	useEffect(() => {
		return () => {
			if(intervalId) clearInterval(intervalId);
		}
	}, [intervalId]);

	useEffect(() => {
		if(text.length === endtext.length) {
			setTyping(false);
			clearInterval(intervalId);
		}
	}, [text]);



	return <div className={`room-info-text ${className} ${isTyping && 'room-info-text_typing'}`}> {text} </div>
}