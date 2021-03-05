import React from 'react';
import {addLeadingZero} from "../../../utils/time/timeUtils";



export const TimerComponent = ({minutes, seconds, className}) => {
	return (
		<div className={`${className && className}`}>
				{addLeadingZero(minutes)}:{addLeadingZero(seconds)}
		</div>
	);
}