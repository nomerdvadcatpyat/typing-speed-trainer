import React from "react";
import './EndStatePage.scss';
import {StyledButton} from "../../../../UtilComponents/StyledButton/StyledButton";
import {BasicLink} from "../../../../UtilComponents/Links/BasicLink/BasicLink";

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
			<BasicLink tabIndex={-1} to="/searchRoom">
				<StyledButton> К списку серверов </StyledButton>
			</BasicLink>
		</div>
	);
}