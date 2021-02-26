import './CreateRoomPage.scss';
import {Select} from "../../UtilComponents/Select/Select";
import {Ring} from "react-spinners-css";
import React from "react";

export const CreateRoomPage = props => {
	const {
		handleSubmit,
		handleLengthChange,
		handleTextTitleChange,
		handleUsersCountChange,
		length,
		textTitle,
		usersCount,
		texts,
		lengths,
		isLoading,
		roomId
	} = props;

	return isLoading && roomId ? <Ring className="main-spinner" /> : (
		<form>
			<Select
				name="length"
				value={length}
				onChange={handleLengthChange}
				options={lengths}
			/>

			<Select
				name="textTitle"
				value={textTitle}
				onChange={handleTextTitleChange}
				options={texts}
			/>

			<div className="range-wrapper">
				<input
					className="range"
					type="range"
					id="test5"
					min="1"
					max="6"
					value={usersCount}
					onChange={handleUsersCountChange}
				/>

				{usersCount}
			</div>


			<button
				type="submit"
				name="multiplayer"
				className="btn waves-effect"
				onClick={handleSubmit}
			>
				Начать
			</button>
		</form>
	);
}