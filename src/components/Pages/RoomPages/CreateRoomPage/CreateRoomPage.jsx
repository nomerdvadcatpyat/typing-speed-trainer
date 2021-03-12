import './CreateRoomPage.scss';
import {Select} from "../../../UtilComponents/Select/Select";
import React from "react";
import {Form} from "react-bootstrap";
import {RingLoader} from "../../../UtilComponents/RingLoader/RingLoader";
import {StyledButton} from "../../../UtilComponents/StyledButton/StyledButton";

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
		<Form className="create-room-page">
			<Select
				custom
				name="length"
				label="Длина текста"
				value={length}
				onChange={handleLengthChange}
				options={lengths}
			/>

			<Select
				custom
				name="textTitle"
				label="Название текста"
				value={textTitle}
				onChange={handleTextTitleChange}
				options={texts}
			/>

			<Form.Group className="create-room-page__members-range">
				<Form.Label>Максимальное количество участников: {maxMembersCount} </Form.Label>
				<Form.Control
					custom
					type="range"
					id="test5"
					min="1"
					max="6"
					value={maxMembersCount}
					onChange={handleUsersCountChange}
				/>
			</Form.Group>


			<StyledButton
				name="multiplayer"
				className="create-room-page__start-button"
				preventDefault={true}
				onClick={handleSubmit}
			>
				Начать
			</StyledButton>
		</Form>
	);
}