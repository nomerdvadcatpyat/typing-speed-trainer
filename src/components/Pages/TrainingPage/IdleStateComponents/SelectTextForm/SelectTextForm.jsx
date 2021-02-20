import './SelectTextForm.scss';
import {Select} from "../../../../UtilComponents/Select/Select";
import {Ring} from "react-spinners-css";
import React from "react";

export const SelectTextForm = props => {
	const {
		handleSubmit,
		handleLengthChange,
		handleTextTitleChange,
		length,
		textTitle,
		texts,
		lengths,
		isLoading
	} = props;

	return isLoading ? <Ring className="main-spinner" /> : (
		<form onSubmit={handleSubmit}>
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

			<button type="submit" className="btn waves-effect"> Начать </button>
		</form>
	);
}