import './CreateRoomPage.scss';
import {Select} from "../../../UtilComponents/Select/Select";
import React from "react";
import {RingLoader} from "../../../UtilComponents/RingLoader/RingLoader";
import {StyledButton} from "../../../UtilComponents/StyledButton/StyledButton";
import {Range} from "../../../UtilComponents/Range/Range";

export const CreateRoomPage = ({
	                               handleSubmit,
	                               handleLengthChange,
	                               handleTextTitleChange,
	                               handleUsersCountChange,
	                               length,
	                               textTitle,
	                               maxMembersCount,
	                               texts,
	                               lengths,
	                               isLoading
                               }) => {

	return isLoading ? <RingLoader className="main-spinner" /> : (
		<form className="create-room-page">

			<Select
				custom
				name="length"
				id="text-length"
				label="Длина текста"
				value={length}
				onChange={handleLengthChange}
				options={lengths}
			/>

			<Select
				custom
				name="textTitle"
				id="text-title"
				label="Название текста"
				value={textTitle}
				onChange={handleTextTitleChange}
				options={texts}
			/>


			<Range
				className="create-room-page__members-range"
				type="range"
				id="test5"
				min="1"
				max="6"
				label={`Максимальное количество участников: ${maxMembersCount}`}
				value={maxMembersCount}
				onChange={handleUsersCountChange}
			/>


			<StyledButton
				name="multiplayer"
				className="create-room-page__start-button"
				preventDefault={true}
				onClick={handleSubmit}
			>
				Начать
			</StyledButton>
		</form>
	);
}