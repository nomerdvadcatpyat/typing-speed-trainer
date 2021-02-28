import React, {useState, useEffect} from 'react';
import {TimerComponent} from "../../../../../UtilComponents/Timer/TimerComponent";
import {connect} from "react-redux";
import {getTypingState} from "../../../../../../store/selectors/gameSelectors";


const CountUpTimerContainer = ({ endState }) => {

	const [timerId, setTimerId] = useState(-1);
	const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });

	console.log('END STATE', endState, timerId)

	function calculateUpdate(timer) {
		if(timer.seconds === 59) {
			timer.minutes += 1;
			timer.seconds = 0;
		}
		else timer.seconds += 1;

		return {...timer};
	}

	useEffect(() => {
		let timerID;
		if(!endState) {
			timerID = setInterval(() => setTimer(calculateUpdate(timer)), 1000);
			console.log(timerID);
			setTimerId(timerID);
		}
		else clearInterval(timerId);

		return () => {
			clearInterval(timerID);
		}
	}, [endState]);


	return (
			<>
				{ endState ? <p> Ваше время: </p> : null }

				<TimerComponent
					seconds={timer.seconds}
					minutes={timer.minutes}
				/>
			</>
	)
}

const mapStateToProps = state => {
	return {
		endState: getTypingState(state).END,
	}
}

export default connect(mapStateToProps)(CountUpTimerContainer)