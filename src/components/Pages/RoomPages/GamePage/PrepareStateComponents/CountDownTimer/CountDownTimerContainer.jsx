import React, {useState, useEffect} from 'react';
import {TimerComponent} from "../../../../../UtilComponents/Timer/TimerComponent";


const CountDownTimerContainer = props => {

	const [countDown, setCountDown] = useState(5);

	useEffect(() => {
		const timerId = setInterval(() => {
			if(countDown !== 0)
				setCountDown(preventSecond => preventSecond - 1)
		}, 1000);

		return () => clearInterval(timerId);
	}, []);

	return <TimerComponent minutes={0} seconds={countDown} {...props} />
}

export default CountDownTimerContainer;