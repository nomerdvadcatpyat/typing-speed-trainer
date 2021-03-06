import React, {useState, useEffect} from 'react';
import {TimerComponent} from "../../../../../UtilComponents/Timer/TimerComponent";
import {connect} from "react-redux";
import {getTypingState} from "../../../../../../store/selectors/gameSelectors";
import './CountUpTimer.scss';

const CountUpTimerContainer = ({ endState, className, ...otherProps }) => {

	const [timerId, setTimerId] = useState(-1);
	const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });

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
					className={`count-up-timer ${className}`}
					{...otherProps}
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