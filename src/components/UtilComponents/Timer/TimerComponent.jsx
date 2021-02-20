import React from 'react';
import './TimerComponent.scss';
import {addLeadingZero} from "../../../utils/time/timeUtils";



export const TimerComponent = ({minutes, seconds}) => {
	return (
		<div className="timer">
				<p> {addLeadingZero(minutes)}:{addLeadingZero(seconds)} </p>
		</div>
	);
}