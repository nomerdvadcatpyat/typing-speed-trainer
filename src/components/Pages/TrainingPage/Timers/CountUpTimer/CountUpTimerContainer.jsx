import React, {useState, useEffect} from 'react';
import {TimerComponent} from "../TimerComponent";
import {connect} from "react-redux";
import {getTimer, getTypingState} from "../../../../../store/selectors/trainingSpeedSelectors";
import {bindActionCreators} from "redux";
import {updateTimer} from "../../../../../store/actionCreators/trainingSpeedActionCreators";



const CountUpTimerContainer = ({ endState, timer, updateTimer }) => {

	const [timerId, setTimerId] = useState(-1);

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
		let timerID
		if(!endState) {
			timerID = setInterval(() => updateTimer(calculateUpdate(timer)), 1000);
			console.log(timerID);
			setTimerId(timerID);
		}
		else {
			console.log('timer ID', timerId);
			clearInterval(timerId);
		}

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
		timer: getTimer(state)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateTimer: bindActionCreators(updateTimer, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUpTimerContainer)