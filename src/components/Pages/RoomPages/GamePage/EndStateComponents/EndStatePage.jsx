import React from "react";
import './EndStatePage.scss';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {StyledButton} from "../../../../UtilComponents/StyledButton/StyledButton";

export const EndStatePage = props => {
	return (
		<div className="end-state-container">
			<p> Ваше время: {props.endTime} </p>
			{props.members.length > 1 ? (
				<>
					<p> Место: {props.place} из {props.members.length} </p>
					<p> Получено очков: {props.points} </p>
				</>
			) : (
				<p> Получено очков за одиночную игру: {props.points} </p>
			)}
			<p> Средняя скорость печати: {props.averageSpeed} знаков в минуту</p>
			<Link to="/searchRoom">
				<StyledButton > К списку серверов </StyledButton>
			</Link>

		</div>

	);
}